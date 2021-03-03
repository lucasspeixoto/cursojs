const removerPropriedade = function (obj, param) {
    let keys = Object.keys(obj)
    var retorno = {}
    for (let i in keys) {
        if (keys[i] != param) {
            retorno[keys[i]] = obj[keys[i]]
        }
    }
    return retorno
}

const pessoa = {
    nome: 'Lucas',
    idade: 27,
    namorada: 'Liana',
    hobbie: 'Programar'
}

console.log(removerPropriedade(pessoa, 'nome'))
console.log(pessoa)

//Ou
const removerPropriedade = function (obj, param) {
    const copy = Object.assign({}, obj) // ou const copia = {...objeto}
    delete copy[param]
    return copy
}


const pessoa = {
    nome: 'Lucas',
    idade: 27,
    namorada: 'Liana',
    hobbie: 'Programar'
}
const copy = Object.assign({}, pessoa)
console.log(pessoa)
console.log(copy)