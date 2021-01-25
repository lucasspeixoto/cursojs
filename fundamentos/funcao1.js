// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,4) // Retorna a soma
imprimirSoma(2) // Se passar apenas 1 parâmetro, o segunda é tido como undefined, e é retornado NaN
imprimirSoma(2,4,3,7,8,9) // Atribui os dois primeiros valores para a e b respectivamente e ignora o restante
imprimirSoma() // Retorna NaN

// Função com retorno
function soma(a, b = 1){
    soma_ = a + b
    return soma_
}

console.log(soma(3)) // Agora passando apenas 1 valor, retorna soma pois b foi definida como '0' caso não passe valor
