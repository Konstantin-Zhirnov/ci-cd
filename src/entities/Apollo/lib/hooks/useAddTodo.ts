import { useMutation } from '@apollo/client'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { getText, getUser, setText } from '../../model/slice'
import { ADD_TODO, ALL_TODOS } from '../../config'

export const useAddTodo = () => {
  const dispatch = useAppDispatch()
  const text = useAppSelector(getText)
  const user = useAppSelector(getUser)

  const [addTodo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const cacheObject = cache.readQuery({ query: ALL_TODOS })
      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [addTodo, ...(cacheObject as any).todos],
        },
      })
    },
  })

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          title: text,
          userId: Number(user),
        },
      })
      dispatch(setText(''))
    }
  }

  return { addTodo: handleAddTodo, error }
}
