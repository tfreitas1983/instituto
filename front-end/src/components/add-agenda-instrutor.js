import React, { Component } from 'react'
import Header from './header'
import '../assets/styles/instrutor.css'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons"
import {GrSchedule} from 'react-icons/gr'
import SVG from 'react-inlinesvg';
import Ni  from '../assets/ni.svg'
import Nilopolis  from '../assets/nilopolis.svg'
import Caxias from '../assets/caxias.svg'



export default class AgendaInstrutor extends Component {
    constructor(props) {
        super(props)

       this.selecionar = this.selecionar.bind(this)

       this.state = {
           unidade: "caxias"
       }
    }

    componentDidMount() {
        this.setState({
            unidade: "caxias"
        })
    }
    
    selecionar (e) {   
        this.setState({
            unidade: e.target.dataset.name
        })
    }
    
 
      
    render() {
            
        
        let agenda = null
       
        if (this.state.unidade === "caxias") { agenda = 
            <div className="agenda">
                <h2>Barbearia</h2>
                
                <div className="row">
                    <div className="col-2">
                        <span>Dia da semana</span>
                    </div>
                    <div className="horas">
                        <span>Manhã</span>
                    </div>
                    <div className="horas">
                        <span>Tarde</span>
                    </div>
                    <div className="horas">
                        <span>Noite</span>
                    </div>
                </div>
                <div className="row">                        
                    <div className="col-2">
                        <span>Domingo</span>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                    
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                        
                </div>    
                <div className="row">                        
                    <div className="col-2">
                        <span>Segunda</span>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                    
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>  
                </div>
                <div className="row">                        
                    <div className="col-2">
                        <span>Terça</span>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                </div>
                <div className="row">                        
                    <div className="col-2">
                        <span>Quarta</span>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>  
                </div>
                <div className="row">                        
                    <div className="col-2">
                        <span>Quinta</span>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                    
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                </div> 
                <div className="row">                        
                        <div className="col-2">
                            <span>Sexta</span>
                        </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div> 
                </div>
                <div className="row">                        
                        <div className="col-2">
                            <span>Sábado</span>
                        </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    <div className="horas">
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>
                    
                    <div className="horas">                                                      
                        <input type="time" placeholder="Início"></input>
                        <input type="time" placeholder="Fim"></input>
                    </div>                        
                </div>                
            </div>   
        }

        if (this.state.unidade === "niguacu") {
            agenda = 
                <div>
                    <h1> Agenda Nova Iguaçu </h1>
                </div>
        }

        if (this.state.unidade === "nilopolis") {
            agenda = 
                <div>
                    <h1> Agenda Nilópolis</h1>
                </div>
        }

        if (this.state.unidade === "" || this.state.unidade === undefined) {
            agenda = <div><h3>Clique em uma unidade</h3></div>
        }

    

        return (
            <div>
                <div>
                    <Header />
                    <div className="corpo">
                        <div className="title">
                            <h1> 
                                Agenda [Nome do(a) instrutor(a)]
                            </h1>
                        </div>
                    </div>
                    <div className="caixas">
                        <div className="caixa" onClick={this.selecionar} data-name="caxias">
                            <h3 onClick={this.selecionar} data-name="caxias"> Duque de Caxias</h3>                    
                            <SVG src={Caxias} onClick={this.selecionar} className="svg" data-name="caxias" />
                        </div>
                        <div className="caixa" onClick={this.selecionar} data-name="niguacu">
                            <h3  onClick={this.selecionar} data-name="niguacu"> Nova Iguaçu</h3>                    
                            <SVG src={Ni} onClick={this.selecionar} data-name="niguacu"/>
                        </div>
                        <div className="caixa" onClick={this.selecionar} data-name="nilopolis">
                            <h3 onClick={this.selecionar} data-name="nilopolis"> Nilópolis</h3>                             
                            <SVG  src={Nilopolis} className="svg" onClick={this.selecionar} data-name="nilopolis" />                                            
                        </div>
                    </div>
                </div> 
                {agenda} 
                <div className="button">
                    <button type="button">
                        <Link to="/instrutores" className="link">Salvar</Link>
                    </button>
                </div>
            </div>
        )
    }
}