const soma = array => array.reduce((acumm, atual) => acumm + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const EstudantesComMedias = Object.entries(estudantes).map(estudante => {
        return { nome: estudante[0], media: media(estudante[1]) }
    })
    const EstudantesOrdenados = EstudantesComMedias.sort((a, b) => b.media - a.media)
    const Melhor = EstudantesOrdenados[0]
    return Melhor
}
console.log(recerberMelhorEstudante({
    Cesar: [8, 7.6, 8.9, 6],
    Cecilia: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})
)

