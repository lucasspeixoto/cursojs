const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec() 

/* A função exec apesar de ter declarado uma constante valor
ao executar a função 'minhaFuncao', vai retornar o valor 'Global'
pois ele foi definida em um contexto léxico (local de declaração)
diferente, ou seja, mesmo chamando ela em outro local, ela carrega
consigo esse contexto, e nesse contexto (funcao 'minhaFuncao') ela
não tinha recebido valor = 'Local', buscou no escopo léxico onde 
ela foi definida. Não busca no local de execução, mas sim no local
onde foi definida.
*/