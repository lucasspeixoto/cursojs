var numero = 1

{
    var numero = 2 // Como a variável é tipo var, vai sobrescrever a declaração anterior
    console.log('bloco = ', numero)
}

function teste(){
    var numero = 3
    console.log('função = ', numero)
}
console.log('global = ', numero)
teste()

// Var tem escopo de função e escopo global, não tem escopo de bloco