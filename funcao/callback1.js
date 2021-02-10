/* A ideia do callback é passar uma função para outra função, e quando determinado evento acontercer
essa função ser chamada */

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // do array fabricantes, para cada (forEach) item, execute a função

fabricantes.forEach(function (a) {
    console.log(a)
})

fabricantes.forEach(fabricante => console.log(fabricante)) //Mesma ideia usando arrow function

//Fizemos um loop no array, cada loop foi um evento, que ao ocorrer, chamou uma função