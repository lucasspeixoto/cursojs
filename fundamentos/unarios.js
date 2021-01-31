let num1 = 1
let num2 = 2

num1++  // Pós fixado
console.log(num1)

--num1  //Pré fixado
console.log(num1)

/* Assim como multiplicação tem prioridade em relação a soma,
operações pré fixadas tem prioridade em relação as pós fixadas. */

console.log(++num1 === num2--) // true ou false ?
/* 
Lógica é incrementado 1 em num1, que vale 2, que é comparado com num2
que vale 2, e só depois, é 'decrementado' de num2. 
Deixe o código mais simples possível.
*/