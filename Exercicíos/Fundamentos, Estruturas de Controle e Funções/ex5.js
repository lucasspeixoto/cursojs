const money = function(n){
    n = n.toFixed(2).toString().replace('.', ',')
    return 'R$ '+ n
}

console.log(money(0.1 + 0.2))