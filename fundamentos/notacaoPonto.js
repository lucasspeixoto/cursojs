console.log(typeof console) // console em JS é um objeto

console.log(Math.ceil(6.1)) // ceil arredonta para cima 7
console.log(Math.floor(6.1)) // ceil arredonta para baixo 6

// Math tambem é um objeto em JS

const obj1 = {} //Objeto criado sem atributos

obj1.nome = 'Liana' // Notação ponto para criar dinâmicamente um objeto obj1['nome'] = 'Liana' NÂO USAR
obj1.personalidade = 'Brava'
obj1.beleza = 'Absurdo'
obj1.status = 'Amor da Minha vida'

function obj(nome) {
    this.nome = nome 
    /* this.nome que dizer que vamos receber o atributo nome por parâmetro
     e esse parâmetro ficará visivel para quem criar um objeto do tipo Obj
     Ou seja, um atributo publico */
    this.exec = function (){
        console.log("Exec....")
    }
}

const obj2 = new obj('Liana') //Instanciando um objeto obj 2 a partir de obj
const obj3 = new obj('Lucas')

console.log(obj2.nome)
console.log(obj3.nome)

obj2.exec()
obj3.exec()