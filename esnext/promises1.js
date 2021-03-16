/* Usamos promises em processamentos asyncronos
Onde temos um sucesso ou uma falha.
Nossa promise pode ou não ser atendida
*/

function falarDeposDe(segundos, frase){
    return new Promise((resolve, reject) => {  //resolve é chamada quando a promeça for atendida e reject quando não é atendida
        setTimeout(() =>{
            resolve(frase) //resovle aceita apenas 1 parâmetro
        }, segundos*1000)
    })
}

falarDeposDe(3, 'Liana Linda!')
    .then(frase => frase.concat('<3'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e)) //catch para tratar os erros

//O resultado de um 'then' é passado para o próximo
