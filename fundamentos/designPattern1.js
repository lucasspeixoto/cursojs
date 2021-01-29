function criaObjecto() {
    let objeto = {}
    return objeto
}

let pessoaA = criaObjecto()

let pessoaB = criaObjecto()

pessoaA.nome = 'Liana'
pessoaB.nome = 'Lucas'

console.log(pessoaA.nome)
console.log(pessoaB.nome)