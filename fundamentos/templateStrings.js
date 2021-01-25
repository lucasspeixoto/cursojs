
// Sem usar Template Strings
const nome = 'Liana'
const concatenacao = 'Eu amo a ' + nome + '!'
console.log(concatenacao)

// Usando Template Strings
const nome_ = 'Liana'
const concatenacao_ = `Eu amo a
${nome_}!`
console.log(concatenacao_)

console.log(`1 + 2 = ${1+2}`)

const up = texto => texto.toUpperCase() // Definição da Função 'up'

console.log(`Ei.... ${up('cuidado')}`)  // usando a Função
console.log(`Ei.... ${'cuidado'.toUpperCase()}`) // Usando o método