const funcs = []

for (let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


funcs[2]()
funcs[8]()

/* Agora como i é variável let, tem escopo de bloco, ou seja, para cada função
do array, vai ser armazenado um valor de i 'local', ou seja, cada função vai
imprimir o valor armazenada de i no momento de criação da função
*/

/* Em JavaScript funções tem 'consciência do local que foram definidas */