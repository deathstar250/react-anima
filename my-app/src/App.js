import React, { Component } from 'react'; 
import logo from './logo.svg'; 
import './App.css';
import Ejemplo from './components/ejemplo/ejemplo';
import Listar from './components/ejemplo/listar';
import Tablero from './components/snake/Tablero';
import Casilla from './components/snake/Casilla';

class App extends Component {
  render() {
    return (
      <div>
        <Tablero>
        </Tablero>
      </div>
      
    );
  }
}

export default App;
