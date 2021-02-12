/* pessoa -> 123(endereço de memória) -> {...} (Objeto)
    A constante pessoa aponta para o endereço 123
    que contem o objeto, o endereço é constante
    mas o objeto que ele possue pode variar
*/

const pessoa = { nome: 'Lucas' }
console.log(pessoa)

pessoa.nome = 'Liana'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Fulano' } 
/*Aqui, ao atribuir pessoa para outro objeto, 
estamos tentando mudar o endereço, o que não pode */

Object.freeze(pessoa) /* Congelamos o objeto, a partir de agora
não conseguimos alterar e nem adicionar nem deletar atributos.
Tornamos o objeto constante. */

pessoa.nome = 'Raul'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

//Criando objeto constante
const pessoaConstante = Object.freeze({nome: 'Lucas'})
pessoaConstante.nome = 'Liana'
console.log(pessoaConstante)

