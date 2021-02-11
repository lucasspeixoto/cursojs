const compra = function (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza ?'
        default:
            return 'Não temos esse modelo!'
    }
}
console.log(compra('bug'))