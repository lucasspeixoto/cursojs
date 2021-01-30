function rand({ min = 0, max = 1000 }) {            // Aqui estamos passando o operador destructing
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))          // Aqui estamos passando um objeto
console.log(rand({min:955}))    // Passando com parâmetro
console.log(rand({}))           // Passando um objeto vazio - Vai pegar o min e max da função (0 e 1000)
//console.log(rand())             // Aqui teremos erro pois vai tentar desestruturar algo nulo ou undefined