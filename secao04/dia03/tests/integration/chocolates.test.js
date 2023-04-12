const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testando o metodo GET na rota /chocolates', () => {
    it('Retorna a lista completa de chocolates', async () => {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
  
      const response = await chai
        .request(app)
        .get('/chocolates');
  
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Testando o metodo GET na rota /chocolates/:id', () => {
    it('Retorna o chocolate Mounds passando o ID 4', async () => {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });

    it('Retorna status 404, usando um ID 99 que não existe', async () => {
        const response = await chai
          .request(app)
          .get('/chocolates/99');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Testando o método GET na rota /chocolates/brand/:brandId', () => {
    it('Busando o brandId 1, recebendo os chocolates da marca Lindt e Sprungli', async () => {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

});