const estaEntre = function (n, a, b, inclusivo = false) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    if (inclusivo == false) {
        if (n > min && n < max) {
            return true
        } else {
            return false
        }
    } else {
        if (n >= min && n <= max) {
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(16, 100, 160))
