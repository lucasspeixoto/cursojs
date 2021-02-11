const findType = function (x1, x2, x3) {
    //Check If Exists
    let s12 = x1 + x2
    let s13 = x1 + x3
    let s23 = x2 + x3

    if (s12 > x3 && s13 > x2 && s23 > x1) {
        //Exists - Check Type
        console.log('Existe')
        if (x1 == x2 && x2 == x3) {
            console.log('Equilátero')

        } else if (x1 == x2 || x2 == x3 || x1 == x3) {
            console.log('Isósceles')

        } else {
            console.log('Escaleno')
        }
    } else {
        console.log('Triângulo não Existe')
        return
    }
}

findType(5, 5, 5)