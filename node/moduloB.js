//Forma mais aconselhável de exportar
module.exports = {
    bomdia: 'Bom dia',
    boanoite(){
        return 'Boa noite'
    }
}

//Esse objeto estará disponível fora do módulo atual

//Para exportar um objeto, tem que usar o module.exports, o exports e this, não exporta