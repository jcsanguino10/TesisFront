import React, { Component } from 'react';
import VegaEmbed from 'vega-embed'

export default class VisualizacionLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configuraciones: {
                "width": "container",
                "height": window.innerHeight / 3,
                "data": {
                    "values": this.props.values
                },
                "mark": {
                    "type": "line",
                    "point": true,
                    "interpolate": "monotone",
                    "tooltip": true
                },

                "encoding": {
                    "x": {
                        "field": "date",
                        "type": "temporal",
                        "title": null
                    },
                    "y": {
                        "field": "price",
                        "type": "quantitative",
                        "title": null
                    }
                }
            }
        }
    }
    componentDidMount() {
        var conf = this.state.configuraciones;
        VegaEmbed('#visuLin', conf, { actions: false, theme: "fivethirtyeight", padding: { left: 20, top: 20, right: 20, bottom: 20 } })
    }
    render() {
        return (
            <div className="container-fluid col-12 px-0" id="visuLin">
            </div>
        )
    }
}