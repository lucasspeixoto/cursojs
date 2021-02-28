let vetorinteiro = [1,2,3,4]
let vetorString = ['Lucas', 'Liana', 'Cecilia', 'César']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args){
    concatenado = []
    for (let i = 0; i < arguments.length; i++){
        concatenado = concatenado.concat(arguments[i])
    }
    return concatenado
}

console.log(concatenar(vetorinteiro, vetorDouble))



let c = []
c = c.concat([1,2], [3,4])
console.log(c)

