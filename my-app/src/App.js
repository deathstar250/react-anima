import React, { Component } from 'react'; 
import logo from './logo.svg'; 
import './App.css';
import Ejemplo from './components/ejemplo/ejemplo';

class App extends Component {
  render() {
    return (
      <Ejemplo texto="blablabla" >
        <h1>primero</h1>
        <h1>segundo</h1>
      </Ejemplo>
    );
  }
}

export default App;
