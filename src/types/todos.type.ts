export type TodoType = {
  id: number
  title: string
  user_id: number
  completed: boolean
}

export interface IVariables {
  variables: IVariablesData
}

interface IVariablesData {
  id: number
  completed?: boolean
}

export type VariablesFunctionType = (variables: IVariables) => void
