const Anuidade = function(mes, valor){
    if (mes >= 1 && mes <=12){
        let nMeses = mes - 1 //Até Janeiro
        let montante = valor * ((1 + 0.05) ** nMeses)
        return montante.toFixed(2)
    } else {
        return 'Mês Inválido'
    }
}

console.log(Anuidade(4, 1000))
