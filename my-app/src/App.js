import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ejemplo from './components/ejemplo/ejemplo';
import Listar from './components/ejemplo/listar';
import Tablero from './components/snake/Tablero';
import Casilla from './components/snake/Casilla';
import Perfil from './components/props-childs/Perfil';

class App extends Component {
  render() {
    var nombre = "maciel";
    nombre += " como estas";
    var numero = 2;
    numero += 2;

    return (
      <div>
        <Perfil nombre={nombre}/>
        <Perfil nombre={numero}/>
        <Tablero>
        </Tablero>
      </div>

    );
  }
}

export default App;
