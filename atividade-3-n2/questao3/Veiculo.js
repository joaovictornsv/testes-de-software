export class Veiculo {
  #placa
  #tipo
  #numOcorrencias = 0
  #anoDeFabricacao

  constructor() {}

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
    return this.#anoDeFabricacao + 2
  }
}
