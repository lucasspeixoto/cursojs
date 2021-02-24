/*O filter é para filtrar um array e obter, por exemplo, um sub-array
O array retornardo vai ser menor ou igual ao array original
*/
const produtos = [
    {nome: 'Notebook', preco: 4900, fragil: true},
    {nome: 'Desktop', preco: 6999, fragil: false},
    {nome: 'Ipad', preco: 2199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

/* o filter, em cada iteração no array, vai receber um retorno
true ou false, se for true, entra no array novo
*/

//Filtrando apenas produtos frageis e aciam de 500 reais
const frageis = produtos.filter(function(p){
    if (p.preco > 500 && p.fragil === true) {
        return true
    } else {
        return false
    }
})

console.log(frageis)