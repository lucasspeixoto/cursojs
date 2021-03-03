//Solução 1 - for loop
function objetoParaArray(obj){
    let resultado = []
    for (let param of Object.keys(obj)){
        resultado.push([param, obj[param]])
    }
    return resultado
}
const pessoa = {
    nome: 'Lucas',
    idade: 27,
    namorada: 'Liana',
    hobbie: 'Programar'
}
console.log(objetoParaArray(pessoa))

//Solução 2 - map
function objetoParaArray(obj){
    const keys = Object.keys(obj)
    return keys.map(key => [key, obj[key]])
}
const pessoa = {
    nome: 'Lucas',
    idade: 27,
    namorada: 'Liana',
    hobbie: 'Programar'
}
console.log(objetoParaArray(pessoa))

console.log([1,2,3,4,5].map(chave => chave))