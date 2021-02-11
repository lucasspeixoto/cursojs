function fatorial(number){
    let fat = 1
    for (let i = 1; i <= number; i++){
        fat = fat*i
    }
    return fat
}
console.log(fatorial(7))