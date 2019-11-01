import React, { Component } from 'react';
import imagenGeneral from '../imagenes/general.jpg'

export default class informacionGeneral extends Component {
    render() {
      return (
        <div className="col-12 container-fluid text-center">
        <img
          src={imagenGeneral}
          alt="Logo de Sii-Cuidamos"
        />
      </div>
      );
    }
  }