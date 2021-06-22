/*Dentro do método map existe um laço for, e a ideia
é fazer uma transformação no array, mapear o array para
outro array do mesmo tamanho com os dados transformados */

const nums = [1, 2, 3, 4, 5]

//map = for com propósito

let resultado = nums.map(function (e) {
    return e ** 2  //e^2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paradinheiro)

console.log(resultado)

let n1 = [1, 2, 3]
let l1 = ['a', 'c', 'e']
let l2 = ['b', 'd', 'f']
for (let i of n1.map(e => e.toString())){
    console.log([...i])
}
console.log([...l1])
resultado = l1.map((e, i) => `${e}${l2[i]}`).join("")
console.log(resultado)


