let comparaComthis = function (param) {
    console.log(this == param)

}
comparaComthis(global) //Aqui o this aponta para o objeto global

const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global) //Agora aponta para o objeto pois pedimos para fazer isso com o bind
comparaComthis(obj)

//Testando esse comportamento com arrow functions

let comparacomThisArrow = param => console.log(this == param)

comparacomThisArrow(global) // Como a função é arrow, não aponta para o global, mas sim para o contexto do módulo (arquivo que foi definida a função)
comparacomThisArrow(module.exports) //Módulo local (arquivo .js em questão)


//Usando o bind dentro de uma função arrow para ver se conseguimos mudar a referência do this
comparacomThisArrow = comparacomThisArrow.bind(obj)
comparacomThisArrow(obj) // false, não aponta
comparacomThisArrow(module.exports) // continue mudando para o contexto que a função foi escrita
