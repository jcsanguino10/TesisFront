import React, { Component } from 'react';
import VegaEmbed from 'vega-embed'

export default class VisualizacionLinea extends Component {
    constructor(props) {
        super(props);
        this.objetivo = React.createRef()
        this.state = {
            configuraciones: {
                "width": "container",
                "height": this.props.alto,
                "data": {
                    "values": this.props.values
                },
                "mark": {
                    "type": "line",
                    "point": true,
                    "tooltip": true
                },

                "encoding": {
                    "x": {
                        "field": this.props.xAxis,
                        "type": "temporal",
                        "title": null
                    },
                    "y": {
                        "field": this.props.yAxis,
                        "type": "quantitative",
                        "title": null
                    }
                }
            }
        }
    }
    componentDidMount() {
        var conf = this.state.configuraciones;
        VegaEmbed(this.objetivo.current , conf, { actions: false, theme: "fivethirtyeight", padding: { left: 20, top: 20, right: 20, bottom: 20 } })
    }
    render() {
        return (
            <div className="container-fluid col-12 px-0" ref = {this.objetivo}>
            </div>
        )
    }
}