const Preco = function(cod, qnt){
    switch(cod){
        case 100: return `${qnt} Cachorro quente: R$ ${qnt*3.00}`
        case 200: return `${qnt} Hambúrguer Simples: R$ ${qnt*4.00}`
        case 300: return `${qnt} Cheeseburguer: R$ ${qnt*5.50}`
        case 400: return `${qnt} Bauru: R$ ${qnt*7.50}`
        case 500: return `${qnt} Refrigerante: R$ ${qnt*3.50}`
        case 600: return `${qnt} Suco: R$ ${qnt*2.80}`
        default: return 'Produto Não Existe'
    }
}
console.log(Preco(100, 2))
console.log(Preco(200, 2))
console.log(Preco(300, 2))
console.log(Preco(400, 2))
console.log(Preco(500, 2))
console.log(Preco(600, 2))
console.log(Preco(700, 2))

