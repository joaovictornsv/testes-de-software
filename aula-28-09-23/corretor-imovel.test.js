import { describe, expect, test  } from 'vitest'
import {Corretor, Imovel} from "./corretor-imovel";

describe('Imovel', () => {
  test('tipo CASA - oportunidade TRUE', () => {
    const imovel = new Imovel()
    imovel.codigo = 1
    imovel.tipo = 'CASA'
    imovel.tamanho = 50
    imovel.preco = 100_000
    expect(imovel.oportunidade()).toEqual(true)
  })
  test('tipo CASA - oportunidade FALSE', () => {
    const imovel = new Imovel()
    imovel.codigo = 1
    imovel.tipo = 'CASA'
    imovel.tamanho = 50
    imovel.preco = 300_000
    expect(imovel.oportunidade()).toEqual(false)
  })
  test('tipo AP - oportunidade TRUE', () => {
    const imovel = new Imovel()
    imovel.codigo = 1
    imovel.tipo = 'AP'
    imovel.tamanho = 50
    imovel.preco = 100_000
    expect(imovel.oportunidade()).toEqual(true)
  })
  test('tipo AP - oportunidade FALSE', () => {
    const imovel = new Imovel()
    imovel.codigo = 1
    imovel.tipo = 'AP'
    imovel.tamanho = 50
    imovel.preco = 300_000
    expect(imovel.oportunidade()).toEqual(false)
  })
})

const criarImovelOportunidade = () => {
  const imovel = new Imovel()
  imovel.codigo = 1
  imovel.tipo = 'AP'
  imovel.tamanho = 50
  imovel.preco = 100_000
  return imovel
}

const criarImovelSemOportunidade = () => {
  const imovel = new Imovel()
  imovel.codigo = 1
  imovel.tipo = 'AP'
  imovel.tamanho = 50
  imovel.preco = 300_000
  return imovel
}

describe('Corretor', () => {
  test('vendedorEstrela TRUE', () => {
    const corretor = new Corretor()
    corretor.CRECI = 12345
    corretor.nome = 'Cabecinha'

    corretor.adicionaImovel(criarImovelOportunidade())
    corretor.adicionaImovel(criarImovelSemOportunidade())

    expect(corretor.vendedorEstrela()).toEqual(true)
  })
  test('vendedorEstrela FALSE', () => {
    const corretor = new Corretor()
    corretor.CRECI = 12345
    corretor.nome = 'Cabecinha'

    corretor.adicionaImovel(criarImovelSemOportunidade())

    expect(corretor.vendedorEstrela()).toEqual(false)
  })
})
