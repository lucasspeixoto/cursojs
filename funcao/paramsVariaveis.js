// Uma função pode se declarada sem parÂmetros e através de arguments, podemos recuperar esses parâmetros

function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //Sem parâmetros não retorna nada
console.log(soma(1)) //1 parÂmetro passado, retorna ele
console.log(soma(1.1, 2.2, 3.3)) //recuperamos 1.1, 2.2 e 3.3 como argumentos através do arguments