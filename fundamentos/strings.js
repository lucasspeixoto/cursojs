const escola = "Cod3r"

console.log(`Posição 4: ${escola.charAt(4)}`) // Retorna o caracter na posição 4
console.log(`Posição Inexistente: ${escola.charAt(6)}`) // Como não existe a posição 6, retorna vazio
console.log(escola.charCodeAt(3)) // Retorna o Valor da variável na posição 3 dentro da tabela ASCII
console.log(escola.indexOf('3')) // Retorna o indice do caracter '3' dentro da string escola
console.log(escola.substring(1)) // Fatia a string, da posição 1 para frente
console.log(escola.substring(0, 3)) // Imprime do indice 0 ao 3, sem incluir o 3
console.log('Escola: '.concat(escola).concat("!")) // Concatenar strings
console.log(escola.replace(3, 'e')) // Substitui o digíto 3 pela letra e
console.log(escola.replace(/\d/, 'e')) // Substitui todos os dígitos(/\d/) pela letra e
console.log(escola.replace(/\w/, 'e')) // Substitui o primeiro digito(/\w/) pela letra e
console.log(escola.replace(/\w/g, 'e')) // Substitui todos os dígitos (/\w/g) pela letra e (g = global)
console.log('Ana,Maria,Pedro'.split(',')) // Splita por ',' a string e preenche dentro de um array





// charAt() - Loop Através de uma String
for (let index = 0; index < escola.length; index++) {
    console.log(escola.charAt(index))
}

// Loop Através de um array
var a = ["a", "b", "c"];
for (index = 0; index < a.length; index++) {
    console.log(a[index])
}

// Popular um array
array = []
for (index = 0; index < 20; index++) {
    array[index] = index*2
}
