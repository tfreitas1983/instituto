import React, { Component } from 'react'
import Header from './header'


export default class AdicionarCurso extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Curso
                </h1>
            </div>
        )
    }

}