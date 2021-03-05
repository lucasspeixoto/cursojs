/* Função que serve para transformar um array em um array, em um elemento
número, etc... Temos um parâmetro que vai sendo acumulado de chamada
em chamada, ou seja, o resultado de uma função reduce é sempre passado
para a próxima iteração. O primeiro reduce recebe os dois primeiros
elementos (0 e 1), transforma e o resultado é passado para a próxima
e assim por diante. O elemento acumulador é o ValorInicial, que se não
for chamado, vai ser o elemento de indice 0, depois o de indice 1 e assim
por diante.
*/

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    //console.log(acumulador, atual)
    return acumulador + atual
}, 0) // 0 = acumulador passado
console.log(resultado)

