class Lancamento {
    //Nossa função construtora
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaluz = new Lancamento('Luz', -220)
const contaagua = new Lancamento('Luz', -70)

const contas = new CicloFinanceiro(2, 2021)
contas.addLancamentos(salario, contaluz, contaagua)

console.log(contas.sumario())

