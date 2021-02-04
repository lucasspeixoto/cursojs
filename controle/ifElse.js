function tratarErroELancar(erro) {

    throw console.log('Digite um númer')
}



const imprimirResultado = function (nota) {
    //  Is Not a Number
    if (!isNaN(nota) == false) {
        console.log('Digitar Nota númerica')
        return

    }
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado('Epa') //por JS ser fracamente tipada, como 'Epa' não é > 7, cai no bloco else

var valor = 1.5;
var teste = "a";

console.log(!isNaN(valor)); /* retorna false negando fica true, 1.5 é tipo numérico */
console.log(!isNaN(teste)); /* retorna true negando fica falso, "a" não é um número */

console.log(!isNaN(10)) // ! (Not) + NaN (Not) = true