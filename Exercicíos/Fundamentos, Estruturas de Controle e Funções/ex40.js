const conceito = function(notas){
    for (let i = 0; i<notas.length; i++){
        var atual = notas[i]
        if (atual >=0 && atual <=4.9){
            console.log('Conceito D')
        } else if (atual >4.9 && atual <=6.9){
            console.log('Conceito C')

        } else if (atual >6.9 && atual <=8.9){
            console.log('Conceito B')
        } else if (atual >8.9 && atual <= 10){
            console.log('Conceito A')
        } else {
            console.log('Nota inválida')
        }
    }
}

conceito([1.1, 5.2, 7.1, 9])