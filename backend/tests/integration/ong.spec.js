const request = require('supertest');
const app = require('../../src/app');
const database = require('../../src/database/database');

describe('ONG', () => {
  beforeEach(async () => {
    await database.migrate.rollback();
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD',
        email: 'contato@email.com',
        whatsapp: '1700000000',
        city: 'São José do Rio Preto',
        uf: 'SP',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
