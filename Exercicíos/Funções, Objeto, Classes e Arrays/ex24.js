//Solução 1 - for loop
const contarCaractere = function(caractere, string){
    let string_array = string.split('')
    let cont = 0
    for (let i = 0; i < string_array.length; i++){
        if (string_array[i] == caractere){
            cont +=1
        }
    }
    return cont
}
console.log(contarCaractere("a", "A Liana é a melhor pessoa que eu poderia escolher para dividir o resto da minha vida. Amo demais <3"))


//Solução 2 - filter
const contarCaractere = function(caractere, string){
    let string_array = string.split('')
    return string_array.filter(char => char == caractere).length
}
console.log(contarCaractere("a", "A Liana é a melhor pessoa que eu poderia escolher para dividir o resto da minha vida. Amo demais <3"))