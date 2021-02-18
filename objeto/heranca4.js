function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto
/* obj1 e obj2 vão apontar para object.prototype ou para MeuObjeto.prototype ? */

console.log(obj1.__proto__ === obj2.__proto__)
/* Todos os objetos criados a partir da mesma função construtora
apontam para o mesmo protótipo ? SIM*/

console.log(obj1.__proto__ === MeuObjeto.prototype)
/* Quando criamos um objeto a partir de uma função construtora
usando 'new', o protótipo que criamos aponta para a o prototype da
função construtora */

MeuObjeto.prototype.nome = 'Liana'
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Lucas'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype /* Mudando a referência do obj3
Aqui, não criamos obj3 a partir de uma função construtora, logo a
referência não é 'MeuObjeto.prototype' */
obj3.nome = 'Obj3'
obj3.falar()

//Resumo 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
/* A função tambem tem uma referência para __protp__, que aponta para
Function.prototype */
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)