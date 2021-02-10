
// Classe construtora de Pessoa
class PessoaClass {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoaA = new PessoaClass('Liana')
pessoaA.falar()


// Função construtora de Pessoa
const PessoaFunction = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const pessoaB = PessoaFunction('Liana')
pessoaB.falar()

/* Na classe, precisamos do this para retornar o nome,
e dependendo do contexto, o this pode variar conforme
quem chamou a função. Esse problema não temos com a 
função Factory
*/
