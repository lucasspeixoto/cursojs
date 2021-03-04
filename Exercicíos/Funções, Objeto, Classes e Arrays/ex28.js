const filtrarPorQuantidadeDeDigitos = function(vetor, dig){
    return vetor.filter(function(p){
        if (String(p).length == dig){
            return true
        } else {
            return false
        }
    })
    
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))


const filtrarPorQuantidadeDeDigitos = function(vetor, dig){
    return vetor.filter(p => {
        const qntDig = String(p).length
        return qntDig === dig
    })
    
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))