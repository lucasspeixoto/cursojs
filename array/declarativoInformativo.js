// Código Imperativo x Declarativo
const alunos = [
    { nome: 'João', nota: 7.3 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Pedro', nota: 9.8 },
    { nome: 'Ana', nota: 8.7 },
    { nome: 'Cecília', nota: 10 },
    { nome: 'César', nota: 10 },
    { nome: 'Josefina', nota: 6.8 },
    { nome: 'Arlindo', nota: 3.8 }
]

//Calculando a média das notas - Minha forma
const notas = alunos.map(a => a.nota)
let total = 0
for (let i = 0; i < notas.length; i++){
    total += notas[i]
}
const media = total/notas.length
console.log(`Média Minha ${media}`)

//Calculando a médias das notas - Forma Imperativa
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
const media1 = total1/alunos.length
console.log(`Média Imperativo ${media1}`)

//Calculando a média das notas - Forma Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
const media2 = total2/alunos.length
console.log(`Média Declarativo ${media2}`)


/* A abordagem declarativa é mais interessante para aproveitamento
de código e redução de código */