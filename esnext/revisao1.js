/*
var: escopo de função ou global
let: escopo de bloco, alem de escopo de função e global
*/

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a) //Acessa
//console.log(b) //Não acessa, definida apenas no bloco

//Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

//Destructing

//---String
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

//---Array
const [x, , z] = [1, 2, 3]
console.log(x, z)

//-- Object
const { idade: i, nome: n } = { nome: 'Liana', idade: 27 }
console.log(`Idade: ${i}\nNome: ${n}`)