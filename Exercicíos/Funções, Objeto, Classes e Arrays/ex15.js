//Solução 1 - for loop
function receberSomenteOsParesDeIndicesPares(vetor) {
    let resultado = []
    for (let i = 0; i < vetor.length; i += 2) {
        const par = vetor[i] % 2 === 0

        if (par) {
            resultado.push(vetor[i])
        }
    }
    return resultado
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

//Solução 2 - filter

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

