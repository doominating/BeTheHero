const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    function generateRandomOngId() {
      return crypto.randomBytes(4).toString('HEX');
    }

    async function getOngById(id) {
      return await connection('ongs')
        .select('*')
        .where({ id: id })
        .first();
    }

    const { name, email, whatsapp, city, uf } = request.body;

    let id = generateRandomOngId();

    let ongWithIdExist = await getOngById(id);

    while (ongWithIdExist) {
      id = generateRandomOngId();
      ongWithIdExist = await getOngById(id);
    }

    await connection('ongs').insert({
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
