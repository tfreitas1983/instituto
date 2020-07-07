import React, { Component } from 'react'
import Header from './header'
import '../assets/styles/instrutor.css'
import avatar from '../assets/default.jpg'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {RiBuilding4Line, RiProfileLine} from 'react-icons/ri'
import { FaTransgenderAlt} from 'react-icons/fa'
import {GrSchedule} from 'react-icons/gr'
import {MdPersonOutline} from 'react-icons/md'
import { GiScissors } from "react-icons/gi"

export default class AdicionarInstrutor extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <div className="corpo">
                    <div className="title">
                    <h1> 
                        Adicionar Instrutor
                    </h1>
                    </div>
                    <form>                
                        <div className="avatar" >
                            <img src={avatar} alt="Curso"  />
                        </div>
                        <div>
                            <div className="col-6">
                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <MdPersonOutline />
                                            <input name="instrutor" type="text" autoFocus placeholder="Nome do(a) instrutor(a)" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiProfileLine />
                                            <input name="cpf" type="text" placeholder="CPF" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div> 

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GrSchedule />
                                            <input name="dtnasc" type="text" placeholder="Data de nascimento" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <FaTransgenderAlt />
                                            <select>
                                                <option value="estado">Selecione o gênero</option>
                                                <option value="m">Mulher</option>
                                                <option value="h">Homem</option>
                                                <option value="mt">Mulher Trans</option>
                                                <option value="ht">Homem Trans</option>                                                             
                                            </select>
                                        </div>
                                    </IconContext.Provider>
                                </div>       

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiBuilding4Line />
                                            <input className="unidades" type="text" placeholder="Unidades" autoComplete="off" multiple />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>    
                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GiScissors />
                                            <select>
                                                <option value="curso">Selecione o curso</option>
                                                <option value="1">Barbearia</option>
                                                <option value="2">Design de Sobrancelhas</option>
                                                <option value="3">Progressiva</option>
                                                <option value="4">Depilação a cera</option>                                                             
                                            </select>
                                        </div>
                                    </IconContext.Provider>
                                </div>                                    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="button">
                                    <button type="button">
                                        <Link to="/instrutores" className="link">Salvar</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>      
            </div>
        )
    }

}