import React, { Component } from 'react'
import Header from './header'
import '../assets/styles/unidades.css'
import logo from '../assets/logo-transparente.png'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import {RiLockPasswordLine, RiGroupLine, RiBuilding4Line, RiGovernmentLine, RiPhoneLine, RiMailSendLine, RiMailLine} from 'react-icons/ri'
import {GiModernCity} from 'react-icons/gi'
import {GrMapLocation, GrLocation} from 'react-icons/gr'
import {BsAt} from 'react-icons/bs'

export default class AdicionarUnidade extends Component {
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
                            Adicionar Unidade
                        </h1>
                    </div>                
                    <form>                
                        <div className="logo" >
                            <img src={logo} alt="logomarca"  />
                        </div>
                        <div>
                            <div className="col-6">
                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiBuilding4Line />
                                            <input name="razao" type="text" autoFocus placeholder="Razão Social" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiBuilding4Line />
                                            <input name="fantasia" type="text" placeholder="Nome fantasia" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div> 

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiBuilding4Line />
                                            <input name="cnpj" type="text" placeholder="CNPJ" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div> 

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiGovernmentLine />
                                            <input name="municipal" type="text" placeholder="Inscrição municipal" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>                     
                                
                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <BsAt />
                                            <input name="email" type="email" autoComplete="off" placeholder="E-mail" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>  

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiPhoneLine />
                                            <input name="telefone" type="text" placeholder="Telefone" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>  
                            </div>
                        
                        {/* Segunda coluna */}

                            <div className="col-6">

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <RiMailSendLine />
                                            <input name="cep" type="text" placeholder="CEP" autoComplete="off" />
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GrLocation />
                                            <input name="rua" type="text" placeholder="Logradouro" autoComplete="off"/>
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>  

                                <div className="row">  
                                    <IconContext.Provider value={{ size: "3.4em", className: "global-class-name" }}>
                                        <div className="grupo2">
                                            <GrLocation />
                                            <div className="numcomp">
                                                <input name="numero" type="text" placeholder="Número" autoComplete="off" />                                     
                                                <input name="complemento" type="text" placeholder="Complemento" autoComplete="off"/>                                                                                  
                                            </div>   
                                        </div>                            
                                    </IconContext.Provider>                                                
                                </div>

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GrLocation />
                                            <input name="bairro" type="text" placeholder="Bairro" autoComplete="off"/>
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>  

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GiModernCity />
                                            <input name="cidade" type="text" placeholder="Cidade" autoComplete="off"/>
                                        </div>                            
                                    </IconContext.Provider>                  
                                </div>  

                                <div className="row">
                                    <IconContext.Provider value={{ size: "3em", className: "global-class-name" }}>
                                        <div className="grupo">
                                            <GrMapLocation />
                                            <select>
                                                <option value="estado">Selecione o estado</option>
                                                <option value="AC">Acre</option>
                                                <option value="AL">Alagoas</option>
                                                <option value="AP">Amapá</option>
                                                <option value="AM">Amazonas</option>
                                                <option value="BA">Bahia</option>
                                                <option value="CE">Ceará</option>
                                                <option value="DF">Distrito Federal</option>
                                                <option value="ES">Espírito Santo</option>
                                                <option value="GO">Goiás</option>
                                                <option value="MA">Maranhão</option>
                                                <option value="MT">Mato Grosso</option>
                                                <option value="MS">Mato Grosso do Sul</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="PA">Pará</option>
                                                <option value="PB">Paraíba</option>
                                                <option value="PR">Paraná</option>
                                                <option value="PE">Pernambuco</option>
                                                <option value="PI">Piauí</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="RN">Rio Grande do Norte</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                                <option value="RO">Rondônia</option>
                                                <option value="RR">Roraima</option>
                                                <option value="SC">Santa Catarina</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="SE">Sergipe</option>
                                                <option value="TO">Tocantins</option>                       
                                            </select>
                                        </div>
                                    </IconContext.Provider>
                                </div>       
                                        
                            </div>
                        </div>
                        <div className="button">
                            <button type="button">
                                <Link to="/usuarios" className="link">Salvar</Link>
                            </button>
                        </div>
                    </form> 
                </div>      
            </div>
        )
    }
}