import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Login from "./components/login"
import Dashboard from "./components/dashboard"

import Usuario from "./components/list-usuario"
import AdicionarUsuario from "./components/add-usuario"
import EditarUsuario from "./components/edit-usuario"

import Unidade from "./components/list-unidade"
import AdicionarUnidade from "./components/add-unidade"
import EditarUnidade from "./components/edit-unidade"

import Curso from "./components/list-curso"
import AdicionarCurso from "./components/add-curso"
import EditarCurso from "./components/edit-curso"

import Instrutor from "./components/list-instrutor"
import AdicionarInstrutor from "./components/add-instrutor"
import EditarInstrutor from "./components/edit-instrutor"

import Profissional from "./components/list-profissional"
import AdicionarProfissional from "./components/add-profissional"
import EditarProfissional from "./components/edit-profissional"

import Servico from "./components/list-servico"
import AdicionarServico from "./components/add-servico"
import EditarServico from "./components/edit-servico"

import AgendaInstrutor from "./components/add-agenda-instrutor"


class App extends Component {
  render() {
  
    return (
      <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={Login} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/dashboard"} component={Dashboard} />   
              <Route exact path="/usuarios" component={Usuario} />
              <Route exact path="/usuarios/adicionar" component={AdicionarUsuario} />
              <Route exact path="/usuarios/:id" component={EditarUsuario} />           
              <Route exact path="/unidades" component={Unidade} />
              <Route exact path="/unidades/adicionar" component={AdicionarUnidade} />
              <Route exact path="/unidades/:id" component={EditarUnidade} />
              <Route exact path="/cursos" component={Curso} />
              <Route exact path="/cursos/adicionar" component={AdicionarCurso} />
              <Route exact path="/cursos/:id" component={EditarCurso} />
              <Route exact path="/instrutores" component={Instrutor} />
              <Route exact path="/instrutores/adicionar" component={AdicionarInstrutor} />
              <Route exact path="/instrutores/:id" component={EditarInstrutor} />
              <Route exact path="/profissionais" component={Profissional} />
              <Route exact path="/profissionais/adicionar" component={AdicionarProfissional} />
              <Route exact path="/profissionais/:id" component={EditarProfissional} />
              <Route exact path="/servicos" component={Servico} />
              <Route exact path="/servicos/adicionar" component={AdicionarServico} />
              <Route exact path="/servicos/:id" component={EditarServico} />

              <Route exact path="/agendas/instrutores/:id" component={AgendaInstrutor} />


              
            </Switch>
          </div>

      </Router>
    )
  }
}

export default App;
