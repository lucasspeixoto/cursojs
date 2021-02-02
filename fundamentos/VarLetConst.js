/* O que é escopo
    R: Escopo é o ambiente onde determinada variavel vai estar disponível/visível
    */

var nome = 'Lucas Peixoto'

function retornarNome() {
    return nome
}

console.log(retornarNome()) // Não encontrou a variável nome no escopo local, foi para o global e encontrou.

/* Escopos
 * Global
 * Bloco
 * 
 */

// Qual a diferênça de var, let e const ?
/* Precisamos prestar atenção em três pontos:
    * Escopo    
    * Redeclaração
    * Hoisting
 O que delimita o escopo de uma variável var é uma função, ou seja,
 a variável var não estrapola o limite imposto por uma função.
    */
//                          ESCOPO                          //
function retornarNome() {
    var nome = 'Lucas Peixoto'
    return nome
}
console.log(nome) // Retorna erro, pois a variável nome está definida no escopo de uma função.

var nome = 'Liana Fernandes'
function retornarNome() {
    var nome = 'Lucas Peixoto'
    return nome
}
console.log(nome) /* Apesar de existir a variável nome em um escopo de função, retorna 
a variável definida no escopo global, pois o definida na função não extrapola. */

//                  REDECLARAÇÃO                    //
/*Variáveis do tipo var aceitam ser redeclaradas normalmente*/

var nome = 'Lucas Peixoto'
var nome = 'Liana Fernandes'
console.log(nome)


var nome = 'Lucas Peixoto'
function retornarNome() {
    nome = 'Liana Fernandes'
    return nome
}
retornarNome()
console.log(nome) //Aqui é retornado Liana Fernandes, pois a função altera o valor de nome, não estamos redeclarando

//                             HOISTING                        //
console.log(nome) // A variável declarada em baixo sofreu hoisting
var nome

console.log(nome) // Retorna erro, pois let apesar de sofrer hoisting não é inicializado, a declaração precisa ser na ordem
let nome

//a variável nome é alterada no escopo da condicional
var nome = 'Liana Fernandes'
if (1 + 1 === 2) {
    var nome = 'Lucas Peixoto'
}
console.log(nome) // Retorna 'Lucas Peixoto'

//a variável nome não é alterada no escopo da condicional (let possui escopo de bloco)
var nome = 'Liana Fernandes'
if (1 + 1 === 2) {
    let nome = 'Lucas Peixoto' //Não passa o escopo do bloco, não visível em outras parte do código
}
console.log(nome) // Retorna 'Liana Fernandes'

let nome = 'Lucas Peixoto'
let nome = 'Liana Fernandes'
console.log(nome) //let não permite redeclaração, apenas alteração do valor nome = 'Liana Fernandes'


const nome = 'Lucas Peixoto'
nome = 'Liana Fernandes'
console.log(nome)   //Não podemos nem alterar o valor de uma constante.

/* Para constantes, podemos alterar os parâmetros caso essa constante seja um objeto
alteramos os parâmetros mas a constante continua apontando para o mesmo objeto,
não pode apontar para outro objeto, por ser constante
*/
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Peixoto'
}
pessoa.nome = 'Liana'
console.log(pessoa)

/* Existem 2 formas de registrar funções no JS:
    * Function Declaration
    * Function Expression
*/

//Funcion Declaration
testeDeclaration() //Se executar a função antes de declarar, ela executar, 
function testeDeclaration(){
    console.log("Testando Function Declaration")
}

//Function Expression
testeExpression() // Aqui retorna erro dizendo que não é função. Ela aqui nessa linha existe, mas ainda não é uma função
var testeExpression = function(){
    console.log("Testando Function Expression")
}

/* Explicação:
    Quando é feito a declaração de uma função ela sofre hoisting, a declaração de uma variável
    tambem sofre hoisting, so que no caso do var, independente do valor, seja uma string ou uma função,
    apenas a variável sofre hoisting recebendo undefined, e somente la em baixo recebe o valor da função

    */