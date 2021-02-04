function teste1(num) {
    if (num > 7)
        console.log(num) // Sentença associada ao if
    console.log('final') // Sentença não associada ao if (Sempre será executada)
}

teste1(6) /* Não cai no if, imprime apenas 'final', que sempre será executada, 
por nosso if n tem aspas, ou seja, está associado apenas a primeira sentença console.log(num),
 a segunda em diante, sempre será executada  */
teste1(8) /* Em JS as 'aspas' para definir um bloco if, não é obrigatório, porem, 
apenas uma sentença estará associado aquele bloco */

function teste2(num) {
    if (num > 7); {
        console.log(num)
    }
}
teste2(6) // Apesar de ser menor que 7 é impresso, pois o ';' encerra o bloco if; não considera o bloco {}
teste2(8)