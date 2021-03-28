import React from 'react'

/* Ao exportar um componente, no lugar do default, podemos usar uma const
definindo um nome para esse componente(BoaTarde e BoaNoite)
 */
// eslint-disable-next-line
export const BoaTarde = props => <h1>Boa Tarde {props.nome}</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

//Outra forma:
// eslint-disable-next-line
export default { BoaTarde, BoaNoite}