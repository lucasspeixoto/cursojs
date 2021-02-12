const a = 1
const b = 2
const c = 3

//Antes
const obj1 = { a: a, b: b, c: c }
//Hoje
const obj2 = { a, b, c } //Ja assume para os atributos a,b e c os valores a, b e c
console.log(obj1)
console.log(obj1)

//Criar atributos através de valores de variáveis
const nomeAttr = 'nota'
const valorAttr = 7.2
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Definição de funções dentro de objetos

//Antes
const obj5 = {
    funcao1: function(){
        //.....
    }
}
//Hoje
const obj6 = {
    funcao2(){
        //.....
    }
}
console.log(obj5)
console.log(obj6)