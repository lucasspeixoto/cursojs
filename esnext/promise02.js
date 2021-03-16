//Utilizando callbacks aninhadas (callback hell)
setTimeout(function () {
    console.log('Executando callback...')

    setTimeout(function () {
        console.log('Executando callback...')

        setTimeout(function () {
            console.log('Executando callback...')
        }, 2000)

    }, 2000)

}, 2000)

//Utilizando promisse
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve() //o then vai ser chamado aqui
        }, tempo)
    })
}

let p = esperarPor()
p
    .then(() => esperarPor())
    .then(esperarPor)

