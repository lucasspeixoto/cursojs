const notas = function (nota) {

    if (nota < 0 || nota > 100) {
        return 'Nota Inválida'
    } else {
        if (nota < 38) {
            return `Reprovado - ${nota}`
        } else {
            let nota_arr = Math.ceil(nota / 5) * 5
            let diff = nota_arr - nota
            if (diff < 3) {
                return `Aprovado - ${nota_arr}`
            } else {
                return `Aprovado - ${nota}`
            }
        }
    }
}

console.log(notas(63))