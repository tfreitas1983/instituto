import React, { Component } from 'react'
import Header from './header'
import '../assets/styles/usuarios.css'
import avatar from '../assets/default.jpg'
import{ Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {MdMail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
import {RiGroupLine} from 'react-icons/ri'

export default class AdicionarUsuario extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />    
                    <div className="title">
                        <h1> 
                            Adicionar Usuário
                        </h1>
                    </div>
                <form>                
                    <div className="avatar">
                        <img src={avatar}  />
                    </div>
                    <div>
                        <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                            <div className="grupo">
                                <MdMail />
                                <input name="email" type="texto" placeholder="Seu e-mail" autoComplete="off" />
                            </div>                            
                        </IconContext.Provider>                  
                    </div>

                    <div>
                        <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                            <div className="grupo">
                                <RiLockPasswordLine />
                                <input name="password" type="password" placeholder="Digite a senha" />
                            </div>                            
                        </IconContext.Provider>                  
                    </div> 

                    <div>
                        <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                            <div className="grupo">
                                <RiLockPasswordLine />
                                <input name="passwordconfirm" type="password" placeholder="Confirme a senha" />
                            </div>                            
                        </IconContext.Provider>                  
                    </div>                      
                    
                    <div>
                        <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                            <div className="grupo">
                                <RiGroupLine />
                                <select>
                                    <option>Selecione o perfil</option>
                                    <option>Administrador</option>
                                    <option>Financeiro</option>
                                    <option>Instrutor</option>
                                    <option>Profissional</option>
                                    <option>Secretaria</option>                        
                                </select>
                            </div>
                        </IconContext.Provider>
                    </div>                  

                    <button type="button">
                        <Link to="/usuarios" className="link">Salvar</Link>
                    </button>
                </form>                
            </div>
        )
    }
}