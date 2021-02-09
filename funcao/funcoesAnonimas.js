const soma = function (x, y) { //Sem nome = Anônima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //Se não passar o parâmetro operacao, usa a função soma
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { //Função sem passada como parâmetro
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //Passando uma arro function, que sempre é anônima

const pessoa = {
    falar: function () { //Função anônima como parâmetro de um objeto
        console.log('Opa')
    }
}

pessoa.falar()