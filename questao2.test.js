import { describe, expect, test } from 'vitest'

export class Calculadora {
  #resultado = 0;

  somar(num1, num2) {
    this.#resultado = num1 + num2
    return this.#resultado
  }

  subtrair(num1, num2) {
    this.#resultado = num1 - num2
    return this.#resultado
  }

  multiplicar(num1, num2) {
    this.#resultado = num1 * num2
    return this.#resultado
  }

  dividir(num1, num2) {
    this.#resultado = num1 / num2
    return this.#resultado
  }
}

describe('Calculadora', () => {
  test('somar', () => {
    const num1 = 1
    const num2 = 2
    const resultadoEsperado = 3
    const calculadora = new Calculadora()
    expect(calculadora.somar(num1, num2)).toEqual(resultadoEsperado)
  })
  test('subtrair', () => {
    const num1 = 3
    const num2 = 2
    const resultadoEsperado = 1
    const calculadora = new Calculadora()
    expect(calculadora.subtrair(num1, num2)).toEqual(resultadoEsperado)
  })
  test('multiplicar', () => {
    const num1 = 2
    const num2 = 2
    const resultadoEsperado = 4
    const calculadora = new Calculadora()
    expect(calculadora.multiplicar(num1, num2)).toEqual(resultadoEsperado)
  })
  test('dividir', () => {
    const num1 = 6
    const num2 = 2
    const resultadoEsperado = 3
    const calculadora = new Calculadora()
    expect(calculadora.dividir(num1, num2)).toEqual(resultadoEsperado)
  })
})
