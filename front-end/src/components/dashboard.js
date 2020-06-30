import React, { Component } from 'react'
import '../assets/styles/dashboard.css'
import Header from './header'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                
                <Header />
                    
                

                <h1>Dashboard</h1>

            </div>
        )
    }

}