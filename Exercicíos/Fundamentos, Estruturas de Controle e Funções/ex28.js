const LerVetor = function (vetor) {
    var pares = 0
    var impares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares += 1
        } else {
            impares += 1
        }
    }
    return `${pares} números pares e ${impares} números ímpares`
}

console.log(LerVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))