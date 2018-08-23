import React, { Component } from 'react';

class Ejemplo extends Component {
    render() {
      //const lista2 = [1,2,3,4];
      const lista = [];
      //var numero = lista.length();
      var numero = 5;
      const elemento = <div>elemento</div>;
      
      for(let i = 0; i <= numero; i++)[
        //lista[i];
        lista.push(elemento)
      ]
      var x = function(){ console.log ("maciel") } //Funcion anonima
      console.log(x);
      var lista2 = lista.map(function (index){
        return index;
      });

      const todo = ["A","B","C"];
      const todoList = todo.map(untodo => {
        return <li>{untodo}</li>
      });

      return( 
          <div>
              <ul>{todoList}</ul>
              <div>{this.props.texto}</div>
              <div>{lista}</div>
              <div>
                {this.props.children}
                {this.props.children[0]}
                {this.props.children[1]}
              </div>
          </div>
      );
      //Javascript -- que es una funcion,

    }
  }

export default Ejemplo;