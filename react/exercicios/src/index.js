import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Lucas" sobrenome="Fernandes Peixoto" />
            <Filho nome="Cecília" />
            <Filho nome="César"/>
    </div>
    , document.getElementById('root'))


