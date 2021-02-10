// Closure - Fechamento, algo que envolve algo

// Closure é o escopo criado quando uma função é declarada
/* Esse escopo permite a função acessar e manipular variáveis
externas à função */

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora() // fora() retorna uma função armazenada em 'minhaFuncao'
console.log(minhaFuncao()) /* Aqui, vamos retornar a funcao dentro, que foi definida no contexto
léxico da função fora(), dentro do seu escopo, e nesse escopo, tinhas um valor de x igual a 'Local'
ou seja, vamos obter o que ela encontrou no seu contexto */