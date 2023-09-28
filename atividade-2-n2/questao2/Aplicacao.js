const {Calculadora} = require("./Calculadora");

class Aplicacao {
  calculadora;
  operacao;

  constructor(operacao) {
    this.calculadora = new Calculadora()
    this.operacao = operacao
  }

  realizaCalculo(num1, num2) {
    if (this.operacao === 'subtracao') {
      return this.calculadora.subtrair(num1, num2)
    }

    if (this.operacao === 'multiplicacao') {
      return this.calculadora.multiplicar(num1, num2)
    }

    if (this.operacao === 'divisao') {
      return this.calculadora.dividir(num1, num2)
    }

    // Somar é a operação default
    return this.calculadora.somar(num1, num2)
  }
}

module.exports = {
  Aplicacao
}
