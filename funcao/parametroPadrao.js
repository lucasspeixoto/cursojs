// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 //se a for true (passado) recebe a, se false(não passado ou zero) retorna 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()) //Assumiu 1 para todos, como previsto
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //O valor 0 retorna falso, assumindo 1


//estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //1ª Estratégia
    b = 1 in arguments ? b : 1  //2ª Estratégia - b - 1... (1 é o índice do parâmetro 2, indice 1)
    c = isNaN(c) ? 1 : c        //3ª Estratégia - Melhor Opção (Com excessão da opção nova do ES2015)
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

// Usando o valor padrão do ES2015 - Forma mais usual
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0)) 

/*A Opção do valor padrão serve para parÂmetros passados para funções
Mas não serve para variáveis cridos dentro de funções. Nesse caso usar
estratégia 1 */