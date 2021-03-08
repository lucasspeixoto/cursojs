const contadorA = require('./instanciaUnica') /*Aqui, por ser instância única, o node faz cache ao 
importarmos com require, ou seja, se o objeto ja tiver sido criado, ele retorna a mesma instância */
const contadorB = require('./instanciaUnica')

//const contadorC = require('./instanciaNova')  //Retorna uma instância nova (Uma função)
const contadorC = require('./instanciaNova')() //Retorna um objeto
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)
/* Como é criado um cache ao importar o modula 'instanciaUnica',
 tudo que ocorre em A, B sente, e vice-versa. */

console.log('\n')


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
/*Aqui, são novas instâncias que foram criadas a partir de uma factory,
 logo, o que ocorre em C, não é sentido por D */


/*
No caso de instância única, os contadores A e B estariam apontando para o mesmo 
endereço de memória (gerado ao importar o próprio objeto atribuído a module.exports) e,
consequentemente, uma alteração em qualquer um deles estaria sendo feita diretamente no
objeto que está guardado naquele endereço de memória. Desse modo, invocar a função por meio
de A ou B ou imprimir algum de seus valores é o mesmo que fazê-lo a partir do próprio objeto importado.

Já no caso dos contadores C e D, importa-se uma função cujo retorno é um objeto e invoca-se ela já dentro
do módulo do cliente. O objetos guardados a contadorC e contadorD estariam, então, sendo criados no
momento em que a função é invocada. É como se cada contador estivesse recebendo uma declaração literal de
um novo objeto, igual ao definido na função. Com isso, define-se um endereço de memória para cada contador.
Não é o próprio objeto alocado em module.exports do outro módulo que está sendo importado, 
mas uma função que retorna um objeto.
*/
