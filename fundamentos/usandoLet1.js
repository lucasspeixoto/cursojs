var numero = 1

{
    let numero = 2 // Como a variável é tipo var, vai sobrescrever a declaração anterior
    console.log('bloco = ', numero)
}

function teste(){
    var numero = 3
    console.log('função = ', numero)
}
console.log('global = ', numero)
teste()

// Let tem escopo de função, escopo global e escopo de bloco