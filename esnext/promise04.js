function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max] //Desestruturando
        //destructing = array 
    }
    return new Promise(resolve => {
        setTimeout(function () {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

//Gerar 10 números aleatórios

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros)) //O then só é chamado depois que todas as promesas forem cumpriadas
    .then(() =>{ //Esse tem é para verificar o tempo de execução
        console.timeEnd('promise')      
    })

/* Essa estratégia é util quando queremos fazer várias chamadas e executar uma 
ação apenas quanto todas forem finalizadas */
