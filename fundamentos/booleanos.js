let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1                 // 1 Para VERDADEIRO
console.log(!isAtivo)      // ! Representa o Inverso, como isAtivo é 1, ou seja, true, vai retornar false
console.log(!!isAtivo)      // !! Representa o Inverso do Inverso, como isAtivo é 1, ou seja, true, vai retornar true
console.log(!true) // Inverso de true é false


// Todos os números inteiros são verdadeiros com exceção do 0
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])  // array
console.log(!!{})  // object
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Pega o valor da atribuição, ou seja, true, e retorna esse valor, no caso true. Não pega se a atribução deu ou não certo
console.log(!!(isAtivo = 23))
console.log('\n')

// Todos os falsos
console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia, para testes se um nome, por exemplo, está vazio
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('\n')

// Resumo
console.log('para finalizar...')
console.log(('' || null || 0 || 'teste' || 13)) //  || - (Expressão OU). Retorna o primeiro valor com atribuição verdadeiro, que é a string 'teste'

let nome = ''
console.log(nome || 'Desconhecido') // "Se nome não estiver preenchido, imprime desconhecido. nome ||(OU) 'Desconhecido', o primeiro true

