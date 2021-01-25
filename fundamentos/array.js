const valores = [1.1,2.2,3.3,4.4,5.5]

console.log(valores[0], valores[3])

console.log(valores[5]) // Retorne undefined para posições inexistentes

valores[10] = 9.9 //Atribui o valor 10 para a posição 10, como temos apenas 4 posições, 5 ficarão vazias

console.log(valores[10])

console.log(valores.length) // Tamanho do array

valores.push(6.6) // Para adicionar um valor ao array
valores.push({id:3}, false, null, NaN, 'teste')

console.log(valores)

console.log(valores.pop()) // Retira o último valor do array e retorna o valor retirado

delete valores[0]  // Deleta o valor da posição 0
console.log(valores)

console.log(typeof valores) // Em JS arrays são do tipo object
