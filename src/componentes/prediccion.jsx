import React, { Component } from 'react';

export default class Prediccion extends Component {

    constructor() {
        super();
        this.state = {
            numeroMaquinas: 1,
            cantidadRAM: 1,
            velocidadProcesador: 1,
            resultado: null
        }
        this.ponerOpciones = this.ponerOpciones.bind(this);
        this.realizarPrediccion = this.realizarPrediccion.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resultadoPrediccion = this.resultadoPrediccion.bind(this);
    }

    realizarPrediccion() {
        if(this.state.resultado === null)
        {
            this.setState({
                resultado : []
            })
        }
    }
    resultadoPrediccion() {
        let res = [];
        console.log(this.state.resultado);
        if (this.state.resultado === null) {
            res.push(
                <div className="alert alert-secondary my-4" role="alert">
                    Introduce los recursos para tu maquina virtual y calcula el costo de su despliegue
                </div>
            )
        }
        else {
            res.push(
                <div className="container my-4 pl-0">
                    <div className="card shadow">
                        <div className="card-body my-2">
                            <div className="row">
                                <h3 className="card-title col-11">Turing</h3>
                                <div className="col-1 row justify-content-end">
                                    <button className="btn btn-light btn-sm">
                                        <i className="fas fa-th p-0 m-0"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="card-text">Se desplegarian 2 maquinas en: <strong>192.230.320</strong></p>
                        </div>
                    </div>
                </div>
            )
        }
        return res;
    }
    ponerOpciones(cantidad) {
        let opciones = []
        for (let index = 1; index <= cantidad; index++) {
            opciones.push(
                <option value={index * 2}>{index * 2}</option>
            )
        }
        return opciones;
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container px-4">
                <div className="form-group col-12 pl-0">
                    <label>Numero de maquinas a desplegar</label>
                    <input type="number" className="form-control" name="numeroMaquinas" min="1" value={this.state.numeroMaquinas} onChange={this.handleInputChange} />
                </div>
                <div className="row col-12 pl-0">
                    <label className="col-4">Cantidad de RAM</label>
                    <label className="col-4">Velocidad de procesador</label>
                </div>
                <div className="row col-12 pl-0">
                    <div className="col-4">
                        <select className="form-control" name="cantidadRAM" value={this.state.cantidadRAM} onChange={this.handleInputChange}>
                            {this.ponerOpciones(16)}
                        </select>
                    </div>
                    <div className="col-4">
                        <select className="form-control" name="velocidadProcesador" value={this.state.velocidadProcesador} onChange={this.handleInputChange}>
                            {this.ponerOpciones(2)}
                        </select>
                    </div>
                    <div className="col-3 offset-1 row justify-content-end" >
                        <button type="button" className="btn btn-success btn-block" onClick={()=>{this.realizarPrediccion()}}> Calcular despliegue </button>
                    </div>
                </div>
                {this.resultadoPrediccion()}
            </div>
        )
    }
}