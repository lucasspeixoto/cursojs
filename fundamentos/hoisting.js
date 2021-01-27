/* Quando declaramos uma variável var, ocorre o hoisting, que é 
o comportamento padrão de mover a declaração de variáveis para o topo.
O interpretador da linguagem joga ela para cima
*/

console.log('a =', a)
var a = 2
console.log('a =', a)

/* Ao imprimir a variável a na linha 5, antes defini-la
não temos um erro, ela é entendi-da como 'undefined', pois o interpretador
entende que ela foi vai ser declarada abaixa
*/

/* Dentro de função */

function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

/* Com let */
function teste2(){
    console.log('a =', a)
    let a = 2
    console.log('a =', a)
}
// teste2() ERRRO