import React, { Component } from 'react'
import Header from './header'

export default class AdicionarProfissional extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Profissional
                </h1>
            </div>
        )
    }

}