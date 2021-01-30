function rand([min = 0, max = 1000]) {    //Quando destruturamos um array, não recebemos um array e sim os atributos, no caso 2
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([999]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand())    // Aqui teremos erro pois vai tentar desestruturar algo nulo ou undefined


/* Resumo
        O Operador Destructing é uma forma de obter elementos de objetos e arrays
    para criar variáveis de uma vez só, uma forma simples de criar ou extrair de 
    elementos aquilo que precisamos. Sabemos que vamos receber um objeto, por ex-
    emplo, a partir de uma função, ja podemos, em vez de trabalhar com o objeto 
    dentro da função, tirar os atributos que queremos e operamos de uma forma bem
    mais direta, sem precisar acessar o objeto.
 */