import React, { Component } from 'react';
import VegaEmbed from 'vega-embed'

export default class Visualizacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configuraciones : this.props.configuraciones,
            widthViz : 200,
            heightViz : 200
        }
    }
    componentDidMount() {
        var conf = this.state.configuraciones;
        window.addEventListener('resize',() =>{
            console.log("resize!")
            this.setState({
                widthViz : window.innerWidth,
                heightViz : window.innerHeight
            })
        })
        VegaEmbed('#visu', conf, { width: this.state.widthViz, height: this.state.heightViz, actions: false })
    }

    componentDidUpdate() {
        var conf = this.state.configuraciones;
        VegaEmbed('#visu', conf, { width: this.state.widthViz, height: this.state.heightViz, actions: false })
    }
    render() {
        return (
            <div id="visu">
            </div>
        )
    }
}