import React, { Component } from 'react'
import * as Yup from 'yup'
import{ Link } from 'react-router-dom'
import logo from '../assets/logo-transparente.png'
import '../assets/styles/login.css'


const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  })

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

 



    render() {

        return (
            <div>
                <>
      

      <form schema={schema} >

        <img src={logo} alt="Instituto Embelleze" />

        <input name="email" type="email" autoFocus placeholder="Seu e-mail" autoComplete="off" />
        <input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
            <Link to="/dashboard" className="link">Acessar</Link>
        </button>
        
        <Link to="/esqueci" className="link">Esqueci minha senha</Link>
      </form>
    </>
                

            </div>
        )
    }

}