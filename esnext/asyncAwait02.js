//Utilizando promisse
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve() //o then vai ser chamado aqui
        }, tempo)
    })
}

/* esperarPor(2000)
    .then(() => console.log('Executando Promise'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise'))
 */

//Ideia do async/await Ter um código asyncrono que parece syncrono

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500) //Com await, espera-se que a promise seja resolvida
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
//Formas para obter o valor retornado em uma promise:

//Assim
executarDeVerdade()

//Ou assim
//executar().then(console.log) //Essa função, por ser marcada como asyncrona, vai devolver uma promise
