const impares = function(inicio, fim){
    if (fim < inicio){
        return 'Inicios dever ser menor'
    } else {
        for (let i = inicio; i <= fim; i++){
            if (i % 2 != 0){
                console.log(i)
            }
        }
    }
}

console.log(impares(0, 100))