const funcaoDaSorte = function (n) {
    let ale = Math.floor(Math.random() * 10 + 1)

    if (n === ale){
        return `Parabéns! O número sorteado foi o ${ale}`
    } else {
        return `Que pena! O número sorteado foi o ${ale}`
    }

}
console.log(funcaoDaSorte(3))