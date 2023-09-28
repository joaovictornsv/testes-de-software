class Calculadora {
  #resultado = 0;

  somar(num1, num2) {
    this.#resultado = num1 + num2
    return this.#resultado
  }

  subtrair(num1, num2) {
    this.#resultado = num1 - num2
    return this.#resultado
  }

  multiplicar(num1, num2) {
    this.#resultado = num1 * num2
    return this.#resultado
  }

  dividir(num1, num2) {
    this.#resultado = num1 / num2
    return this.#resultado
  }
}

module.exports = {
  Calculadora
}
