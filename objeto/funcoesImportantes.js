const pessoa = {
    nome: 'Liana',
    idade: 27,
    peso: 57
}

console.log(Object.keys(pessoa)) //Retorna um array com as chaves
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //Sub arrays com os conjuntos chava-valor separados

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Usando um destructing
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Se vai ser enumerada como uma chave, se false, podemos acessar mas não aparecerá como chave
    writable: false, //Não permitirá mudar, semelhante ao freeze
    value: '01/01/2020'
}) //Para alterar propriedades de um objeto (Ficar ou não visível)

pessoa.dataNascimento = '01/02/2020'
console.log(pessoa.dataNascimento) //Não alterou
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //Pega os parâmetros de o1 e o2 e coloca em dest

console.log(obj)

Object.freeze(obj) //Não mais permite alterar parâmetros
obj.c = 123
console.log(obj)