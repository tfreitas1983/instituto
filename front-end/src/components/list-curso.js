import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'


export default class Curso extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const cursos = [ 
            {
                id: 0,
                curso: "Barbearia",
                preco: "R$ 100,00"
            },
            {
                id: 1,
                curso: "Design de sobrancelhas",
                preco: "R$ 100,00"
            },
            {
                id: 2,
                curso: "Progressiva",
                preco: "R$ 100,00"
            },
            {
                id: 3,
                curso: "Depilação",
                preco: "R$ 100,00"
            }                         
        ];
        const columns = [{
        dataField: 'id',
        text: 'ID'
        }, {
        dataField: 'curso',
        text: 'Curso'
        }, {
        dataField: 'preco',
        text: 'Preço'
        }]

        const rowStyle = { backgroundColor: '#c8e6c9' }


        return (
            <div>
                <Header />
                
                <h1>
                    Lista de Cursos
                </h1>

                <button type="submit">
                    <Link to="/cursos/adicionar" className="link">Cadastrar</Link>
                </button>

                <BootstrapTable 
                keyField='id' 
                data={ cursos } 
                columns={ columns }                           
                bordered={ false }/>
            </div>
        )
    }

}