/* Promise é uma melhor alternativa de 
compor várias chamadas sem alinhamentos causados
por callback's */

/* Promise: Promessa, algo a ser resolvido no futuro
*/

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Liana', 'Cecilia', 'Lucas', 'Cesar']) /*Na promessa, só pode ser passado um 
    único valor (o que é chamado na hpra de cumprir a promessa) */
}) //new Promise : cria um objeto

/* A função passada na promise, vai ser a função
a ser executada quando cumprir a promessa */
p
    .then(valor => valor[0]) //Pega o primeiro elemento do array
    .then(primeiro => primeiro[0]) //primeiro agora é o retorno do 1º then ('Liana')
    .then(letra => letra.toLowerCase())
    .then(letraminuscula => console.log(letraminuscula))

/* Esse encadeamento de "then's" é mais vantajoso que
alinhamento de callback's, pois a execução, temos que
passar a callback

Por padrão, a função cumprirPromessa, é chamada de resolve
let p = new Promise(function (resolve) {
    resolve(['Liana', 'Cecilia', 'Lucas', 'Cesar'])
})

*/