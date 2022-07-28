import React from 'react'
import { useQuery, useMutation } from '@apollo/client'

import { TodoType } from '../../../types/todos.type'
import { ALL_TODOS, UPDATE_TODO, DELETE_TODO } from '../../../apollo/todos'

import Circular from '../../../Components/Circular'
import List from '../../../Components/List'
import TotalCount from './TotalCount'
import TodoItem from './TodoItem'

import classes from './TodoList.module.sass'

const TodoList: React.FC = React.memo(() => {
  const { loading, error, data } = useQuery(ALL_TODOS)
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO)
  const [removeTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: ALL_TODOS }],
  })

  const renderItem = (item: TodoType) => (
    <TodoItem
      key={item.id}
      id={item.id}
      title={item.title}
      completed={item.completed}
      name={item.user.name}
      age={item.user.age}
      onToggle={toggleTodo}
      onDelete={removeTodo}
    />
  )

  if (loading) return <Circular />

  if (error || updateError || deleteError) return <h2>Error...</h2>

  return (
    <>
      <ul className={classes.TodoList}>
        <List<TodoType> items={data.todos} renderItem={renderItem} />
      </ul>

      <TotalCount />
    </>
  )
})

export default TodoList
