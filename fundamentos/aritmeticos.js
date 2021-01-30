const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d // Operações binárias --> a+b  | (a+b)+c  |   (a+b+c)+d  Operadores infix
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(`Soma: ${soma}`)
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multiplicacao}`)
console.log(`Divisão: ${divisao}`)
console.log(`Modulo: ${modulo}`)
// d++  //Operador postfix - Depois do operando
