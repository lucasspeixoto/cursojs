const multVetor = function(vetor, num){
    let vetornovo = []
    for (let i =0; i<vetor.length; i++){
        vetornovo.push(vetor[i]*num)
    }
    return vetornovo
}

console.log(multVetor([1,2,3,4], 2))

const multVetorSE = function(vetor, num){
    let vetornovo = []
    for (let i =0; i<vetor.length; i++){
        if (vetor[i] > 5){
            vetornovo.push(vetor[i]*num)
        } else {
            vetornovo.push(vetor[i])
        }
    }
    return vetornovo
}

console.log(multVetor([1,2,3,4], 2))

console.log(multVetorSE([1,2,3,4,5,6,7], 2))


//Outra forma
function multiplicaVetor (vetor, mult){
    let vetornovo = []
    vetor.forEach(element => { 
        vetornovo.push(element * mult)
        
    });
    return vetornovo
}
console.log(multiplicaVetor([1,2,3,4,5,6,7], 2))

