Array.prototype.reduce2 = function(callback, ValorInicial) {
    const indiceInicial = ValorInicial ? 0 : 1
    let acumulador = ValorInicial || this[0] //ValorInicial o 1º elemento
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // 0 = acumulador passado
console.log(resultado)