//Desafio - Implementar um método igual o forEach (forEach2)

Array.prototype.forEach2 = function (callback) { //callback is the function
    //Scrolling through the indices
    for (let i = 0; i < this.length; i++){
        //Calling the functions
        callback(this[i], i, this)    
    }
}


const aprovados = ['Fulano', 'Ciclano', 'Beltrano', 'Ramiro', 'Pazuelo']
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})


