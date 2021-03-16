//Conjunto não indexada que não aceita repetição

const times = new Set()

times.add('Corinthians')
times.add('São Paulo').add('Santos').add('Palmeiras')
times.add('Flamengo')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('santos'))
console.log(times.has('Santos'))

const nomes = ['Liana', 'Cecilia', 'Lucas', 'Cesar']

const nomesSet = new Set(nomes)
console.log(nomesSet)