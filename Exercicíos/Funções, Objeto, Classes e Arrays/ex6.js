const inverso = function(valor){
    if (typeof valor == 'boolean'){
        if (valor == true){
            return false
        } else {
            return true
        }
    } else if (typeof valor == 'number'){
        return valor*(-1)
    } else {
        return "booleano ou número esperados, mas o parâmetro é do tipo string"
    }
}

console.log(inverso(true)) 
console.log(inverso(false)) 
console.log(inverso("6"))
console.log(inverso(-1000))
console.log(inverso("programação"))
