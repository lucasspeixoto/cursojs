//Herança com classes JavaScript

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Criando uma classe que herda outra
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Analista de Sistemas') {
        super(sobrenome) //Chamada do construtor da classe Avo
        this.profissao = profissao

    }
}

class Filho extends Pai {
    constructor() {
        super('Peixoto')
    }
}

const filho = new Filho
console.log(filho)
