/*O map é semelhante a um objeto, porém as chaves podem
ser objetos, funções, números, etc... */

const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('electron', {framework: true})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //não acessa
console.log(tecnologias.get('react').framework)

//Outra forma de criar um map atribuindo os elementos
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))