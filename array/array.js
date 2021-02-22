// Arrays em JS, são heterogenos, suportando tipos diferentes de dados
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Lucas', 'Liana', 'Fulano', 'Ciclano') //Forma não recomendada
console.log(aprovados)

aprovados = ['Lucas', 'Liana', 'Fulano', 'Ciclano']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4]) //undefined

aprovados[4] = 'Beltrano'
console.log(aprovados)

aprovados.push('Zézinho')
console.log(aprovados.length)

aprovados[10] = 'Luluzinha' //Vai criar o elemento de posição 9, e todos entre 6 e 8, serão undefined
console.log(aprovados.length)

console.log(aprovados)

aprovados.sort() //Ordenação em ordem alfabética ou sequencial - Altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados) // Coloca undefined na posição deletada

aprovados = ['Lucas', 'Liana', 'Fulano', 'Ciclano']
aprovados.splice(1, 2) //Serve para adicionar, remover e adicionar e remover ao mesmo tempo
/* (1, 1) A partir do element0 1, exclui 1
(1, 2) A partir do elemento 1, exclui 2
*/
console.log(aprovados)

aprovados = ['Lucas', 'Liana', 'Fulano', 'Ciclano']
aprovados.splice(1, 2, 'Luluzinha', 'Zézinho')
/* (1, 2, 'Luluzinha', 'Zézinho') A partir do elemento 1, 
exclui 2 e adiciona 'Luluzinha' e 'Zézinho' */
console.log(aprovados)

aprovados = ['Lucas', 'Liana', 'Fulano', 'Ciclano']
aprovados.splice(1, 0, 'Luluzinha', 'Zézinho')
/* (1, 2, 'Luluzinha', 'Zézinho') A partir do elemento 1, 
exclui 0 (nenhuma exclusão) e adiciona 'Luluzinha' e 'Zézinho',
a partir da posição 1 */
console.log(aprovados)


