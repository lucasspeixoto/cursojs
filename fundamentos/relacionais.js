console.log('01)', '1' == 1) // '1' é igual 1 - true, interpreta o valor numérico
console.log('02)', '1' === 1) // '1' é igual 1 - false, pois '1' tem o mesmo valor numérico que 1, mas não é estritamente igual (string x number)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)  // 0 - 01/01/1970
const d2 = new Date(0)

console.log('09)', d1 == d2)  // Vai comparar endereços de memória, falso, pois cada constante tem o seu
console.log('10)', d1 === d2) // Também vai comparar endereços de memória, falso, pois cada constante tem o seu

/* Trabalhando com variáveis de endereço de memória (d1 e d2)
não faz diferença, sempre vai dar false tanto para '==' quanto '===' */

console.log('11)', d1.getTime() == d2.getTime())  
console.log('12)', d1.getTime() === d2.getTime())   // Ambos são estritamente iguais/
console.log('13)', undefined == null)  // true, são iguais
console.log('14)', undefined === null)  // false, não são estritamente iguais, tipos diferentes



