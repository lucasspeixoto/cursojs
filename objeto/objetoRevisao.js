//Objeto - Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto.marca = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Liana',
        idade: 27,
        endereco: {
            cidade: 'Bauru',
            bairro: 'Centro',
            numero: 152
        }
    },
    condutores: [{
        nome: 'Lucas',
        idade: 29
    }, {
        nome: 'Raul',
        idade: 2
    }],
    calcularseguro: function(){
        return console.log('Seguro...')
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['bairro'] = 'Av Z'
console.log(carro.calcularseguro())