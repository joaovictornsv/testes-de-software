export class Mecanico {
  #matricula
  #nome
  #especialidades = []

  get matricula() {
    return this.#matricula
  }

  set matricula(novaMatricula) {
    this.#matricula = novaMatricula
  }

  get nome() {
    return this.#nome
  }

  set nome(novoNome) {
    this.#nome = novoNome
  }

  get especialidades() {
    return this.#especialidades
  }

  adicionaEspecialidade(especialidade) {
    this.#especialidades.push(especialidade)
  }

  removeEspecialidade(especialidadeParaRemover) {
    this.#especialidades = this.#especialidades.filter((especialidade) => especialidade !== especialidadeParaRemover)
  }

  funcionarioPremium() {
    return this.#especialidades.length > 2
  }
}
