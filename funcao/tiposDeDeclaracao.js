console.log(soma(7, 2))
/* function declaration - Tem a vantagem de ser lida pelo interpretador
antes da execução, ou seja, podemos chamar a função em uma linha
antes de declaração
*/
function soma(x, y) {
    return x + y
}

/* function expression - Só podem ser chamadas após a declaração
*/
const sub = function (x, y) {
    return x - y
}
console.log(sub(7, 2))
/* named function expression - Só podem ser chamadas após a declaração
Pouco usado, vantagem na hora de debugar código, 
pois aparece o nome da função
*/
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(7, 2))
//