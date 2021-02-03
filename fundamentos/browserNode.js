let a = 3 // Essa declaração não é exportada, fica no arquivo local.

global.b = 123
this.c = 456 /* Isso signigica que vai exportar o c para fora do arquivo.
Dentro do node, cada arquivo é um módulo. Diferente de programar na web, onde
todos os arquivos está disputando no escopo global. */
this.d = false
this.e = 'teste'


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) //module.exports é igual ao this
console.log(module.exports) // Retornar para fora um objeto com os valores atribuidos ('c', 'd' e 'e')

//Outra forma:
//module.exports = { e: 456, f: false, g: 'teste' }

// criando uma variavel maluca, sem var e let
abc = 3 // Criar a variável sem var ou let, vai coloca-la direto no escopo global. NÃO FAZER ISSO
console.log(global.abc)
