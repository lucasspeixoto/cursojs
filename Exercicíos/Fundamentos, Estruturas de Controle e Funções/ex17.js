const aumento = function(salario, plano){

    let plano_upper = plano.toUpperCase()
    switch(plano_upper){
        case 'A':
            return salario + salario*0.1
        case 'B':
            return salario + salario*0.15
        case 'C':
            return salario + salario*0.20
        default:
            return 'Plano Inválido'
    }
}

console.log(aumento(10000, 'a'))
console.log(aumento(10000, 'b'))
console.log(aumento(10000, 'c'))