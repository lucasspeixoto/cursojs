import React from 'react'
import './Button.css'

// eslint-disable-next-line
export default props => {
    let classes = 'button '
    //Classes serão adicionadas conforme o parâmetros que será passado
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    // eslint-disable-next-line
    return (
        <button 
            onClick={() => props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}




