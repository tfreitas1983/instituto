import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'


export default class Usuario extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />

                <div className="corpo">
                    <h1>
                        Lista de Usuários
                    </h1>

                    <button type="button">
                        <Link to="/usuarios/adicionar" className="link">Cadastrar</Link>
                    </button>
                </div>
            </div>
        )
    }

}