import { describe, expect, test  } from 'vitest'
import {Livro} from "./Livro";
import {Biblioteca} from "./Biblioteca";

const criaLivroNaoLancamento = () => {
  const livro = new Livro()
  livro.edicao = 2021
  return livro
}

const criaLivroLancamento = () => {
  const livro = new Livro()
  livro.edicao = 2023
  return livro
}

describe('Integração Livro - Biblioteca', () => {
  test('acervoPremium - TRUE', () => {
    const biblioteca = new Biblioteca()
    biblioteca.nome = 'Biblioteca Central'
    biblioteca.CNPJ = '000.000.000-00'
    biblioteca.anoFundacao = 2021

    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroNaoLancamento())
    expect(biblioteca.acervoPremium()).toEqual(true)
  })

  test('acervoPremium - FALSE', () => {
    const biblioteca = new Biblioteca()
    biblioteca.nome = 'Biblioteca Central'
    biblioteca.CNPJ = '000.000.000-00'
    biblioteca.anoFundacao = 2021

    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroLancamento())
    biblioteca.adicionaLivro(criaLivroNaoLancamento())
    expect(biblioteca.acervoPremium()).toEqual(false)
  })
})
