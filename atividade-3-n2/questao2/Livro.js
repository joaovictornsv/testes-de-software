class Livro {
  nome;
  edicao;
  autor;
  ISBN;

  get nome() {
    return this.nome
  }

  set nome(novoNome) {
    this.nome = novoNome
  }

  get edicao() {
    return this.edicao
  }

  set edicao(novoEdicao) {
    this.edicao = novoEdicao
  }

  get autor() {
    return this.autor
  }

  set autor(novoAutor) {
    this.autor = novoAutor
  }

  get ISBN() {
    return this.ISBN
  }

  set ISBN(novoISBN) {
    this.ISBN = novoISBN
  }

  verificaLancamento() {
    return this.edicao > 2022
  }
}

module.exports = {
  Livro
}
