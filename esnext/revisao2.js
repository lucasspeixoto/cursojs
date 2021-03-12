/*Arrow Function
    Sempre são anônimas
*/

const soma = (a, b) => a + b
console.log(soma(3, 5))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/*Quando temos uma função tradicional, o this pode variar com a chamada da função
e tambem pode variar se mudar o contexto a partir do bind, call ou apply, ja na
função arrow, isso não é possível.
*/

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log('Olá')
log()
log(null)
log(undefined)


//operador rest '...'
/*A ideia é ter parametros variaveis, que são agrupados
em um array internamente

*/
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4))