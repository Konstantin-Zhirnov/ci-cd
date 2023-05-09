export type StateType = {
  user: string
  text: string
}

export type TodoType = {
  id: number
  title: string
  completed: boolean
  user: {
    name: string
    age: number
  }
}
