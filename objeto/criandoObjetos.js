// Usando a notação literal 
const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object
console.log(typeof Object, typeof new Object)
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    // preco e desc estão encapsulado
    this.nome = nome //Visível para fora
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

/* Só conseguimos alterar o nome dos objetos criados
a partir de 'Produto', pois preco e desc só estão
visivéis dentro do objeto */

const p1 = new Produto('Caneta', 2.50, 0.15)
const p2 = new Produto('Notebook', 4999, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Lucas', 5100, 4)
const f2 = criarFuncionario('Liana', 4000, 2)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Cecília'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)