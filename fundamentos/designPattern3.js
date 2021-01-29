function factory(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    // Declaração de Função no escopo interno da nossa fábrica
    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }

    return pessoa
}

let pessoaA = factory('Liana', 'Fernandes')
let pessoaB = factory('Lucas', 'Peixoto')

console.log(pessoaA)
console.log(pessoaB)

console.log(pessoaA.nomeCompleto()) /* Aqui teremos erro, pois nomeCompleto foi definida no escopo interno da nossa fábrica
Em nenhum momento foi inserida no nosso objeto pessoa que é retornado de forma pública */

/* Os objetos pessoaA e pessoaB são publicos, podendo ser acessados em qualquer escopo.
Definimos um função que criar um objeto vazio e, fora dessa função, definimos as propriedades,
utilizando os recursos da função, da fábrica */

//         Expondo a função de forma pública - O nome desse design Pattern é 'Factory'
function factory(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    // Declaração de Função no escopo interno da nossa fábrica
    function fullName() {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }

    pessoa.fullName = fullName // Tornando pública nossa função

    return pessoa
}

let pessoaA = factory('Liana', 'Fernandes')
let pessoaB = factory('Lucas', 'Peixoto')

console.log(pessoaA.fullName())

