import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {  getTodosQuery, addTodoMutation } from '../queries/queries';

class AddTodo extends Component {  
    constructor(props){
        super(props);

        this.state = {
            desc: "",
            complete: false,
            userId: "",
            listId: ""
        };

    }

    //pass variables to query
    submitForm(e){
        e.preventDefault();
        this.props.addTodoMutation({
            variables: {
                desc: this.state.desc,
                complete: false,
                // userId: "5beefe2801ae629c98a2d75a",
                // listId: "5beefef5fe9ff8ac08fe55ae"
            },
            refetchQueries: [
                {query: getTodosQuery}
            ]
        });
    }
    render() {
      return (
        <div id="add-todo">
            <form id="add-todo" onSubmit= { this.submitForm.bind(this) }>
                <div className="field">
                    <label>New Todo:</label>
                    <input type="text" onChange={(e)=> this.setState({ desc: e.target.value })} />
                    <input type="text" onChange={(e)=> this.setState({ desc: e.target.value })} />
                    <input type="text" onChange={(e)=> this.setState({ desc: e.target.value })} />
                    <button>+</button>
                </div>
            </form>
        </div>
      );
    }
  }
  
  
  export default compose(
    graphql(addTodoMutation, {name: "addTodoMutation"})
  )(AddTodo);