import { describe, expect, test  } from 'vitest'
import { Biblioteca } from "./Biblioteca"

describe('Biblioteca', () => {
  test('get & set - nome', () => {
    const biblioteca = new Biblioteca()
    const novoNome = 'Biblioteca Central'
    biblioteca.nome = novoNome
    expect(biblioteca.nome).toEqual(novoNome)
  })

  test('get & set - CNPJ', () => {
    const biblioteca = new Biblioteca()
    const novoCNPJ = '000.000.000-00'
    biblioteca.CNPJ = novoCNPJ
    expect(biblioteca.CNPJ).toEqual(novoCNPJ)
  })

  test('get & set - anoFundacao', () => {
    const biblioteca = new Biblioteca()
    const novoAnoFundacao = 1999
    biblioteca.anoFundacao = novoAnoFundacao
    expect(biblioteca.anoFundacao).toEqual(novoAnoFundacao)
  })

  test('patrimonioHistorico - TRUE', () => {
    const biblioteca = new Biblioteca()
    biblioteca.anoFundacao = 1970
    expect(biblioteca.patrimonioHistorico()).toEqual(true)
  })

  test('patrimonioHistorico - FALSE', () => {
    const biblioteca = new Biblioteca()
    biblioteca.anoFundacao = 1984
    expect(biblioteca.patrimonioHistorico()).toEqual(false)
  })
})
