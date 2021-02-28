const Plano = function(age){
    if (age < 10){
        return 100 + 80
    } else if (age >= 10 && age <=30){
        return 100 + 50
    } else if (age > 30 && age <=60){
        return 100 + 95
    } else{
        return 100 + 130
    }
}

console.log(Plano(7))

console.log(Plano(20))

console.log(Plano(48))

console.log(Plano(78))