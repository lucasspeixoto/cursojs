/* Função em JS é First-Class Object (Citizens)
   Higher-order function

Função em JS é tratada com um dado, onde podemos:
    Retornar uma função dentro de uma função
    Armazenar em uma variável
    Armazenar em um array


*/

//Criar função de forma literal
function fun1() { }

//Armazenar função em uma constante
const fun2 = function () { }

//Armazenar função em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](10, 5))

//Armazenar função em atributos de objetos
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parâmetro de uma função - Abre muitas possibilidades 
function run(fun) {
    fun()
}
run(function () { console.log('Executando....') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(1,2)(4) //soma(1,2) é uma função, que recebe 4 como parâmetro
//Outra forma
const fun = soma(1,2)
fun(4)
