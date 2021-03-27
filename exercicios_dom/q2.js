let q2 = document.querySelector('#q2')

q2.innerHTML = "<label>Calcular o fatorial de: </label>"
    + "<input id='num' type='text' placeholder='Número'><br>"
    + "<input type='button' value='Calcular' onClick='fatorial()'>";

function fatorial() {
    const ini = new Date().getMilliseconds()

    const num = parseInt(document.getElementById('num').value) || '-'
    //Verificar se é texto
    if (num == '-') {
        console.log('Digitar um número Inteiro')
    } else {
        //Calcular fatorial
        var fat = 1
        for (let i = 1; i <= num; i++) {
            fat = fat * i
        }
    }
    const fim = new Date().getMilliseconds()
    console.log(`${num}! = ${fat} (${fim - ini} ms)`)
}