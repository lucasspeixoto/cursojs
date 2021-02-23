const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
/* A constante pilotos sempre vai apontar para o array definido, mas 
o array pode ser alterado (Incluir/Excluir/Modificar itens) */

pilotos.pop() //Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Inclui o elemento passado
console.log(pilotos)

pilotos.shift() //Remove o 1º Elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento na 1ª Posição do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona na posição 2, o 'Bottas' e o 'Massa', remove 0 
console.log(pilotos)

pilotos.splice(3, 1) //O Elemento na 3ª posição é removido, remove 1
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array a partir do indice 2 de pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Cria um novo array, pegando do elemento de indice 1 até indice 3 (4 não entra)
console.log(algunsPilotos2)




