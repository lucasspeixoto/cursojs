/* Call e Apply são formas de se chamar funções.
A diferença entre eles está na forma como passamos
os parâmetros */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4580,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Usa os valores globais, ja que preco e desc não tem valores padrão
console.log(produto.getPreco())

//Usando call
const carro = { preco: 45000, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))

//Usando o apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$']))

/*
Quando chamamos o call, passamos nos parametros diretamente os parâmetros necessário
console.log(getPreco.call(carro, 0.17, '$'))
Primeiro o contexto (carro) depois os parÂmetros (0.17 e $) 
No apply, os parÂmetos são passados dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))
*/