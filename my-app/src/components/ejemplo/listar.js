import React, { Component } from 'react';

class Listar extends Component {
    render() {
        const todo = ["A","B","C","D","E","F"];
        const todoList = todo.map(untodo => {
          return <li>{untodo}</li>
        });
        return (
            <div>
                <ul>{todoList}</ul>
            </div>
        );
    }
}
export default Listar;