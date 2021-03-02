const multiplicar = function (a, b) {
    if (a >= 0 && b >= 0) {
        let max = Math.max(a, b)
        let min = Math.min(a, b)
        let mult = 0
        for (let i = 1; i <= min; i++) {
            mult += max
        }
        return mult
    } else {
        return 'Inserir números inteiros'
    }
}

console.log(multiplicar(5, 5))


