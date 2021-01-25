const peso1 = 1.0            // Uma maneira de declarar números
const peso2 = Number('2.0')  // Outra maneira

console.log(peso1, peso2)  
console.log(Number.isInteger(peso1)) // Verificação se uma variável ou constante é um número inteiro
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)

console.log(`Média Arredondada: ${media.toFixed(2)}`) // Imprimindo com apenas duas casas decimais e formatando a string para a variáve ser inserida dentro
console.log(`Média Em String: ${media.toString()}`) // Converte a média para tipo string
console.log(`Média Em formato Binário: ${media.toString(2)}`) // Converte para valor binário
console.log(`Tipo: ${typeof media}`) 

console.log(typeof Number) 

