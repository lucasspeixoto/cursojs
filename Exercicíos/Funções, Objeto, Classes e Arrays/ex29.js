const segundoMaior = function(vetor){
    return vetor.sort((a, b) => b - a)[1]
}

console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6)