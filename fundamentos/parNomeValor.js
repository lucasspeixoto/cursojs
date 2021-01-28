/* Um Objeto é um conjunto chave/valor */

const saudacao = 'Opa' /* saudacao=chave 'Opa'=valor (Podemos usar o conceita para variáveis tambem)
Nossa variável saudacao foi definida dentro de um contexto lexico (Local onde a variável foi definida fisicamente)
, no caso lexico 1.
Contexto lexico 1 - Contexto local
Dentro de um código temos vários contextos, uma função por exemplo define um contexto (contexto local da função)
Se tentarmos acessar uma variável/constante dentro de contexto de uma função e não encontrar, internamente
essa variável/constante é procurada em contextos mais abrangentes.
*/

function exec(){
    const saudacao = 'Hey' // Par chave valor / contexto léxico 2
    return saudacao
}

// a constante saudacao foi definida 2x, porem em contextos diferentes, não ocorre conflito.

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 26,
    peso: 140,
    altura: 1.50,
    endereco: {
        logradouro: 'Rua dos bobos', // logradouro está em contexto
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)