//get e set para acessar valores de forma mais controlada

const sequencia = {
    _valor: 1,  // O _ é uma convenção para sinalizar que a variável deve ser acessada apenas internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        //Validação
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

/* Toda vez que tentamos acessar um valor dentro de uma função com get e set
ao acessar chama o get e ao atribuir chama o set */
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Atribuindo um valor menor que o que ele tem atualmente (1000), não vai passar no set
console.log(sequencia.valor, sequencia.valor)