import React, { Component } from 'react';
import VegaEmbed from 'vega-embed'

export default class VisualizacionBarra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configuraciones: {
                "width": "container",
                "height": window.innerHeight / 12,
                "data": {
                    "values": this.props.values
                },
                "mark": {
                    "type": "bar",
                    "tooltip": true
                },

                "encoding": {
                    "x": {
                        "field": "consumo",
                        "type": "quantitative",
                        "title": null
                    },
                    "y": {
                        "field": "sala",
                        "type": "nominal",
                        "title": null
                    }
                }
            }
        }
    }
    componentDidMount() {
        var conf = this.state.configuraciones;
        VegaEmbed('#visuBar', conf, { actions: false, theme: "fivethirtyeight", padding: { left: 20, top: 20, right: 20, bottom: 20 } })
    }
    render() {
        return (
            <div className="container-fluid col-12 px-0" id="visuBar">
            </div>
        )
    }
}