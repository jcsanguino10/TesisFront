import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sala extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sala: this.props.sala
        }
        this.cargarEquipos = this.cargarEquipos.bind(this);
        this.filaEquipos = this.filaEquipos.bind(this);
    }
    cargarEquipos() {
        let resp = [];
        if (this.state.sala === "Turing") {
            for (let index = 0; index < 7; index++) {
                resp.push(
                    <div className="container-fluid row justify-content-center">
                        {this.filaEquipos(6)}
                    </div>
                )
            }
        }
        else if (this.state.sala === "Waira1") {

        }
        else {

        }
        return resp;
    }

    filaEquipos(filas) {
        let resp = []
        for (let index = 0; index < filas; index++) {
            resp.push(
                <Link type="buttom" className="btn" to={"/equipo/ip/" + "120.032.231.495"}>
                    <i className="fas fa-desktop fa-3x"></i>
                    <p className="ip my-0">120.032.231.495</p>
                </Link>
            )
        }
        return resp;
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow">
                            <h3 className="card-title p-3">{this.state.sala}</h3>
                            <div className="card-body">
                                <div className="container-fluid">
                                    {this.cargarEquipos()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}