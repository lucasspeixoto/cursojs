const moduloA = require('./moduloA')  //O '.' é referência ao caminho relativo (mesma pasta)

const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomdia)
console.log(moduloB.boanoite())
console.log(moduloB)