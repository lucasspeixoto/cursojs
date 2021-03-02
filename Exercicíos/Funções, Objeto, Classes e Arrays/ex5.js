const compara = function (x, y) {
    if ((typeof x == "number") && (typeof y == "number")) {
        if (x >= y) {
            return true
        } else if (x < y) {
            return false
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(compara(0, 0))
console.log(compara(0, "0"))
console.log(compara(5, 2))
