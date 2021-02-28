function troca(vetor1, vetor2) {
    if (vetor1.length != vetor2.length) {
        return 'Vetores precisam ser do mesmo tamanho'
    } else {
        for (let i = 0; i < vetor1.length; i++){
            vetor2.push(vetor1.shift())
            vetor1.push(vetor2.shift())
            
            /* Com variável auxiliar
            var aux = vetor1[i]
            vetor1[i] = vetor2[i]
            vetor2[i] = aux
            */
        }
        
    }
    return `Vetor 1: ${vetor1}\nVetor 2: ${vetor2}`

}

console.log(troca([1, 2, 3], [4, 5, 6]))

/* Lógica
                             vetor 2   vetor 1                    
vetor2.push(vetor1.shift()) [4,5,6,1] [2,3]
vetor1.push(vetor2.shift()) [5,6,1]   [2,3,4]

vetor2.push(vetor1.shift()) [5,6,1,2]   [3,4]
vetor1.push(vetor2.shift()) [6,1,2]   [3,4,5]

vetor2.push(vetor1.shift()) [6,1,2,3]   [4,5]
vetor1.push(vetor2.shift()) [1,2,3]   [4,5,6]

*/
