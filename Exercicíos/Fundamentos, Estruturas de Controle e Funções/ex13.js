const checkweek = function (dia) {
    if (dia < 1 || dia > 7) {
        return 'Dia inválido'
    }
    switch (dia) {
        case 1:
        case 7:
            return 'Fim de Semana'
        default:
            return 'Dia útil'
    }
}
console.log(checkweek(1))
console.log(checkweek(2))
console.log(checkweek(3))
console.log(checkweek(4))
console.log(checkweek(5))
console.log(checkweek(6))
console.log(checkweek(7))

