// Cadeia de protótipos
Object.prototype.attr0 = '0' //Não faça isso em casa
const avo = { attr1: 'A' } //Aponta para Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: 'C1' }
const filho = { __proto__: pai, attr3: 'C' }

// filho tem o pai como protótipo, pai tem o avo como protótipo e avo tem o Object.prototype

console.log(filho.attr0, filho.attr1, filho.attr3)

/* Se um objeto filho tem um atributo igual ao atributo de um objeto
pai, o atributo do filho, caso tenha valor diferente, sobrescreve o 
do pai */

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 /* shadowing - Sombreamento do parâmetro
    existente no objeto pai (carro). */
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
        /*O super, vai trazer o status de um objeto 
        pai */
    }
}

//Estabelecendo a relação de protótipos
Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro)

/* Ao chamar a string do objeto, vai retornar só os parâmetros
e atributos definidos dentro desse objeto, os parâmetros e 
atributos dos objetos pai, não. */
console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())

volvo.acelerar(150)
console.log(volvo.status())

