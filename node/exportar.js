// Como exportar variáveis ? Deixa-las fora do arquivo

console.log(module.exports === this)
console.log(module.exports === exports)

//Visível fora do arquivo:
this.a = 1 
module.exports.b = 2
exports.c = 3

exports = null //Não vai alterar o retorno, quem é exportado para fora é o module.exports

console.log(module.exports) //Se mantem o mesmo

exports = {
    nome: 'Liana',
    def: 'Linda'
}

console.log(module.exports) 


/* Mudamos a referência de exports duas vezes (linha 11 e 15), 
mas ele continua apontando para o mesmo objeto. Para ele apontar
para outro objetos, precisamos usar o module.exports



*/

