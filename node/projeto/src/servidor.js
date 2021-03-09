const porta = 3003 /*Porta é um processo dentro do computador
A porta é necessário sempre que executamos processos que precisam
se comunicar com outro computador. A porta é a forma de selecionar
qual processo vai atender determinada requisição. É a associação de 
um número que comunica um processo pela rede
*/
const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({nome:'Notebook', preco: 4989, marca: 'Dell'}) //converte para JSON (metodo sendo faz isso)
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}`)
})