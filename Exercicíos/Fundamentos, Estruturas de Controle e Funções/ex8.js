const basquete = function (stringPontuacao) {
    const stringarray = stringPontuacao.split(' ').map(Number)

    let cont = 0
    let posicao = 0
    let menorValor = stringarray[0]
    for (let i = 0; i < stringarray.length; i++) {

        if (i != 0) {
            atual = stringarray[i]
            anterior = stringarray[i - 1]
            if (atual > anterior) {
                cont++
            }
            if (atual < menorValor) {
                menorValor = atual
                posicao = i + 1
            }
        }
    }
    return [cont, posicao]
}
console.log(basquete('10 20 20 8 25 3 0 30 1'))
console.log(basquete('10 20 20 8 25 3 1 30 0'))
console.log(basquete('10 20 0 8 25 3 1 30 20'))
