import {Mecanico} from "./Mecanico";
import {Veiculo} from "./Veiculo";

export class Servico {
  #id
  #motivo
  #mecanico
  #veiculo

  constructor(matricula, placaVeiculo) {
    this.#id = new Date().getMilliseconds()

    const mecanico = new Mecanico()
    mecanico.matricula = matricula
    this.#mecanico = mecanico

    const veiculo = new Veiculo()
    veiculo.placa = placaVeiculo
    this.#veiculo = veiculo
  }

  get motivo() {
    return this.#motivo
  }

  get mecanico() {
    return this.#mecanico
  }

  get veiculo() {
    return this.#veiculo
  }

  ordemServico(motivo) {
    this.#motivo = motivo
    this.#veiculo.numOcorrencias += 1
  }
}
