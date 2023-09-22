import { describe, expect, test } from 'vitest'

export class Bola {
  #cor;

  constructor(cor) {
    this.#cor = cor
  }

  getCor() {
    return this.#cor
  }

  setCor(novaCor) {
    this.#cor = novaCor
  }
}

describe('Bola', () => {
  test('getCor', () => {
    const cor = 'azul'
    const bola = new Bola(cor)
    expect(bola.getCor()).toEqual(cor)
  })
  test('setCor', () => {
    const cor = 'azul'
    const bola = new Bola(cor)

    const novaCor = 'verde'
    bola.setCor(novaCor)
    expect(bola.getCor()).toEqual(novaCor)
  })
})
