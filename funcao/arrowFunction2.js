function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/* Aqui, não é necessário usar bind nem o const self = this, pode definimos nossa função
como uma função arrow, ou seja, o this não varia, aponta para o objeto do contexto da função */ 