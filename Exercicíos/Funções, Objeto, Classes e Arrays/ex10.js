const mais = function(n){
    let string = ''
    for (let i = 1; i <=n; i++){
        string += '+'
    }
    return string
}

console.log(mais(4))

//Ou
const mais = function(n){
    return Array(n).fill("+").join('')
}

console.log(mais(4))
