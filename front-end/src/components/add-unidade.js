import React, { Component } from 'react'
import Header from './header'
import '../assets/styles/unidades.css'
import logo from '../assets/logo-transparente.png'
import{ Link } from 'react-router-dom'

export default class AdicionarUnidade extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Unidade
                </h1>


            </div>
        )
    }

}