const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //this aqui se refere ao objeto pessoa
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() /* Vai retornar undefined, pois está apontando um this diferente, 
que não é o objeto pessoa, que não tem parâmetro saudacao.    
Conflito entre paradigmas: funcional e OO */

//Para resolver isso, podemos usar o bind

const falarDePessoa = pessoa.falar.bind(pessoa) /* Com o bind passamos o objeto que queremos 
que seja resolvido o this
Aqui o this vai ser o objeto que definimos na linha 1 (pessoa)
    * O bind é o método responsável por amarrar um determinado objeto, para ele ser dono da execução daquele metodo, sempre que o metodo for chamado. 
    * O this, ao chamar a função definida (no caso falarDePessoa), vai se referenciar
ao objeto passado como parâmetro no bind
    * A função bind retorna outra função, que nessa função está amarrado o objeto pessoa, e essa função está armazenada na constan falarDePessoa*/
falarDePessoa()
