function CapsLock(props) {
    const textoInserido = props.children
    const textoEmCapsLock = textoInserido.toUpperCase()
    return <div>{textoEmCapsLock}</div>
}

function Pagina() {
    return <CapsLock texto="Massinha"/>
}