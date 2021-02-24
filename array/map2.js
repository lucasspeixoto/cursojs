const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

//Desafio - Retornar um array apenas com os preços usando map

const precos = carrinho.map(function(e){
    let obj = JSON.parse(e)
    let preco = obj.preco
    return preco
})

console.log(precos)
