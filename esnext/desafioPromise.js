/* Montar a leitura do arquivo dados.txt
com promise, onde será passado o caminho 
e o resultado desse promise vai ser o conteudo do arquivo */

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}


let p = exibirConteudo(caminho)
p
    .then(content => content)
    .then(console.log)