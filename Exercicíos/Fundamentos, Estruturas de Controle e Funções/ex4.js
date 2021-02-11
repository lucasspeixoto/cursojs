const div = function (x, y) {
    let result = Math.floor(x/y)
    let resto = x % y
    return `Resultado: ${result}\nResto: ${resto}`
}
console.log(div(4, 3))


const div = (x, y) => {return `Resultado: ${Math.floor(x/y)}\nResto: ${x % y}`}
console.log(div(11, 4))