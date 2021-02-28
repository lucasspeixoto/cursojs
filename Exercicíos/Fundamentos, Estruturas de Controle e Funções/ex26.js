const par = function(){
    let pares = []
    for (let i = 1; i <= 100; i++){
        if  (i % 2 == 0){
            pares.push(i)
        }
    }
    return pares
}

console.log(par())