/* Obtendo dados do teclado */

/*no terminal node entradaESaida.js -a --> Gera uma flag para o arquivo
stdout - standard out (Saída padrão)
*/
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anônimo\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome:')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}\n`) //Disparado sempre que o usuário tecla enter
        process.exit()
    })
}