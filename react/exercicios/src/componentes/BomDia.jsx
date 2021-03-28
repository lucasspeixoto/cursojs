import React from 'react'

//Todas tags precisam ser fechadas (mesmo se não precisar)
// eslint-disable-next-line
export default props => [
        <h1 key="h1">{props.nome}!</h1>, 
        <h2 key="h2">Até breve</h2>
    ]   

/*
export default props => 
    <Fragment>
        <h1>{props.nome}!</h1> 
        <h2>Até breve</h2>
    </Fragment>
*/