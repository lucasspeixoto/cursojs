const pai = { nome: 'Dedé', corCabelo: 'castanho' }

const lucas = Object.create(pai) //Cria o objeto lucas tendo pai como parâmetro
lucas.nome = 'Lucas'
console.log(lucas)

const vinicius = Object.create(pai, {
    nome: { value: 'Vinicius', writable: false, enumerable: true }
})

console.log(vinicius.nome)
vinicius.nome = 'Xarope'
console.log(`${vinicius.nome} tem cabelo ${vinicius.corCabelo}`)

console.log(Object.keys(lucas))     //Não lista os parâmetros herdados
console.log(Object.keys(vinicius))

//Podemos listar os parÂmetros herdados com um for in
for (let key in lucas) {
    vinicius.hasOwnProperty(key) ?
        console.log(`Própria: ${key}`) : console.log(`Por herança: ${key}`)
}

