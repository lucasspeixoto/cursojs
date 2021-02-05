/* For IN percorre os atributos de determianda estrutura (Objetos e Arrays)
Existem outras formas melhores de percorrer arrays:
    * For Int
    * map
    * reduce
    * filter
    
    */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { //Existem formas melhores
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Liana',
    sobrenome: 'Fernandes',
    idade: 29,
    peso: 64
}

//Percorrendo um objeto
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

