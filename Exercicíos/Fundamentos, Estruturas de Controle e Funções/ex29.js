const intervalo = function(vetor){
    var dentro = 0
    var fora = 0
    for (let i = 0; i < vetor.length; i++){
        console.log(vetor[i])
        if (vetor[i] >= 10 && vetor[i] <= 20){
            dentro += 1
        } else {
            fora += 1
        }
    }

    //return `${dentro} números dentro e ${fora} números fora`
}

console.log(intervalo([1,2,3,4,10,20, 21,43,45]))