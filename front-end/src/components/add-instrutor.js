import React, { Component } from 'react'
import Header from './header'
import avatar from '../assets/default.jpg'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {RiBuilding4Line, RiTimeLine} from 'react-icons/ri'
import {TiSortAlphabeticallyOutline} from 'react-icons/ti'

import {GrSchedule, GrNotes} from 'react-icons/gr'

export default class AdicionarInstrutor extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Header />
                <h1>
                    Adicionar Instrutor
                </h1>
                <form>                
                    <div className="logo" >
                        <img src={avatar} alt="Curso"  />
                    </div>
                    <div>
                        <div className="col-6">
                            <div className="row">
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div className="grupo">
                                        <TiSortAlphabeticallyOutline />
                                        <input name="curso" type="text" autoFocus placeholder="Nome do curso" autoComplete="off" />
                                    </div>                            
                                </IconContext.Provider>                  
                            </div>

                            <div className="row">
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div className="grupo">
                                        <GrNotes />
                                        <textarea name="descricao">  Descrição </textarea>
                                    </div>                            
                                </IconContext.Provider>                  
                            </div> 
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div className="grupo">
                                        <GrSchedule />
                                        <input name="duracao" type="text" placeholder="Duração total do curso" autoComplete="off" />
                                    </div>                            
                                </IconContext.Provider>                  
                            </div> 

                            <div className="row">
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div className="grupo">
                                        <RiTimeLine />
                                        <input name="aula" type="number" placeholder="Aulas em minutos" autoComplete="off" />
                                    </div>                            
                                </IconContext.Provider>                  
                            </div> 

                            <div className="row">
                                <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                    <div className="grupo">
                                        <RiBuilding4Line />
                                        <input className="unidade" type="text" placeholder="Unidades" autoComplete="off" multiple />
                                    </div>                            
                                </IconContext.Provider>                  
                            </div>                                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="button">
                                <button type="button">
                                    <Link to="/cursos" className="link">Salvar</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>       
            </div>
        )
    }

}