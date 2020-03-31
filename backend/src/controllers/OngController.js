const generateUniqueId = require('../utils/generateUniqueId.js');
const database = require('../database/database');

module.exports = {
  async index(request, response) {
    const ongs = await database('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    async function getOngById(id) {
      return await database('ongs')
        .select('*')
        .where({ id: id })
        .first();
    }

    const { name, email, whatsapp, city, uf } = request.body;

    let id = generateUniqueId();

    let ongWithIdExist = await getOngById(id);

    while (ongWithIdExist) {
      id = generateUniqueId();
      ongWithIdExist = await getOngById(id);
    }

    await database('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  },
};
