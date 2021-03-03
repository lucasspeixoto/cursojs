//Solução 1 - com for loop
function somarNumeros(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma
}
console.log(somarNumeros([10, 10, 10, 12]))

//Solução 2 - forEach
function somarNumeros(vetor){
    let soma = 0
    vetor.forEach(item => soma += item)
    return soma
    
}
console.log(somarNumeros([10, 10, 10, 12]))

//Solução 3 - reduce
function somarNumeros(vetor){
    return vetor.reduce((acumulador, atual) => acumulador + atual, 0)
}
console.log(somarNumeros([10, 10, 10, 12]))


//console.log([10, 10, 10, 12].reduce((acumulador, atual) => acumulador + atual, 0))