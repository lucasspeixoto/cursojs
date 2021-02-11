const calculadora = function (x, ope, y) {
    switch (ope) {
        case '+':
            return `${x} + ${y} = ${x + y}`
        case '-':
            return `${x} - ${y} = ${x - y}`
        case '*':
            return `${x} * ${y} = ${x * y}`
        case '/':
            return `${x} / ${y} = ${x / y}`
        default:
            return 'Operação Inválida'
    }
}

console.log(calculadora(10, '+', 5))
console.log(calculadora(10, '-', 5))
console.log(calculadora(10, '*', 5))
console.log(calculadora(10, '/', 5))
console.log(calculadora(10, 's', 5))