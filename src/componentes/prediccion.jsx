import React, { Component } from 'react';

export default class Prediccion extends Component {

    constructor()
    {
        super();
        this.ponerOpciones = this.ponerOpciones.bind(this);
    }
    ponerOpciones(cantidad)
    {
        let opciones = []
        for (let index = 1; index <= cantidad; index++) {
            opciones.push(
                <option>{index*2}</option>
            )
        }
        return opciones;
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="form-group">
                    <label>Numero de maquinas a desplegar</label>
                    <input type="number" className="form-control" min="1" placeholder="1" />
                </div>
                <div>
                    <label>Cantidad de RAM</label>
                    <select className="form-control">
                        <option selected>1</option>
                        {this.ponerOpciones(16)}
                    </select>
                </div>
            </div>
        )
    }
}