import React, { Component } from 'react';
import VisualizacionLinea from './visualizacionLinea'
import VisualizacionBarra from './visualizacionBarras'

export default class informacionGeneral extends Component {
  constructor() {
    super();
    this.state =
      {
        ConsumoActual: 1000
      }
  }
  render() {
    return (
      <div className="container-fluid">        
        <div className="row">
          <div className="col-10 ">
            <div className="card shadow mb-3">
              <h3 className="p-3 tituloCard">Consumo de energia por sala</h3>
              <div className="card-body">
                <div className="col-12">
                  <VisualizacionBarra values={[{ "sala": "waira1", "consumo": 1944 }, { "sala": "waira2", "consumo": 8523 }, { "sala": "turing", "consumo": 1934 }]
                  } />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 align-self-center">
            <div className="card shadow mb-3">
              <div className="card-body align-self-center py-5">
                <h1> {this.state.ConsumoActual} W/h</h1>
                <h6 className="text-right">Total</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 container-fluid card shadow">
          <h3 className="p-3 tituloCard">Consumo de energia </h3>
          <div className="card-body">
            <div className="col-12">
              <VisualizacionLinea values={[{ "price": 3772, "date": "10/27/2019" },
              { "price": 3483, "date": "5/31/2019" },
              { "price": 1814, "date": "2/6/2019" },
              { "price": 4732, "date": "2/21/2019" },
              { "price": 4821, "date": "8/30/2019" },
              { "price": 8701, "date": "12/23/2018" },
              { "price": 8789, "date": "1/22/2019" },
              { "price": 3994, "date": "3/11/2019" },
              { "price": 5611, "date": "4/21/2019" },
              { "price": 1597, "date": "10/26/2019" },
              { "price": 6267, "date": "9/13/2019" },
              { "price": 3868, "date": "6/10/2019" },
              { "price": 3315, "date": "8/26/2019" },
              { "price": 5930, "date": "7/26/2019" },
              { "price": 6044, "date": "10/22/2019" },
              { "price": 8361, "date": "5/7/2019" },
              { "price": 5917, "date": "9/7/2019" },
              { "price": 4896, "date": "10/18/2019" },
              { "price": 2204, "date": "11/29/2018" },
              { "price": 6058, "date": "2/8/2019" },
              { "price": 4015, "date": "7/16/2019" },
              { "price": 1166, "date": "1/3/2019" },
              { "price": 3579, "date": "8/22/2019" },
              { "price": 8051, "date": "9/12/2019" },
              { "price": 7702, "date": "4/28/2019" },
              { "price": 4654, "date": "11/22/2018" },
              { "price": 6636, "date": "10/19/2019" },
              { "price": 4352, "date": "8/7/2019" },
              { "price": 7478, "date": "6/24/2019" },
              { "price": 3368, "date": "7/11/2019" },
              { "price": 2758, "date": "4/4/2019" },
              { "price": 5534, "date": "8/30/2019" },
              { "price": 9976, "date": "1/27/2019" },
              { "price": 5409, "date": "12/18/2018" },
              { "price": 8912, "date": "12/23/2018" },
              { "price": 8001, "date": "9/14/2019" },
              { "price": 8407, "date": "10/27/2019" },
              { "price": 3460, "date": "8/26/2019" },
              { "price": 4227, "date": "9/11/2019" },
              { "price": 1234, "date": "3/10/2019" },
              { "price": 9611, "date": "1/3/2019" },
              { "price": 5714, "date": "4/8/2019" },
              { "price": 9365, "date": "10/25/2019" },
              { "price": 4399, "date": "4/8/2019" },
              { "price": 9616, "date": "2/18/2019" },
              { "price": 4764, "date": "9/16/2019" },
              { "price": 3776, "date": "9/24/2019" },
              { "price": 4534, "date": "10/14/2019" },
              { "price": 8956, "date": "1/19/2019" },
              { "price": 8178, "date": "7/16/2019" },
              { "price": 9027, "date": "10/21/2019" },
              { "price": 6652, "date": "5/15/2019" },
              { "price": 6514, "date": "5/8/2019" },
              { "price": 2948, "date": "3/6/2019" },
              { "price": 4228, "date": "5/7/2019" },
              { "price": 9346, "date": "6/25/2019" },
              { "price": 9647, "date": "10/17/2019" },
              { "price": 3075, "date": "2/22/2019" },
              { "price": 9652, "date": "11/16/2018" },
              { "price": 3481, "date": "8/10/2019" },
              { "price": 9897, "date": "2/27/2019" },
              { "price": 3997, "date": "11/4/2018" },
              { "price": 2480, "date": "2/6/2019" },
              { "price": 1425, "date": "2/16/2019" },
              { "price": 2913, "date": "1/8/2019" },
              { "price": 6329, "date": "10/21/2019" },
              { "price": 5434, "date": "8/5/2019" },
              { "price": 2797, "date": "11/13/2018" },
              { "price": 8402, "date": "7/4/2019" },
              { "price": 1974, "date": "4/14/2019" },
              { "price": 4629, "date": "5/4/2019" },
              { "price": 6284, "date": "9/4/2019" },
              { "price": 6445, "date": "8/10/2019" },
              { "price": 7251, "date": "7/30/2019" },
              { "price": 7361, "date": "12/19/2018" },
              { "price": 1351, "date": "1/19/2019" },
              { "price": 1792, "date": "6/17/2019" },
              { "price": 2049, "date": "7/20/2019" },
              { "price": 8944, "date": "9/16/2019" },
              { "price": 6864, "date": "6/25/2019" },
              { "price": 6438, "date": "8/31/2019" },
              { "price": 8803, "date": "10/6/2019" },
              { "price": 6811, "date": "2/16/2019" },
              { "price": 8215, "date": "2/12/2019" },
              { "price": 1778, "date": "2/1/2019" },
              { "price": 9995, "date": "11/16/2018" },
              { "price": 9204, "date": "3/15/2019" },
              { "price": 6307, "date": "10/3/2019" },
              { "price": 5066, "date": "6/10/2019" },
              { "price": 4001, "date": "5/13/2019" },
              { "price": 3753, "date": "3/19/2019" },
              { "price": 7867, "date": "1/26/2019" },
              { "price": 3119, "date": "8/2/2019" },
              { "price": 8493, "date": "11/28/2018" },
              { "price": 3097, "date": "3/17/2019" },
              { "price": 1751, "date": "9/18/2019" },
              { "price": 5315, "date": "9/7/2019" },
              { "price": 1444, "date": "9/20/2019" },
              { "price": 2938, "date": "6/22/2019" },
              { "price": 2825, "date": "9/28/2019" }]
              } />
            </div>
          </div>
        </div>

      </div>
    );
  }
}