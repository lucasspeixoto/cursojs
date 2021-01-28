console.log(typeof Object)     /* - Type: function */
console.log(typeof new Object) /* Agora estamos instanciando um objeto - Type: Object */

/* new Object é semelhante a chamada de um construtor */


/* Funções tambem são tipo function, a menos que instancia-mos com new */
const Cliente = function(){}
console.log(typeof Cliente) /*Criando instancias de funções que definimos */
console.log(typeof new Cliente)

/* Para classes o comportamento é o mesmo. Classes são formas diferente de construir funções.
Internamente é criado uma função */
class Produto {} // Padrão ES 2015 (ES6) - Criar instancia a partir de classes
console.log(typeof Produto)
console.log(typeof new Produto)

//OBS: Classes e Funções podem ser chamadas com parênteses Cliente(), Produto()

/*
Quando criamos classes a partir da notação literal, ja temos a instancia
Que é diferente de definir uma função, que é como se fosse a sua classe (molde)
e a partir dessa estrutura, voce instancia quantos objetos quiser.
*/

// Em JS, quem exerce o papel de criar classes e instanciar objetos é a função