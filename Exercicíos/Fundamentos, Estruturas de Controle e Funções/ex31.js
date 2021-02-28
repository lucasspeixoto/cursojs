const negativos = function(vetor){
    var qnt = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            qnt += 1
        }
    }
    return `${qnt} números negativos`
}

console.log(negativos([-3,-1,0,1]))