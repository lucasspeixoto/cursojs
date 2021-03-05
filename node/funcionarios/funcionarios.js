

//Desafio - Qual a mulher chinesa com maior salário ?

//Solução 1
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    //Array apenas com as Chinesas
    const chinesaMaiorSalario = funcionarios.filter(funcs => funcs.pais === 'China')
        .filter(funcs => funcs.genero === 'F')
        .reduce((accum, atual) => {
            return accum.salario > atual.salario ? accum : atual
        })
    console.log(chinesaMaiorSalario)
})

//Solução 2
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const chinesas = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const MaiorSalario = (accum, atual) => { return accum.salario > atual.salario ? accum : atual }

const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    const chinesaMaiorSalario = funcionarios.filter(chinesas)
        .filter(mulheres)
        .reduce(MaiorSalario)
    console.log(chinesaMaiorSalario)
})



