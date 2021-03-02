const repetir = function(a, b){
    let resultado = []
    for (let i = 1; i<=b; i++){
        resultado.push(a)
    }
    return resultado
}

console.log(repetir('Código', 2))
console.log(repetir(7, 3))