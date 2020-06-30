import React, { Component } from 'react'
import '../assets/styles/header.css'
import { Link } from 'react-router-dom'
import {IconContext} from 'react-icons'
import { RiMenuLine } from 'react-icons/ri'
import avatar from '../assets/beauty.png'



export default class Header extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            
                <div id="nav">  
                    <span><Link to={"/dashboard"}> Dashboard</Link></span>                   
                    <div className="dropdown">
                        <button className="dropbtn">
                            Cadastros
                        </button>                    
                        <div className="dropdown-content">
                            <span> <Link to={"/usuarios"}> Usuários </Link> </span>
                            <span> <Link to={"/unidades"}> Unidades </Link> </span>
                            <span> <Link to={"/cursos"}> Cursos </Link> </span>
                            <span> <Link to={"/instrutores"}> Instrutores </Link> </span>
                            <span> <Link to={"/profissionais"}> Profissionais </Link> </span>
                            <span> <Link to={"/servicos"}> Serviços </Link> </span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Financeiro
                        </button>                    
                        <div className="dropdown-content">
                            <span> <Link to={"/despesas"}> Contas a pagar </Link> </span>
                            <span> <Link to={"/receitas"}> Contas a receber </Link> </span>
                            <span> <Link to={"/financeiro"}> Resumo </Link> </span>                         
                        </div>
                    </div>
                    <div>
                     <Link to={"/relatorios"}> Relatórios </Link>
                    </div>                    
                                     
                    <div className="sessao">                        
                        <img src={avatar} alt="avatar" />
                        <div className="dropdown">
                            <div className="dropbtn-menu">                                
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div>
                                  <RiMenuLine />  
                                    </div>                            
                                </IconContext.Provider>                                 
                            </div> 
                            <div className="dropdown-content-menu">
                                <span> <Link to={"/perfil"}> Meu perfil </Link> </span>
                                <span> <Link to={"/sair"}> Sair </Link> </span>                            
                            </div>
                        </div>                        
                    </div>                  
                </div>
           
        )
    }

}