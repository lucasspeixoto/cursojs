const notas = function (n1, n2, n3) {
    //Validação notas
    let soma = n1 + n2 + n3
    let min = Math.min(n1,n2,n3)
    if (soma >= 0 && soma <= 30 &&  min>= 0) {
        let notas = [n1,n2,n3]
        nota = notas.sort((a,b) => a < b ? 1 : -1)
        let media = 0.1*(4*notas[0] + 3*notas[1] + 3*notas[2])
        return `Notas\nN1: ${n1}, N2: ${n2}, N3: ${n3}
Média: ${media.toFixed(2)}
Resultado: '${media < 5 ? 'REPROVADO' : 'APROVADO'}'`;


    } else {
        return 'Alguma nota está inválida'
    }
}

console.log(notas(7, 5, 1))

