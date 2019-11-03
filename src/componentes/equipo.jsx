import React, { Component } from 'react';
import VisualizacionLinea from './visualizacionLinea';

export default class Equipo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: props.match.params.ip,
            consumo: 1023
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-1 mb-3">
                    <div className="col-4 p-0 mb-2">
                        <div className="card px-3">
                            <div className="card-body pb-0 pt-2 infoEquipo">
                                <div className="row">
                                    <strong>Equipo</strong> <p>: {this.state.ip}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-0 mb-2">
                        <div className="card px-3 mx-4">
                            <div className="card-body pb-0 pt-2 infoEquipo">
                                <div className="row">
                                    <strong>Sala</strong> <p>: Turing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-0 mb-2">
                        <div className="card px-3">
                            <div className="card-body pb-0 pt-2 infoEquipo">
                                <div className="row">
                                    <strong>Consumo</strong> <p>: 200 W/h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container col-6">
                        <div className="col-12 container-fluid card shadow">
                            <h3 className="p-2 tituloCard">Consumo de RAM </h3>
                            <div className="card-body">
                                <VisualizacionLinea xAxis="date" yAxis="uso" alto={window.innerHeight / 4} values={[
                                    { date: "2/11/2019 12:00", uso: "70" },
                                    { date: "2/11/2019 12:02", uso: "68" },
                                    { date: "2/11/2019 12:04", uso: "50" },
                                    { date: "2/11/2019 12:06", uso: "65" },
                                ]} />
                            </div>
                        </div>
                    </div>
                    <div className="container col-6">
                        <div className="col-12 container-fluid card shadow">
                            <h3 className="p-2 tituloCard">Consumo de Procesador </h3>
                            <div className="card-body">
                                <VisualizacionLinea xAxis="date" yAxis="uso" alto={window.innerHeight / 4} values={[
                                    { date: "2/11/2019 12:00", uso: "54" },
                                    { date: "2/11/2019 12:02", uso: "43" },
                                    { date: "2/11/2019 12:04", uso: "70" },
                                    { date: "2/11/2019 12:06", uso: "65" },
                                ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}