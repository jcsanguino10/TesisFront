import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import InformacionGeneral from './componentes/informacionGeneral';
import SalaTuring from './componentes/salaTuring';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container-fluid mx-0 px-0 col-2 list-group sideBar">
          <span className="py-5"></span>
          <NavLink exact to={"/informacionGeneral"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active"> Informe General</NavLink>
          <NavLink exact to={"/sala/turing"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active">Turing </NavLink>
          <NavLink exact to={"/sala/waira-1"} className="list-group-item-transparent list-group-item-action py-2 pl-4" activeClassName="active">Waira 1</NavLink>
          <NavLink exact to={"/sala/waira-2"} className="list-group-item-transparent list-group-item-action py-2 pl-4 " activeClassName="active">Waira 2</NavLink>
        </div>
        <div className="container-fluid mx-0 px-0 col-10 contenido" >
          <nav className="navbar navbar-light shadow mb-5 bg-white rounded">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path={"/informacionGeneral"} component={() => <InformacionGeneral/>}></Route>
              <Route exact path={"/sala/turing"} component={() => <SalaTuring/>}></Route>
              <Route exact path={"/sala/waira-1"} component={() => <InformacionGeneral/>}></Route>
              <Route exact path={"/sala/waira-2"} component={() => <InformacionGeneral/>}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
