import { describe, expect, test  } from 'vitest'
import {Veiculo} from "./Veiculo";

describe('Veiculo', () => {
  test('get & set - placa', () => {
    const veiculo = new Veiculo()
    const novaPlaca = 'ABC1234'
    veiculo.placa = novaPlaca
    expect(veiculo.placa).toEqual(novaPlaca)
  })

  test('get & set - tipo', () => {
    const veiculo = new Veiculo()
    const novoTipo = 'SVU'
    veiculo.tipo = novoTipo
    expect(veiculo.tipo).toEqual(novoTipo)
  })

  test('get & set - numOcorrencias', () => {
    const veiculo = new Veiculo()
    const novoNumOcorrencias = 2
    veiculo.numOcorrencias = novoNumOcorrencias
    expect(veiculo.numOcorrencias).toEqual(novoNumOcorrencias)
  })

  test('get & set - anoDeFabricacao', () => {
    const veiculo = new Veiculo()
    const novoAnoDeFabricacao = 2012
    veiculo.anoDeFabricacao = novoAnoDeFabricacao
    expect(veiculo.anoDeFabricacao).toEqual(novoAnoDeFabricacao)
  })

  test('calculoGarantia - PICKUP', () => {
    const veiculo = new Veiculo()
    veiculo.tipo = 'PICKUP'
    veiculo.anoDeFabricacao = 2012
    expect(veiculo.calculoGarantia()).toEqual(2014)
  })

  test('calculoGarantia - SUV', () => {
    const veiculo = new Veiculo()
    veiculo.tipo = 'SUV'
    veiculo.anoDeFabricacao = 2012
    expect(veiculo.calculoGarantia()).toEqual(2014)
  })

  test('calculoGarantia - POPULAR', () => {
    const veiculo = new Veiculo()
    veiculo.tipo = 'POPULAR'
    veiculo.anoDeFabricacao = 2012
    expect(veiculo.calculoGarantia()).toEqual(2014)
  })
})
