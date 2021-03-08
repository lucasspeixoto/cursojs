/* Como retornar uma nova instância, ja que, 
por padrão, o node retorna um cache ? 

Podemos usar uma factory, ja que retorna uma nova
instância (objeto)

*/

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
