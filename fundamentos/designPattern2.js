function fabricarPessoa(nome, sobrenome){
    let pessoa = {}
    pessoa.nome = nome 
    pessoa.sobrenome = sobrenome

    return pessoa
}

let pessoaA = fabricarPessoa('Liana', 'Fernandes')

let pessoaB = fabricarPessoa('Lucas', 'Peixoto')

console.log(pessoaA)  
console.log(pessoaB)

/* Os objetos pessoaA e pessoaB são publicos, podendo ser acessados em qualquer escopo. 
Definimos um função que criar um objeto vazio e, fora dessa função, definimos as propriedades,
utilizando os recursos da função, da fábrica */