import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Unidade extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <h1>
                    Lista de Unidades
                </h1>

                <button type="button">
                    <Link to="/unidades/adicionar" className="link">Cadastrar</Link>
                </button>

            </div>
        )
    }

}