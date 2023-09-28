import { describe, expect, test  } from 'vitest'
import {Aplicacao} from "./Aplicacao";

describe('Aplicacao', () => {
  test('soma', () => {
    const aplicacao = new Aplicacao('soma')
    const num1 = 1
    const num2 = 2
    const resultadoEsperado = 3
    expect(aplicacao.realizaCalculo(num1, num2)).toEqual(resultadoEsperado)
  })
  test('subtracao', () => {
    const aplicacao = new Aplicacao('subtracao')
    const num1 = 3
    const num2 = 2
    const resultadoEsperado = 1
    expect(aplicacao.realizaCalculo(num1, num2)).toEqual(resultadoEsperado)
  })
  test('multiplicacao', () => {
    const aplicacao = new Aplicacao('multiplicacao')
    const num1 = 2
    const num2 = 2
    const resultadoEsperado = 4
    expect(aplicacao.realizaCalculo(num1, num2)).toEqual(resultadoEsperado)
  })
  test('divisao', () => {
    const aplicacao = new Aplicacao('divisao')
    const num1 = 6
    const num2 = 2
    const resultadoEsperado = 3
    expect(aplicacao.realizaCalculo(num1, num2)).toEqual(resultadoEsperado)
  })
})
