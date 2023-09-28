import { describe, expect, test  } from 'vitest'
import {Livro} from "./Livro";

describe('Livro', () => {
  test('get & set - nome', () => {
    const livro = new Livro()
    const novoNome = 'O Peregrino'
    livro.nome = novoNome
    expect(livro.nome).toEqual(novoNome)
  })

  test('get & set - edicao', () => {
    const livro = new Livro()
    const novaEdicao = 2020
    livro.edicao = novaEdicao
    expect(livro.edicao).toEqual(novaEdicao)
  })

  test('get & set - autor', () => {
    const livro = new Livro()
    const novoAutor = 'Machado de Assis'
    livro.autor = novoAutor
    expect(livro.autor).toEqual(novoAutor)
  })

  test('get & set - ISBN', () => {
    const livro = new Livro()
    const novoISBN = 12345
    livro.ISBN = novoISBN
    expect(livro.ISBN).toEqual(novoISBN)
  })

  test('verificaLancamento - TRUE', () => {
    const livro = new Livro()
    livro.edicao = 2023
    expect(livro.verificaLancamento()).toEqual(true)
  })

  test('verificaLancamento - FALSE', () => {
    const livro = new Livro()
    livro.edicao = 2021
    expect(livro.verificaLancamento()).toEqual(false)
  })
})
