/* Função Factory é uma função que retorna um objeto - Uma fábrica de objetos (Sem necessidade de instanciar)
As factorys podem tambem retornar funções agrupadas como parâmetros de um objeto

*/
function makePeople(nome, sobrenome, idade) {
    return {
        nome,       // não é necessário nome: nome, pois ja passamos nos parâmetros quais são os atributos
        sobrenome,
        idade
    }
}

const pessoaA = makePeople('Lucas', 'Peixoto', 29)
const pessoaB = makePeople('Liana', 'Fernandes', 27)

console.log(pessoaA.nome)
console.log(pessoaA.sobrenome)
console.log(pessoaA.idade)

console.log(pessoaB.nome)
console.log(pessoaB.sobrenome)
console.log(pessoaB.idade)