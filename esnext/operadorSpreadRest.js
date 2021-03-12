// operador ... rest(juntar) spread(espalhar)
// usar rest com parâmetro de função



// usar spread com objeto
const funcionario1 = {nome: 'Liana', salario: 11250}
const funcionario2 = {nome: 'Lucas', salario: 10250}
const clone = {ativo: true, ...funcionario1} //Espalha os parametros de funcionario em clone
console.log(clone)

// usar spread com array
const grupoA = ['Cecilia', 'Cesar']
const grupoFinal = ['Liana', 'Lucas', ...grupoA]
console.log(grupoFinal)