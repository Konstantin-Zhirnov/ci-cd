export type TodoType = {
  id: number
  title: string
  completed: boolean
  user: {
    name: string
    age: number
  }
}

export interface IVariables {
  variables: IVariablesData
}

interface IVariablesData {
  id: number
  completed?: boolean
}

export type VariablesFunctionType = (variables: IVariables) => void
