  class Imovel {
    codigo;
    tipo;
    tamanho;
    preco;

    constructor() {}

    oportunidade() {
      const valor = this.preco / this.tamanho
      if (this.tipo === 'AP') {
        return valor < 5000
      }
      if (this.tipo === 'CASA') {
        return valor < 3000
      }
      return false
    }
  }

  class Corretor {
    CRECI;
    nome;
    imoveis = [];

    constructor() {}

    adicionaImovel(imovel) {
      this.imoveis.push(imovel)
    }
    removeImovel(codigo) {
      this.imoveis = this.imoveis.filter((imovel) => imovel.codigo !== codigo)
    }
    quantidadeImoveis() {
      return this.imoveis.length
    }

    vendedorEstrela() {
      const imoveisOportunidade = this.imoveis.filter((imovel) => imovel.oportunidade())
      return imoveisOportunidade.length >= 1
    }
  }

  module.exports = {
    Imovel,
    Corretor
  }
