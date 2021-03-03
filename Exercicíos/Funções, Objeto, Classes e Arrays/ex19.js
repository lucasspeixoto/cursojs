const calcularMedia = function (vetor) {
    return (vetor.reduce((acum, atual) => acum + atual, 0)) / (vetor.length)
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

