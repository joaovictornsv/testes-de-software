import { describe, expect, test } from 'vitest'
import {Triangulo} from "./Triangulo";

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

  // NOVOS TESTES
  test('Calculo de perimetro - triangulo equilatero', () => {
    const ladoA = 3
    const ladoB = 3
    const ladoC = 3
    const resultadoEsperado = 9
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaPerimetro()).toEqual(resultadoEsperado)
  })
  test('Calculo de perimetro - triangulo isosceles', () => {
    const ladoA = 15
    const ladoB = 15
    const ladoC = 18
    const resultadoEsperado = 48
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaPerimetro()).toEqual(resultadoEsperado)
  })
  test('Calculo de perimetro - triangulo escaleno', () => {
    const ladoA = 10
    const ladoB = 20
    const ladoC = 18
    const resultadoEsperado = 48
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaPerimetro()).toEqual(resultadoEsperado)
  })
  test('Calculo de area - triangulo equilatero', () => {
    const ladoA = 12
    const ladoB = 12
    const ladoC = 12
    const resultadoEsperado = 62.35
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaArea()).toEqual(resultadoEsperado)
  })
  test('Calculo de area - triangulo isosceles', () => {
    const ladoA = 15
    const ladoB = 15
    const ladoC = 18
    const resultadoEsperado = 108
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaArea()).toEqual(resultadoEsperado)
  })
  test('Calculo de area - triangulo escaleno', () => {
    const ladoA = 6
    const ladoB = 8
    const ladoC = 10
    const resultadoEsperado = 24
    const triangulo = new Triangulo(ladoA, ladoB, ladoC)
    expect(triangulo.calculaArea()).toEqual(resultadoEsperado)
  })
})
