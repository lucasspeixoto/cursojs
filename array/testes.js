let livros = ['Angular 11', 'Python', 'React Native']
let filtro = 'ang'

const filter = filtro.toLocaleString().toLocaleLowerCase();

let result = livros.filter(
    (v) => v.toLocaleLowerCase().includes(filter)
  )

console.log(result)

