const exp = function (b, e) {
    let result = b ** e
    return result
}
console.log(exp(3, 2))

// Ou com arrow function

const exp = (b, e) => { return b ** e }
console.log(exp(2, 3))
