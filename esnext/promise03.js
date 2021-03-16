function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max] //Desestruturando
        //destructing = array 
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

let p = gerarNumerosEntre(10, 30)
p
    .then(num => num*10)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)