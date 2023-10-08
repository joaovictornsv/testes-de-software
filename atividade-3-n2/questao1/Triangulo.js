export class Triangulo {
  #ladoA;
  #ladoB;
  #ladoC;

  constructor(ladoA, ladoB, ladoC) {
    this.#ladoA = ladoA
    this.#ladoB = ladoB
    this.#ladoC = ladoC
  }
  getClassificacao() {
    const erro = this.#verificarExistencia()
    if (erro) {
      return erro
    }

    if (
      this.#ladoA === this.#ladoB &&
      this.#ladoB === this.#ladoC
    ) {
      return 'Triângulo equilátero válido'
    }

    if (
      this.#ladoA !== this.#ladoB &&
      this.#ladoB !== this.#ladoC &&
      this.#ladoA !== this.#ladoC
    ) {
      return 'Triângulo escaleno válido'
    }

    return 'Triângulo isósceles válido'
  }

  #verificarExistencia() {
    if (
      this.#ladoA < 0 ||
      this.#ladoB < 0 ||
      this.#ladoC < 0
    ) {
      return 'Lado informado pelo usuário com valor negativo'
    }

    if (
      this.#ladoA === 0 ||
      this.#ladoB === 0 ||
      this.#ladoC === 0
    ) {
      return 'Lado informado pelo usuário com valor zero'
    }

    if (!(
      this.#ladoA + this.#ladoB > this.#ladoC &&
      this.#ladoA + this.#ladoC > this.#ladoB &&
      this.#ladoB + this.#ladoC > this.#ladoA
    )) {
      return 'Não é possível formar um triângulo com os valores informados'
    }
    return null
  }

  calculaPerimetro() {
    return this.#ladoA + this.#ladoB + this.#ladoC
  }

  calculaArea() {
    const p  = this.calculaPerimetro()/2
    const area = Math.sqrt(p*(p-this.#ladoA)*(p-this.#ladoB)*(p-this.#ladoC))
    return Number(area.toFixed(2))
  }
}
