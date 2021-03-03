function checarAnoBissexto(ano){
    const divPorQuatro = ano % 4 == 0
    const divPorCem = ano % 100 == 0
    const divPorQuatrocentos = ano % 400 == 0

    return (divPorQuatro && !divPorCem) || divPorQuatrocentos
}

console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
