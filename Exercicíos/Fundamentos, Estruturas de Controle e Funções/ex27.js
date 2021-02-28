/*
Exemplo

Criança A
    * Altura: 145 cm
    * Taxa: 8 cm/ano

    Criança B
    * Altura: 172 cm
    * Taxa: 1 cm/ano

Simulação
    Ano    |    Criança A     |     Criança B
    0           145                 172
    1           153                 173
    2           161                 174
    3           169                 175
    4           177                 176

A Criança menor (A), ultrapassa a criança B em 4 anos.

*/

let criancaA = [145, 5]
let criancaB = [172, 2]
const taxa = function (A, B) {
    //Identificar o mais alto
    if (A[0] > B[0]) {
        var taller = A
        var smaller = B
    } else {
        var taller = B
        var smaller = A
    }
    //Buscar Ano
    if (A[0] != B[0]) {
        var ano = 0
        var altTaller = taller[0]
        var altSmaller = smaller[0]
        while (true) {
            altTaller += taller[1]
            altSmaller += smaller[1]
            ano += 1
            if (altSmaller > altTaller) {
                //Ultrapassou
                break
            } else {
                continue
            }
        }
        return `A criança menor ultrapassa a maior em ${ano} anos`
        
    } else {
        return 'Crianças com mesma Altura'
    }
}


console.log(taxa(criancaA, criancaB))