import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTodosQuery } from '../queries/queries';

class TodoList extends Component {

  displayTodos(){
    var data = this.props.data;
    if(data.loading){
      return(<div>loading todos</div>);
    } else {
      return data.todos.map(todo => {
        return(
          <li key={ todo.id }> { todo.desc } </li>
        );
      })
    }
  }
  render() {
    return (

      <div id="todo-list main">
          <ul id="todo-list">
            { this.displayTodos() }
          </ul>
      </div>
    );
  }
}


export default graphql(getTodosQuery)(TodoList);
