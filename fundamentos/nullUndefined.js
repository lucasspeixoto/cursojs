let valor // não inicializada

console.log(valor)  // undefined Declarada porem sem valor
//console.log(valor2) // Não declarada

valor = null  // Variáveis null não tem valor e não está apontando para nenhum endereço de memória, porem está definida

console.log(valor)
// console.log(valor.toString()) // Erro de tipo, não podemos usar metodos de variáveis null

const produto = {}
console.log(produto.preco) // Retorna undefined, pois produto foi definida, mas o preco não


//console.log(produto.preco.a) // Retorna Erro, pois não podemos acessar 'a' de algo indefinido, que é o preco

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // EVITAR- Se quiser retirar um atribudo de um objeto, use o delete produto.preco
console.log(!!produto.preco) // Convertendo o valor para boolean
console.log(produto)

produto.preco = null // Sem preço. Não é preco zero, é preco não definido.
console.log(produto)
console.log(!!produto.preco) // Tambem retorna false, pois o preco não está setado.


/*
Variávels null, sem valor, apontando para nenhum endereço,
não podem ser acessadas
*/
