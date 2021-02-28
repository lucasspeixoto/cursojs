const limites = function (vetor) {
    var maior = vetor[0]
    var menor = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        } else {
            continue
        }
    }
    return `Maior: ${maior} | Menor: ${menor}`
}

console.log(limites([-2, 0, 2, 3, 4, -5, 33]))
