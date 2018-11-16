import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTodosQuery } from '../queries/queries';

//components
import TodoDetails from './tododetails';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  displayTodos(){
    var data = this.props.data;
    if(data.loading){
      return(<div>loading todos</div>);
    } else {
      return data.todos.map(todo => {
        return(
          <li key={ todo.id } onClick = {(e) => {this.setState({selected: todo.id})}}> { todo.desc } </li>
        );
      })
    }
  }
  render() {
    return (

      <div id="todo-list">
          <h1>Cp's Todo List</h1>
          <ul id="todo-list">
            { this.displayTodos() }
          </ul>
          <TodoDetails todoid={ this.state.selected } />
      </div>
    );
  }
}


export default graphql(getTodosQuery)(TodoList);
