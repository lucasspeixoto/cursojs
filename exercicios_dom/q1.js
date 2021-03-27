let q1 = document.querySelector('#q1')

q1.innerHTML = "<label>Valor minimo = 1 | valor maximo = 50</label> </br>"
    + "<input id='minimo' type='text' placeholder='Valor minimo'>"
    + "<input id='maximo' type='text' placeholder='Valor maximo'>"
    + "<input type='button' value='Calcular' onClick='exibirNumeros()'>";

function exibirNumeros() {

    let min = document.getElementById('minimo')
    let max = document.getElementById('maximo')
    if (min.value.length == 0 || max.value.length == 0) {
        console.log('Inserir Valores Mínimo e Máximo')
    } else {
        //Checar se minimo é maior que máximo
        if (parseInt(min.value) > parseInt(max.value)) {
            console.log('Valor Mínimo deve ser menor que o máximo')
        } else {
            //Calcular quantidade de multiplos de 2 e 3
            let vmin = parseInt(min.value)
            let vmax = parseInt(max.value)
            var qnt = 0
            for (let i = vmin; i <= vmax; i++) {
                if ((i % 2 == 0) && (i % 3 == 0)) {
                    qnt++
                }
            }
        }
    }
    console.log(`Entre ${min.value} e ${max.value} existe(m) ${qnt} números divisíveis por 2 e por 3`)
}


