// Flatmap = map associado com concat
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 7.1
    }, {
        nome: 'Cecília',
        nota: 10
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Cesar',
        nota: 9.9
    }, {
        nome: 'Verônica',
        nota: 6.8
    }]
}]

//Extrair todos as notas
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //Não obtem todas as notas em um único array


//Usando flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
