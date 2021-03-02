const calcularSalario = function (horas, valorhora) {
    let salario = valorhora * horas
    return `Salário igual a R$ ${salario}`
}

console.log(calcularSalario(150, 40.5))