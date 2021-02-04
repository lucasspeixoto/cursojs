/* Função associada a um número. Retorna true se um número
está entre os parâmetros e false se não está */
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
    // Se é Number, acessamos com this
}

const imprimirResultado = function (nota) {
    
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Exame')
    } else if (nota.entre(0, 3.99)) {
        console.log('Bombou')
    } else {
        console.log('Nota Inválida')
    }

    console.log('Fim')
}

imprimirResultado(7)
