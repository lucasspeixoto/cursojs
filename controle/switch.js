/* O Switch é feito para múltiplas seleções.
A expressão do switch não retorna true ou false,
 retorna um valor, que pode ser alguns tipo
Uma vez que o valor caiu em um determinado case, ele sai
executando todos os outros abaixo, para sair, vamos precisar
colocar break */

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra') // Entra nessa linha para 10 e 9
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 5:
            console.log('Exame')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(-1.2)
