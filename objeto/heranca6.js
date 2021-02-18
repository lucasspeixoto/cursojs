function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 1)
const aula2 = new Aula('Até Breve', 254)

console.log(aula1, aula2)

/* Quando temos uma função construtora (Aula) e usamos o 
operador 'new', o protótipo desse objeto aponta para Aula.prototype */

// Simulando o new - O que é feito internamente
function novo(f, ...params) { // ... = SpreadRest
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 1)
const aula4 = novo(Aula, 'Até Breve', 254)

console.log(aula3, aula4)