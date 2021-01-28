/* É um operador para destruturação:
    * Retirar atributos de um objeto
    * Retirar elementos de um array
    * Forma simplificada para obter elementos de uma estrutura

     */

const pessoa = {
    nome: 'Liana',
    idade: 27,
    endereco: {
        e1: 'Campinas',
        e2: 'Bauru'
    }
}

const { nome, idade } = pessoa /* tire ({ }) do objeto (= pessoa) os atributos nome e idade
Tira do objeto os atributos e atribui as respectivas variáveis nome e idade, mesma 
nomenclatura que tinham dentro do objeto */
console.log(`Nome: ${nome}\nIdade: ${idade}`)

//Podemos colocar tambem os parâmetros em variáveis com outros nomes (n, i)
const { nome: n, idade: i } = pessoa
console.log(`Nome: ${n}\nIdade: ${i}`)

//Se as variáveis que passamos no destructing, não existirem no objeto, retorna undefined
const { sobrenome, bemHumorada = true } = pessoa // sobrenome e bemHumorada não existem, retorna undefined e true
console.log(sobrenome, bemHumorada)

//Para obter elementos de paramêtros que possuem parametros, como endereco
const { endereco: { e1, e2, e3 } } = pessoa /*
Não obterm todos os dados de endereco, apenas os que passamos (cria e1, e2 e e3, não endereco) */
console.log(e1, e2, e3)

const { conta: { num, ag } } = pessoa // Teremos erro, pois pessoa não tem o parametro conta, muito menos num e ag



