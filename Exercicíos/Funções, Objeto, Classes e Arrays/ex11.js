const arrey = function(vetor){
    let ind = vetor.length - 1
    return [vetor[0], vetor[ind]]

}

console.log(arrey([-100, "aplicativo", 16]))

//OU
const arrey = function(vetor){
    return [vetor.shift(), vetor.pop()]
}

console.log(arrey([-100, "aplicativo", 16]))



