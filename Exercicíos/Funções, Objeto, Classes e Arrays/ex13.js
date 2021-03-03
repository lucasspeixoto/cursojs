// Solução 1 - for loop
function filtrarNumeros(vetor) {
    const resultado = []
    for (let item of vetor) {
        if (typeof item === 'number') {
            resultado.push(item)
        }
    }
    return resultado
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))


//Solução 2 - filter
function filtrarNumeros(vetor) {
    let resultado
    resultado = vetor.filter(function (p) {
        if (typeof p === 'number') {
            return true
        } else {
            return false
        }
    })

    return resultado
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))

//Solução 3 - filter + arroy function
function filtrarNumeros(vetor) {
    return vetor.filter(item => typeof item === 'number')
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))