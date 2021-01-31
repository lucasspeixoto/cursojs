// Operador Ternário: Três Operandos
const resultado = nota => nota >=7 ? 'Aprovado': 'Reprovado'
/* Essa função arrow (função resultado), retorna implicitamente uma das opções
passadas para o operador ternário. */

/* O Operador ternário é composto por algumas partes
    * Expressão lógica: nota >=7 (Que retorna true ou false)
    * A interrogação (?)
    * Retorno caso a expressão seja falsa ('Aprovado')
    * Dois pontos (:)
    * Retorno caso a expressão seja true ('Reprovado)
*/

// Operador: nota >=7 ? 'Aprovado': 'Reprovado'

console.log(resultado(8.0))


/* Outra forma 
const resultado = nota => {
    return nota>=7 ? 'Aprovado': 'Reprovado'
}
console.log(resultado(8.0))
*/