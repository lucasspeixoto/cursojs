// JUROS SIMPLES

//Função Declarada
function JurosSimples(inicial, taxa, tempo) {
    let montante = inicial + (inicial * taxa * tempo)
    return montante
}
console.log(JurosSimples(400, 0.04, 5))

//Com Função Arrow
const JurosSimples = (inicial, taxa, tempo) => { return inicial + (inicial * taxa * tempo) }
console.log(JurosSimples(400, 0.04, 5))


// JUROS COMPOSTOS

//Função Declarada
function JurosCompostos(inicial, taxa, tempo) {
    let montante = inicial * ((1 + taxa) ** tempo)
    return montante
}
console.log(JurosCompostos(500, 0.125, 4))

//Com Função Arrow
const JurosCompostos = (inicial, taxa, tempo) => { return inicial * ((1 + taxa) ** tempo) }
console.log(JurosCompostos(500, 0.125, 4))