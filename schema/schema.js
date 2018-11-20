//define types
//define relationships between types
//define root queries

const graphql = require('graphql');
const _ = require('lodash');
const Todo = require('../models/todo');
const User = require('../models/user');
const TodoList = require('../models/todolist');


const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQlDate
} = graphql;
//define types
//create GraphQL schema that the GraphQL middleware understands
//helps overcome reference errors
const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        desc: {type: GraphQLString},
        complete: {type: GraphQLBoolean},
        userId: {
            type: UserType,
            resolve(parent, args){
                //return _.find(users, {id: parent.userId});
                return User.findById(parent.userId);
            }
        },
        listId: {
            type: TodoListType,
            resolve(parent, args){
                return TodoList.findById(parent.listId);
            }
        }
    })
});
 const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        lName: {type: GraphQLString},
        email: {type: GraphQLString},
        pass: {type: GraphQLString},
    })
});
const TodoListType = new GraphQLObjectType({
    name: 'TodoList',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        userId: {
            type: UserType,
            resolve(parent, args){
                //return _.find(users, { id: parent.userId});
                return User.findById(parent.userId);
            }
        }
    })
});

//define root queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        todo: {
            type: TodoType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db / other source
                //return _.find(todos, {id: args.id});
                return Todo.findById(args.id);
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                //return _.find(users, {id: args.id});
                return User.findById(args.id);
            }
        },
        todolist: {
            type: TodoListType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
               // return _.find(todolists, {id: args.id});
               return TodoList.findById(args.id);
            }
        },
        todos: {
            type: new GraphQLList(TodoType),
            resolve(parent, args){
               // return todos;
               return Todo.find();
            }
        },
        todolists: {
            type: new GraphQLList(TodoListType),
            resolve(parent, args){
               // return todolists;
               return TodoList.find();
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                //return users;
                return User.find();
            }
        }
    }
});

//mutations create, update, and destroy data
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                lName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                pass: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parents, args){
                let user = new User({
                    name: args.name,
                    lName: args.lName,
                    email: args.email,
                    pass: args.pass
                });
                return user.save();
            }
        },
        addTodo: {
            type: TodoType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                desc: {type: new GraphQLNonNull(GraphQLString)},
                complete: {type: GraphQLBoolean},
                userId: {type: new GraphQLNonNull(GraphQLID)},
                listId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parents, args){
                let todo = new Todo({
                    title: args.title,
                    desc: args.desc,
                    complete: args.complete,
                    userId: args.userId,
                    listId: args.listId
                });
                return todo.save();
                }
            },
        addTodoList: {
            type: TodoListType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parents, args){
                let todolist = new TodoList({
                    title: args.title,
                    userId: args.userId
                });
                return todolist.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
