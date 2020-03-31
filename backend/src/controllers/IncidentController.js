const database = require('../database/database');

module.exports = {
  async index(request, response) {
    const { page = 1, limit = 5 } = request.query;

    const [count] = await database('incidents').count();

    const incidents = await database('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(limit)
      .offset((page - 1) * limit)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await database('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return response.status(404).json({ error: 'Invalid incident.' });
    }

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not allowed.' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return response.status(204).send();
  },
};
