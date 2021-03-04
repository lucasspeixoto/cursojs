//Solução 1 = filter
const removerVogais = function(string){
    
    let resultado = string.split('').filter(function(p){
        if (p == 'a' || p == 'e' || p == 'i' || p == 'o' || p == 'u'){
            return false
        } else {
            return true
        }
    })
    return resultado.join('')
}

console.log(removerVogais("Fundamentos")) // retornará "Fndmnts")

//Solução 2 - replace
function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
    }
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts")

//Solução 3 - foreach
function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
    }
    console.log(removerVogais("Fundamentos")) // retornará "Fndmnts")