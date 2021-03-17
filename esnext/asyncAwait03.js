
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max] //Desestruturando
        //destructing = array 
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) {
            throw 'Deu Ruim' /*Agora os erros caem aqui, não mais no reject de gerarNumerosEntre
            Essa é uma forma de rejeitar uma promise dentro de uma função asyncrona
            */
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

/*
gerarNumerosEntre(1, 5, [1,2,4])
    .then(console.log)
    .catch(console.log)

*/