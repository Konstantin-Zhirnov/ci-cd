export type AuthorizationStateType = {
  isAuth: boolean
  message: string
  user: UserType
}

export type UserType = {
  email: string
  isActivated: boolean
  id: string
  name: string
}

export type AuthResponseType = {
  accessToken: string
  refreshToken: string
  user: UserType
}

export type LogoutResponseType = {
  acknowledged: boolean
  deletedCount: number
}

export type RegistrationType = Record<'email' | 'password' | 'name', 'string'>

export type LoginType = Omit<RegistrationType, 'name'>
