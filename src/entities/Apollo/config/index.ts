import { gql } from '@apollo/client'

export const ALL_TODOS = gql(`
    query AllTodos {
      todos {
        id
        title
        completed
        user {
            name
            age
        }
      }
    }
`)

export const ADD_TODO = gql(`
    mutation AddTodo($title: String, $userId: Int) {
      addTodo(title: $title, userId: $userId) {
        id
        title
        completed
        user {
            name
            age
        }
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
