import { gql } from 'apollo-boost';

const getTodosQuery = gql`
  {
    todos{
      desc
      id
    }
  }
`

const getUsersQuery = gql`
    {
        users{
            id
            name
        }
    }
`

export { getTodosQuery, getUsersQuery }