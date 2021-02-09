let dobro = function (a) {
    return 2 * a
}
console.log(dobro(Math.PI))

//Escrevendo a mesma função como arrow
dobro = (a) => { return 2 * a }
console.log(dobro(Math.PI))

//Forma reduzida, para 1 parâmetro - return implicito
dobro = a => 2 * a 
//As funções arrow são anônimas, para chamar temos que armazenar em constantes
console.log(dobro(Math.PI))


//Função sem parâmetro
let ola = function (){
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' //possui parâmetro (_), mas pode ser ignorado

console.log(ola())