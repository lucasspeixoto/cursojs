const funcs = []

for (var i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/* Apesar das funções na posição 2 e 8, terem sido armazenadas em momentos onde i era diferente
o resultado da impressão da chamada de qualquer função dentro do array funcs vai ser 10, pois é 
o atual valor de i. Isso ocorrer pois a variável i é do tipo var, que não tem escopo de bloco
*/