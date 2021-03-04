//Solução 1 - for loop
const inverter = function (obj) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let inv_obj = {}
    for (let i = 0; i < keys.length; i++) {
        inv_obj[values[i]] = keys[i]
    }
    return inv_obj
}

console.log(inverter({ a: 1, b: 2, c: 3 }))

//Solução 2 - foreach
const inverter = function (obj) {
    const inv_obj = {}
    Object.entries(obj).forEach( parChaveValor => {
        inv_obj[ parChaveValor[1] ] = parChaveValor[0] 
        
    })
    return inv_obj
}
console.log(inverter({ a: 1, b: 2, c: 3 }))

//Solução 3 - fromEntries e map
function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
    }
console.log(inverter({ a: 1, b: 2, c: 3 }))

// fromEntries - Pega um array de arrays, e para cada array, coloca o 1º elemento como um parâmetros e o 2º como valor, retornando assim um objeto
console.log(Object.fromEntries([[1, 'a'], [2, 'b'], [3, 'c']]))