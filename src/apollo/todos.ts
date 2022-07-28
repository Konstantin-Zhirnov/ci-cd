import { gql } from '@apollo/client'

export const ALL_TODOS = gql(`
    query AllTodos {
      todos {
        id
        title
        completed
      }
    }
`)

export const ADD_TODO = gql(`
    mutation AddTodo($title: String) {
      addTodo(title: $title) {
        id
        title
        completed
      }
    }
`)

export const UPDATE_TODO = gql(`
    mutation UpdateTodo($id: ID, $completed: Boolean) {
      updateTodo(id: $id, completed: $completed) {
        id
        title
        completed
      }
    }
`)

export const DELETE_TODO = gql(`
    mutation DeleteTodo($id: ID) {
      deleteTodo(id: $id) {
        id
      }
    }
`)
