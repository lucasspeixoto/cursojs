function getInt(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInt(-1,10)
    console.log(`Opção escolhida: ${opcao}`)
} while (opcao != -1)

console.log('fim')

/* o do/while, vai executar o bloco do primeiro, antes de verificar o while.
Ou seja, se opcao começar em -1, vai entrar no bloco, mesmo a condição while
de para ser para opcao igual a -1 */