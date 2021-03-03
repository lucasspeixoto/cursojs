const despesasTotais = function(produtos){
    /*
    let precos = produtos.map(prod => prod.preco)
    return precos.reduce((acum, atual) => acum + atual, 0)
    */
    return produtos.reduce((acum, atual) => acum + atual.preco, 0)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ])
)

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])
)

