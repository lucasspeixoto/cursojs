/*
1- a1 + 0r
2- a1 + 1r
3- a1 + 2r
4- a1 + 3r
5- a1 + 4r

n- a1 + (n-1)r

*/
function aritmetica (n, a1, r){
    let soma = 0
    for (let i = 1; i <= n; i++){
        an = a1 + (i-1)*r
        console.log(`a${i}: ${an}`)
        soma += an
    }
    console.log(`Soma: ${soma}`)
}
aritmetica(16, 3, 6)

/*
1 - a1
2 - a1*q
3 - a1*q^2
4 - a1*q^3

n - a1*q^(n-1)
*/

function geometrica (n, a1, q){
    let soma = 0
    for (let i = 1; i <=n; i++){
        an = a1*(q**(i-1))
        console.log(`a${i}: ${an}`)
        soma += an
    }
    console.log(`Soma: ${soma}`)
}

geometrica(5, 1, 2)