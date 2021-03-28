import React, {Component} from 'react'
// eslint-disable-next-line
export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    // eslint-disable-next-line
    constructor (props) {
        super(props) //super = Component
        this.setTipo = this.setTipo.bind(this) //Dentro de bind, o this vai ser o componente atual, pois dentro do construtor, o this é uma instância de Saudacao
        this.setNome = this.setNome.bind(this)
    }
    setTipo(e) {
        this.setState({ tipo: e.target.value }) //Passamos um objeto com os parâmetros que queremos alterar
    }
    setNome(e) {
        this.setState({ nome: e.target.value }) //Passamos um objeto com os parâmetros que queremos alterar
    }
    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <input type="text" placeholder="Tipo..." 
                value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}

/* import React, {Component} from 'react'

// eslint-disable-next-line
export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value }) //Passamos um objeto com os parâmetros que queremos alterar
    }

    setNome(e) {
        this.setState({ nome: e.target.value }) //Passamos um objeto com os parâmetros que queremos alterar
    }

    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <input type="text" placeholder="Tipo..." 
                value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
} */