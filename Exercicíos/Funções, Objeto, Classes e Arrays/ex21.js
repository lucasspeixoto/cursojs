//Solução 1 - map
const menorNumero = function (vetor) {
    var menor = vetor[0]
    vetor.map(function (item) {
        if (item < menor) {
            menor = item
        }
    })
    return menor
}
console.log(menorNumero([10, 5, 35, -65]))

//Solução 2 - reduce
const menorNumero = function (vetor) {
    return vetor.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(menorNumero([10, 5, 35, 65]))

//Solução 3 - Math
const menorNumero = function (vetor) {
    return Math.min(...vetor)
}
console.log(menorNumero([10, 5, 35, 65]))