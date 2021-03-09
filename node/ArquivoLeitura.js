const fs = require('fs') //fs = file system
const caminho = __dirname + '/arquivo.json'
/* __dirname, é uma variável que está presente em todos
os módulos, que representa o diretório atual */

//sincrono... Tem que ler completamente o arquivo, para só ai liberar o EventLoop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono... Chama uma callback quando o arquivo for carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) //JSON
    console.log(`${config.db.user}:${config.db.password}`)
})

//Outra forma de ler JSON
const config = require('./arquivo.json')
console.log(config.db)

//Ler conteúdo de um diretório
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

