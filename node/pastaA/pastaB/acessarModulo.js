const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// ../ vai para a pastaB ../../ vai para pastaB e depois para a pasta node

// É possível tambem acessar com o caminho absoluto.
const moduloA = require('C:/Users/lspeixoto/Documents/apps/cursojs/node/moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola) //Encontrou, pois ola existe no arquivo index.js, se fosse index2.js, não encontraria

const c = require('./pastaC/index')
console.log(c.ola2)

/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080) */