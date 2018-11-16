import { gql } from 'apollo-boost';

const getTodosQuery = gql`
  {
    todos{
      desc
      id
    }
  }
`

const getTodoQuery = gql`
    query($id: ID){
      todo(id: $id){
        id
        desc
        complete
      }
    }
`

//query variables help carry over the correct value to the query/server
const addTodoMutation = gql`
    mutation($desc: String!, $complete: Boolean!){
      addTodo(desc: $desc, complete: $complete){
        desc
        complete
        id
      }
    }

`

export { getTodoQuery, getTodosQuery, addTodoMutation }