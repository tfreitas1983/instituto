import React, { Component } from 'react'
import Header from './header'

export default class AdicionarInstrutor extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Instrutor
                </h1>
            </div>
        )
    }

}