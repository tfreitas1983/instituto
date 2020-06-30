import React, { Component } from 'react'
import Header from './header'

export default class AdicionarServico extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Servico
                </h1>
            </div>
        )
    }

}