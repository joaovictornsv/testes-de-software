import { describe, expect, test  } from 'vitest'
import {Servico} from "./Servico";

describe('Servico', () => {
  test('constructor', () => {
    const matriculaMecanico = '2023123'
    const placaVeiculo = 'ABC1234'
    const servico = new Servico(matriculaMecanico, placaVeiculo)

    expect(servico.mecanico.matricula).toEqual(matriculaMecanico)
    expect(servico.veiculo.placa).toEqual(placaVeiculo)
  })

  test('ordemServico', () => {
    const matriculaMecanico = '2023123'
    const placaVeiculo = 'ABC1234'
    const servico = new Servico(matriculaMecanico, placaVeiculo)

    const motivo = 'Falha no motor'
    servico.ordemServico(motivo)

    expect(servico.motivo).toEqual(motivo)
    expect(servico.veiculo.numOcorrencias).toEqual(1)
  })
})
