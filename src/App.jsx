import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import InformacionGeneral from './componentes/informacionGeneral';
import Sala from './componentes/sala';
import Prediccion from './componentes/prediccion';
import Equipo from './componentes/equipo';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container-fluid mx-0 px-0 col-2 list-group sideBar">
          <span className="py-5"></span>
          <NavLink exact to={"/"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active"> Informe General</NavLink>
          <NavLink exact to={"/sala/turing"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active">Turing </NavLink>
          <NavLink exact to={"/sala/waira-1"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active">Waira 1</NavLink>
          <NavLink exact to={"/sala/waira-2"} className="list-group-item-transparent list-group-item-action py-2 pl-4 " activeClassName="active">Waira 2</NavLink>
        </div>
        <div className="container-fluid mx-0 px-0 col-10" >
          <nav className="navbar navbar-expand-lg navbar-light shadow mb-5 bg-white rounded">
            <span className="navbar-brand mb-0 h1 mr-5">Monitor</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <NavLink exact to={"/despliegue"} type="button" className="btn btn-info" >Desplegar maquinas</NavLink>
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path={"/"} component={() => <InformacionGeneral />}></Route>
              <Route exact path={"/sala/turing"} component={() => <Sala sala="Turing"/>}></Route>
              <Route exact path={"/sala/waira-1"} component={() => <Sala sala="Waira1"/>}></Route>
              <Route exact path={"/sala/waira-2"} component={() => <Sala sala="Waira2"/>}></Route>
              <Route exact path={"/despliegue"} component={() => <Prediccion />}></Route>
              <Route path={"/equipo/ip/:ip"} render={(props) => <Equipo {...props} />}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
