const buscarPalavrasSemelhantes = function(string, vetor){
    return vetor.filter(char => char.includes(string))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))