import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

export default class Instrutor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />

                <div className="corpo">
                    <h1>
                        Lista de Instrutores
                    </h1>

                    <button type="button">
                        <Link to="/instrutores/adicionar" className="link">Cadastrar</Link>
                    </button>
                </div>
            </div>
        )
    }

}