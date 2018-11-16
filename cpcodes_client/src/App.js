import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


//components
import TodoList from './components/todolist';
import AddTodo from './components/addtodo';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div id="main">
          <h1>Cp's Todo List</h1>
          <TodoList />
          <AddTodo />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
