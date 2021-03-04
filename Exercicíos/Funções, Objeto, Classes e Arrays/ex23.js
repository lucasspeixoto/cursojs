const contarPalavras = function(string){
    let qnt = string.split(" ")
    return qnt.length
}

console.log(contarPalavras("Sou uma frase")) // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5