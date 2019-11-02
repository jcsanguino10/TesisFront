import React, {Component} from 'react';
import VisualizacionLinea from './visualizacionLinea';

export default class Equipo extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip : props.match.params.ip
        }
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(
            <div className="container-fluid">
                <VisualizacionLinea xAxis="date" yAxis= "uso" alto={window.innerHeight/4} values={[
                {date:"2/11/2019 12:00" , uso: "70" },
                {date:"2/11/2019 12:02" , uso: "68" },
                {date:"2/11/2019 12:04" , uso: "50" },
                {date:"2/11/2019 12:06" , uso: "65" },
                ]}/>
                <VisualizacionLinea xAxis="date" yAxis= "uso" alto={window.innerHeight/4} values={[
                {date:"2/11/2019 12:00" , uso: "54" },
                {date:"2/11/2019 12:02" , uso: "43" },
                {date:"2/11/2019 12:04" , uso: "70" },
                {date:"2/11/2019 12:06" , uso: "65" },
                ]}/>
            </div>
        )
    }
}