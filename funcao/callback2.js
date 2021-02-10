const notas = [7.7, 6.5, 5.4, 8.9, 3.6, 4.4, 9.0]

/* Objetivo:
    Gerar um novo array com as notas menores que 7 */

//Opção 1 - Sem Callback
const notasbaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

//Opção 2 - Com Callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas2)
/* Ao usarmos filter, estamos solicitando que, para o array notasbaixa, passe
apenas as notas no momento do loop que a função passada no filter, for true */

//Opção 3 - Com callback e arrow
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)