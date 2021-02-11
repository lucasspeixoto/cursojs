function fruit (fruit){
    
    let lower_fruit = fruit.toLowerCase() 
    
    switch (lower_fruit){
        case 'maça':
            return 'Sem maça'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro'
    }
}

console.log(fruit('Melancia'))