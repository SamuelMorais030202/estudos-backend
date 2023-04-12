const { expect } = require('chai');

const calculando = require('../../src/example/calculando');

describe('Quando a media for menor que 7', () => {
  it('Retorna reprovação', () => {
    const resposta = calculando(4);

    expect(resposta).to.be.equals('reprovação');
  });
});