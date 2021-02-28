

const checkString = function (str1 = '', str2 = '') {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let estacontido = true
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                estacontido = true
                break
            } else {
                estacontido = false
            }
        }
        //Caso false, precisamos ja retornar o valor, pois pode passar a ser true
        if(!estacontido) {
            return estacontido
        }
    }

    return estacontido

}

console.log(checkString('abc', 'cba')) //true

console.log(checkString('acb', 'abd')) //false



