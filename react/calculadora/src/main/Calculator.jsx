import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

// eslint-disable-next-line
export default class Calculator extends Component {

    state = { ...initialState }

    //Resolvendo a referência do this com construtor + bind
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            //Caso digite novamente uma operação, pegar o valor atual em 0 e em 1, juntar em 0 e limpar 1
            //O try catch vai evitar erro ao digitar várias vezes o '='
            try {
                //Mais ideal que o eval, seria um 'if/else if' ou 'switch/case'
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            //Alterando o estado atual
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        //Igonorar tentativa de adicioanar mais de um '.'
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' //Só tem o 0
            || this.state.clearDisplay //Quando clearDisplay for marcado como true (para limpar)
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue: displayValue, clearDisplay: false })

        //Armazenar valor digitado
        if (n != '.') {
            const indice = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[indice] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {

        /*Para resolver o problema de referência do this, vamos definir arrows functions aqui:

        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        Outra forma seria colocar essas funções no construtor com o bind */

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}