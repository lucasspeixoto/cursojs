/* Sempre que puder, opte pela composição ao invez da herança
    Em JavaScrit a herança é baseada em protótipo.
    Um objeto pai (protótipo) tem seus atributos e comportamentos
    assim como o objeto filho; ao tentar acessar um atributo do 
    objeto filho, e não existir, a busca é direcionada para o ob-
    jeto pai, não achou, vai para o objeto avô, e assim por diante

    [[prototype]] != prototype
    Conceito de protótipo != Propriedade prototype (Que existem dentro das funções)

*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) /* .__proto__ tenta acessar um objeto,
se não encontrar tentar acessar no seu protótipo (objeto pai) */
console.log(ferrari.__proto__ === Object.prototype) // .prototype está presenta apenas dentro de funções
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
