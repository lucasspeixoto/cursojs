//Object.preventExtensios


/*   Não vai permitir adicionar parâmetros
em objetos. */

const produto = Object.preventExtensions({
    nome: 'Lucas',
    idade: 29,
    altura: 1.68
}) //Podemos alterar os atributos, mas não adicionar novos

console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Liana'
produto.altura = 1.62
produto.idade = 27
produto.carro = 'Zafira'
delete produto.idade
console.log(produto)

// Object.seal
/* Não console, adicionar nem excluor atributos,
apenas modificar */
const pessoa = {nome: 'Liana', status: 'Linda'}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Fernandes'
delete pessoa.nome
pessoa.status = 'Super Linda'

console.log(pessoa)


//Object.freeze = selado + Valores constantes

/* Não permite, incluir, excluir ou alterar atributos */
