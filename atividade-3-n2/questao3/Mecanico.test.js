import { describe, expect, test  } from 'vitest'
import {Mecanico} from "./Mecanico";

describe('Mecanico', () => {
  test('get & set - matricula', () => {
    const mecanico = new Mecanico()
    const novaMatricula = '2023123'
    mecanico.matricula = novaMatricula
    expect(mecanico.matricula).toEqual(novaMatricula)
  })

  test('get & set - nome', () => {
    const mecanico = new Mecanico()
    const novoNome = 'José'
    mecanico.nome = novoNome
    expect(mecanico.nome).toEqual(novoNome)
  })

  test('adicionaEspecialidade', () => {
    const mecanico = new Mecanico()
    const novoEspecialidade = 'Torno mecânico'
    mecanico.adicionaEspecialidade(novoEspecialidade)

    expect(mecanico.especialidades.length).toEqual(1)
    expect(mecanico.especialidades[0]).toEqual(novoEspecialidade)
  })

  test('removeEspecialidade', () => {
    const mecanico = new Mecanico()
    const novoEspecialidade = 'Torno mecânico'
    mecanico.adicionaEspecialidade(novoEspecialidade)
    mecanico.removeEspecialidade(novoEspecialidade)

    expect(mecanico.especialidades.length).toEqual(0)
  })

  test('funcionarioPremium - FALSE', () => {
    const mecanico = new Mecanico()
    const novoEspecialidade = 'Torno mecânico'
    mecanico.adicionaEspecialidade(novoEspecialidade)

    expect(mecanico.funcionarioPremium()).toEqual(false)
  })

  test('funcionarioPremium - TRUE', () => {
    const mecanico = new Mecanico()
    const novoEspecialidade1 = 'Torno mecânico'
    const novoEspecialidade2 = 'Motor elétrico'
    const novoEspecialidade3 = 'Inglês'
    mecanico.adicionaEspecialidade(novoEspecialidade1)
    mecanico.adicionaEspecialidade(novoEspecialidade2)
    mecanico.adicionaEspecialidade(novoEspecialidade3)

    expect(mecanico.funcionarioPremium()).toEqual(true)
  })
})
