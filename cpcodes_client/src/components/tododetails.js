import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTodoQuery } from '../queries/queries';

class TodoDetails extends Component {

    displayTodoDetails(){
        const { todo } = this.props.data;
        if(todo){
            return (
                <div>
                    <h2> {todo.desc }</h2>
                    <p>{ todo.complete.toString() }</p>
                    <p>{ todo.userId.id }</p>
                </div>
            );
        } else {
            return (
                <div>No Todo Selected</div>
            );
        }
    }

    render() {
      return (
  
        <div id="todo-details">
            { this.displayTodoDetails() }
        </div>
      );
    }
  }
  
  
  export default graphql(getTodoQuery, {
    options: (props) => {
      return {
        variables: {
          id: props.todoid
        }
      }
    }
  })(TodoDetails);