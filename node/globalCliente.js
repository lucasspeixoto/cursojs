require('./global') //Carregando o objeto global para todos os outros módulos

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita, mudou'

console.log(MinhaApp.nome)