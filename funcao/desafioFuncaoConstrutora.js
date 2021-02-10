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

// Função Construtora
function PessoaConstrutora(nome){
    this.nome = nome 
    /*this para tornar o atributo acessível fora
    da função */

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoaB = new PessoaConstrutora('Liana')
pessoaB.falar()
console.log(pessoaB.nome)

/* Na classe, precisamos do this para retornar o nome,
e dependendo do contexto, o this pode variar conforme
quem chamou a função. Esse problema tambem ocorre com a 
função Construtora
*/


