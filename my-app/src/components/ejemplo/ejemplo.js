import React, { Component } from 'react';

class Ejemplo extends Component {
    render() {
      
      var lista2 = [1,2,3,4];

      console.log(lista2.map(x => elemento));

      //-->
      const lista = [];
      //var numero = lista.length();
      var numero = 5;
      const elemento = <div>elemento</div>;

      for(let i = 0; i <= numero; i++)[
        //lista[i];
        lista.push(elemento)
      ]
      /*var x = function(){ console.log ("maciel") } //Funcion anonima
      console.log(x);
      var lista2 = lista.map(function (index){
        return index;
      });*/

      const todo = ["A","B","C","D","E","F"];
      const todoList = todo.map(untodo => {
        return <li>{untodo}</li>
      });
      
      
      //-->

      var hacerfunc = function (unafuncion){
          unafuncion(); //esto nos dice que esta funcion solo va a tener como parametro una funcion
      }
      hacerfunc(function(){
        console.log(22) //estamos llamando a la funcion que recibe funciones como parmatros, como paramtro le pasamos este argumento
      });
      var funcionparametro = function (){
        console.log("funcion por parametro")
      }
      hacerfunc(funcionparametro); //en este caso seteamos la funcion anonima desde una variable

      //-->
      
      //Para que tomar funciones como argumentos? - La idea es que sean "cajas negras"
      //Map es una funcion de JS, map(); toma un array a cada elemento le aplicas la funcion que recibe como parametro
      //Map no sabe que funcion va a recibir, esta funcion va a aplicarselo a todos los elementos

      var array = [1,2,3] // el resultada obtenido debe ser [2,4,6]
      var funcionMap = array.map(function (x){
        return(x*2);
      });
      array.map(x => x*2); // funcion pasada a arrow function

      var funcionThis = function(){
        var that = this;
        array.map(function (){
          this
        })
        array.map(() => {
          this
        })
      }

      return( 
          <form>
            <fieldset>
              <legend>Pruebas:</legend>
              <div>
                  <div>{this.props.texto}</div>
                  <div>{lista}</div>
                  <div>
                    {this.props.children}
                    {this.props.children[0]}
                    {this.props.children[1]}
                  </div>x
              </div>
            </fieldset>
          </form>
      );
      //Javascript -- que es una funcion,

    }
  }

export default Ejemplo;