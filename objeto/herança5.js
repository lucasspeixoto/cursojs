console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    /* Acessamos os parâmetros dentro do protótipo com
    o 'this' */
}

console.log('Escola Cod3r'.reverse())
//O método reverse não tem no protótipo, nos adicionamos com a função


Array.prototype.first = function () {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

//Podemos substituir metodos que ja existem
String.prototype.toString = function () {
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse()) /* Não vai mais receber 'Escola Cod3r'
como string, pois alteramos o método 'toString', ou seja, nossa string agora é
'Lascou Tudo' */
