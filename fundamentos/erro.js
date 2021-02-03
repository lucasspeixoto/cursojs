function tratarErroELancar(erro) {
    //throw new Error('...') //throw é para lançar o erro (mensagem ou valores)
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final') // é um bloco que sempre vai ser executado, ocorrendo erro ou não
    }

}
const obj = { nome: 'Liana' }

imprimirNomeGritado(obj) // O objeto obj não tem o parâmetro name, tem nome, logo termos erro

