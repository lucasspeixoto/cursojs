const aprovados = ['Fulano', 'Ciclano', 'Beltrano', 'Ramiro', 'Pazuelo']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

/* O foreach vai percorrer o array, um laço, onde em cada
iteração, conseguimos acessar o item do array.
O primeiro parâmetro é o nome, o segundo o índice e o terceiro
o próprio array.
*/

//Passando apenas o nome com uma arrow function
aprovados.forEach(nome => console.log(nome))

//Passando uma função pré-definida
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)