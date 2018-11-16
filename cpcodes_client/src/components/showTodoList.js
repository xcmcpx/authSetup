import React, { Component } from 'react';
import TodoList from './todolist';
import AddTodo from './addtodo';

class ShowTodoList extends Component {


    render() {
      return (
        <div id="showTodo">
          <TodoList />
          <AddTodo />
        </div>
      );
    }
  }
  
  
  export default ShowTodoList;