// Interceptando uma template string em uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Liana'
const situacao = 'Aprovada'

console.log(tag `${aluno} está ${situacao}`)