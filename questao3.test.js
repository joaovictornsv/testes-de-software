import { describe, expect, test } from 'vitest'

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
}

describe('Triangulo', () => {
  test('escaleno válido', () => {
    const ladoA = 3
    const ladoB = 4
    const ladoC = 5
    const resultadoEsperado = 'Triângulo escaleno válido'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
  test('isósceles válido', () => {
    const ladoA = 2
    const ladoB = 2
    const ladoC = 3
    const resultadoEsperado = 'Triângulo isósceles válido'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
  test('equilátero válido', () => {
    const ladoA = 3
    const ladoB = 3
    const ladoC = 3
    const resultadoEsperado = 'Triângulo equilátero válido'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
  test('lado com valor zero', () => {
    const ladoA = 0
    const ladoB = 3
    const ladoC = 3
    const resultadoEsperado = 'Lado informado pelo usuário com valor zero'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
  test('lado com valor negativo', () => {
    const ladoA = -2
    const ladoB = 3
    const ladoC = 3
    const resultadoEsperado = 'Lado informado pelo usuário com valor negativo'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
  test('Soma de 2 lados é igual ao terceiro lado', () => {
    const ladoA = 20
    const ladoB = 2
    const ladoC = 1
    const resultadoEsperado = 'Não é possível formar um triângulo com os valores informados'
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.getClassificacao()).toEqual(resultadoEsperado)
  })
})
