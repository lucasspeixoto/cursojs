const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false },
    { nome: 'Cecília', nota: 10, bolsista: false },
    { nome: 'César', nota: 10, bolsista: false },
    { nome: 'Josefina', nota: 6.8, bolsista: true },
    { nome: 'Arlindo', nota: 3.8, bolsista: false }
]

//Desafio 1 - Com o reduce, retornar se todos os alunos são bolsistas

const bolsistas = alunos.map(aluno => aluno.bolsista)

console.log(bolsistas.reduce(function (acumulador, atual) {
    let check = acumulador && atual
    return check
}
)
)
// Com arrow function - console.log(bolsistas.reduce((acumulador, atual) => acumulador && atual))

//Desafio 2 - Com o reduce, retornar se algum aluno é bolsista 
console.log(bolsistas.reduce(function (acumulador, atual) {
    let check = acumulador || atual
    return check
}))

