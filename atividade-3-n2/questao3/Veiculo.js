export class Veiculo {
  #placa
  #tipo
  #numOcorrencias
  #anoDeFabricacao

  get placa() {
    return this.#placa
  }

  set placa(novaPlaca) {
    this.#placa = novaPlaca
  }

  get tipo() {
    return this.#tipo
  }

  set tipo(novoTipo) {
    this.#tipo = novoTipo
  }

  get numOcorrencias() {
    return this.#numOcorrencias
  }

  set numOcorrencias(novoNumOcorrencias) {
    this.#numOcorrencias = novoNumOcorrencias
  }

  get anoDeFabricacao() {
    return this.#anoDeFabricacao
  }

  set anoDeFabricacao(novoAnoDeFabricacao) {
    this.#anoDeFabricacao = novoAnoDeFabricacao
  }

  calculoGarantia() {
    if (this.#tipo === 'PICKUP') {
      return this.#anoDeFabricacao + 5
    }
    if (this.#tipo === 'SUV') {
      return this.#anoDeFabricacao + 3
    }
    // Tipo POPULAR é o default
    return this.#anoDeFabricacao + 2
  }
}
