/* A função Carro é uma função construtora, que é o molde
dos objetos que podemos criar a partir dessa função
*/

function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Usamos o this em this.acelerar e this.getVelocidadeAtual para tornar publico

const uno = new Carro //Ou new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())