const media = function (vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / vetor.length

    return `Média: ${media.toFixed(2)}`
}

console.log(media([1, 3, 7, 8, 9, 11, 23]))
