class Biblioteca {
  nome;
  CNPJ;
  anoFundacao;
  livros = []

  constructor() {}

  get nome() {
    return this.nome
  }

  set nome(novoNome) {
    this.nome = novoNome
  }

  get CNPJ() {
    return this.CNPJ
  }

  set CNPJ(novoCNPJ) {
    this.CNPJ = novoCNPJ
  }

  get anoFundacao() {
    return this.anoFundacao
  }

  set anoFundacao(novoAnoFundacao) {
    this.anoFundacao = novoAnoFundacao
  }

  patrimonioHistorico() {
    return this.anoFundacao < 1950
  }

  adicionaLivro(livro) {
    this.livros.push(livro)
  }

  removeLivro(ISBN) {
    this.livros = this.livros.filter((livro) => livro.ISBN !== ISBN)
  }

  consultaLivro(ISBN) {
    return this.livros.find((livro) => livro.ISBN === ISBN)
  }

  acervoPremium() {
    const livrosLancamento = this.livros.filter((livro) => livro.verificaLancamento())
    return livrosLancamento.length >= 5
  }
}

module.exports = {
  Biblioteca
}
