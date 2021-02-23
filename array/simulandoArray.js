const quaseArray = { 0: 'Liana', 1: 'Lucas', 2: 'Cecília', 3: 'César' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])
const meuArray = ['Liana', 'Lucas', 'Cecília', 'César']
console.log(meuArray)
console.log(quaseArray.toString())