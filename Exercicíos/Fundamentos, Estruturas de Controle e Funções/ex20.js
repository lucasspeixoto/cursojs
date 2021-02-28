
/*
Notas R$ 1, R$ 5, R$ 10, R$ 50, R$ 100
    * 3 - 3 notas de 1
    * 5 - 1 nota de 5
    * 7 - 1 nota de 5 e 2 notas de 1
    * 10 - 1 nota de 10
    * 14 - 1 nota de 10 e 4 notas de 1
*/

const Cells = function (value) {
    let modulos = [
        value % 1,
        value % 5,
        value % 10,
        value % 50,
        value % 100,
    ]
    // < 5
    if (value < 5) {
        return `${value} nota(s) de R$ 1`
    }
    // > 5 e < 10

    else if (value > 5 && value < 10) {
        return `1 nota de R$ 5 e ${modulos[1]} nota(s) de R$ 1\n`

        // > 10 e < 20
    } else if (value > 10 && value < 20) {
        if (modulos[2] < 5) {
            return `1 nota de R$ 10 e ${modulos[1]} nota(s) de R$ 1\n`
        } else {
            return `1 nota de R$ 10, 1 nota de R$ 5 e ${modulos[1]} nota(s) de R$ 1\n`
        }
        //> 20 e < 50
    } else if (value > 20 && value < 50) {
        let n10_ = (value - (value % 10)) / 10
        if (modulos[2] < 5) {
            return `${n10_} nota(s) de R$ 10 e ${modulos[2]} nota(s) de R$ 1\n`
        } else {
            return `${n10_} nota(s) de R$ 10, 1 nota de R$ 5 e ${modulos[1]} nota(s) de R$ 1\n`
        }

    } else if (value > 50 && value < 100) {
        let n10_ = ((value - (value % 10)) - 50) / 10
        if (value < 60) {
            if (modulos[2] < 5) {
                return `1 nota de R$ 50 e ${modulos[1]} nota(s) de R$ 1\n`
            } else {
                return `1 nota de R$ 50, 1 nota de R$ 5 e ${modulos[1]} nota(s) de R$ 1\n`
            }
        } else {
            if (modulos[2] < 5) {
                return `1 nota de R$ 50, ${n10_} nota(s) de R$ 10 e ${modulos[1]} nota(s) de R$ 1\n`
            } else {
                return `1 nota de R$ 50, ${n10_} nota(s) de R$ 10, 1 nota de R$ 5 e ${modulos[1]} nota(s) de R$ 1\n`
            }
        }
    } else {
        return `1 nota de ${value}`
    }

}
