import React, { Component } from 'react';
import './Tablero.css';
import Casilla from './Casilla';

class Tablero extends Component {
    render() {
        
    return (<div className="tablero">
        <Casilla></Casilla>
        
    </div>);
    
    }
}
export default Tablero;