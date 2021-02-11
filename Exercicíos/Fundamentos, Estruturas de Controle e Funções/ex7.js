const equation2 = function (a, b, c) {
    let delta = (b ** 2) - (4 * a * c)
    console.log(delta)
    if (delta < 0){
        return 'Delta é Negativo'
    } else  {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return [x1, x2]
            }
    
}

console.log(equation2(1, 6, 7))


