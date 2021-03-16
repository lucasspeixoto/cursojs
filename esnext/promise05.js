function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') //Simulando erro
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) //Esse é o primeiro tratamento de erro, ou seja, erros no nosso try, vão cair aqui,
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral.: ${err}`))
    .then(() => console.log('Fim')) //then após o cathc, não recebe valor. Cuidado