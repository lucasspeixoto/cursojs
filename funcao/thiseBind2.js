//Ja que o this varia, como cravar seu valor ?

function Pessoa(){
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)   //Dispara outra função a cada 1000 ms
}

/* Sem o bind, o this não se refere ao objeto pessoa, pois foi definido dentro da 
função setInterval */
new Pessoa    //instanciando o objeto Pessoa



/* Outra forma: Armazenar o this em uma constante no momento em que queremos referenciar, 
para acessar o this em outro momento

*/
function Pessoa(){
    this.idade = 0
    const self = this //self não muda nunca - Forma de driblar o fato do this mudar
    //com essa forma (definindo a constante self, não importa quem chama a função rederenciando o this)
    //Podemos assim acessar com a constante o que o this acessaria naquele momento
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)   //Dispara outra função a cada 1000 ms
}

/* Sem o bind, o this não se refere ao objeto pessoa, pois foi definido dentro da 
função setInterval */
new Pessoa    //instanciando o objeto Pessoa











