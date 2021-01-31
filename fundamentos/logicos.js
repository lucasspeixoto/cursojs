/*

 * v e v -> v
 * v e f -> f
 * f e ? -> f
 
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 
 * v xor v -> f    xor : Exclusivo ou
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 
 * !v -> f Contrário de v
 * !f -> v Contrário de f


 */

/* t1 = Trabalho Terça     |      t2 = Trabalho Quinta

Se t1 e t2 der certo    ---> Compra TV 50" e Tomar Sorvete
Se t1 ou t2 der certo   ---> Compra TV 32" e Tomar Sorvete
Se t1 e t2 der errado   ---> Não Compra TV nem toma Sorvete

Para comprar a TV 50", precisamos de um operador 'E', pois só podemos 
compra-la se t1 e t2 forem true, para Tomar Sorvete, precisamos do 'OU',
pois se t1 ou t2 forem true, tomamos sorvete. Para Comprar a TV 32",
precisamos do operador xor(Exclusivo), pois compra
*/

function compras(t1, t2) {
    const comprarSorvete = t1 || t2   // || = Ou
    const comprarTV50 = t1 && t2      // && = E
    // Opção 1: const comprarTV32 = !!(t1 ^ t2) //operador bitwise xor
    const comprarTV32 = t1 != t2 // O 'Ou Exclusivo' pode ser simulado com uma diferença.
    const manterSaudavel = !comprarSorvete // manterSaudavel é True quando comprarSorvete é falso.

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } /*
     Objetos só com valor ? Quando omitimos a chave, passando uma constante ou variável
     para criação do objeto, é um recurso novo do ES 2015. Quando criamos dessa forma, a chave
     vai ser a constante e o valor vai ser o valor da constante (true ou false)
       */
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))