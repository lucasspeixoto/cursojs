console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)


//Acessando o this dentro de uma função que está no módulo
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis() /*Dentro de uma função, o this não aponta para 
exports nem module.exports, mas fora aponta.
Dentro da função, this aponta para global
*/