const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${x}`)
}

//break e continue agem em blocos for, while e switch
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums) {
    if (x == 5) {
        continue
    }
    console.log(`x = ${x}`)
}

// Criando um rótulo associado a um loop for
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
externo: for (let a in nums) { // esse for loop está associado a um laço externo
    for (let b in nums) {
        if (a == 2 && b == 3) break externo // Interrompe o for associado ao rótulo externo
            //break  o break interrompe o próximo for, se quisermos interronper outro, podemos fazer com um rótulo (externo)
             
        console.log(`Par = ${a}, ${b}`)
    }
}