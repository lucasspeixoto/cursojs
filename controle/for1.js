//while com quantidades determinadas de repetições
let cont = 1
while (cont <= 10) {
    console.log(cont)
    cont++
}

for (let cont = 1; cont <= 10; cont++) {
    console.log(cont)
}

//Acessando elementos de um array
const notas = [1.5, 3.5, 4.4, 5.8, 6.4, 7.7, 8.6, 9, 10]
for (let i = 0; i < notas.length; i++){
    console.log(`Nota: ${notas[i]}`)
}
//Usar let em contadores de laços, para não ter acesso a essa variável fora do bloco