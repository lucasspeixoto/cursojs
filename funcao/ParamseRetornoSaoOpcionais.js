function area(l, h) {
    const area = l * h
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else {
        return area
    }
}

console.log(area(1, 2))
console.log(area(1)) // 2 * undefined = NaN
console.log(area(1, 2, 3, 4))

console.log(area(5, 5)) // Retorna undefined