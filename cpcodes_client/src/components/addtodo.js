import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getUsersQuery } from '../queries/queries';

class AddTodo extends Component {  

    render() {
      return (
        <div id="add-todo main">
            <form id="add-todo">
                <div className="field">
                    <label>New Todo:</label>
                    <input type="text" />
                    <button>+ (mk icn)</button>
                </div>
            </form>
        </div>
      );
    }
  }
  
  
  export default graphql(getUsersQuery)(AddTodo);