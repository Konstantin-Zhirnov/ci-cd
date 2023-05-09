import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/client'

import { TodoType } from '../../types'
import { ALL_TODOS } from '../../config'

import ApolloTodoItem from './ApolloTodoItem'
import { Circular, List } from '../../../../shared'

import classes from './ApolloTodoList.module.sass'

const ApolloTodoList: React.FC = React.memo(() => {
  const { loading, error, data } = useQuery(ALL_TODOS)

  const renderItem = (item: TodoType, index?: number) => (
    <ApolloTodoItem
      key={item.id}
      id={item.id}
      title={item.title}
      completed={item.completed}
      name={item.user.name}
      age={item.user.age}
      index={index || 0}
    />
  )

  if (loading) return <Circular />

  if (error) return <h2>Error...</h2>

  return (
    <>
      <motion.ul className={classes.container}>
        <List<TodoType> items={data.todos} renderItem={renderItem} />
      </motion.ul>
    </>
  )
})

export default ApolloTodoList
