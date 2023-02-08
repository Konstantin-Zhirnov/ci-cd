import axios from 'axios'

import $api from '../api'
import { apiConfig } from './index'
import { AuthResponseType, LogoutResponseType, UserType } from '../types/auth.type'

export const AuthorizationApi = {
  login(email: string, password: string): Promise<AuthResponseType> {
    return $api.post(apiConfig.login, { email, password }).then(({ data }) => data)
  },

  logout(): Promise<LogoutResponseType> {
    return $api.post(apiConfig.logout).then(({ data }) => data)
  },

  registration(email: string, password: string, name: any): Promise<AuthResponseType> {
    return $api.post(apiConfig.registration, { email, password, name }).then(({ data }) => data)
  },

  checkAuth(): Promise<AuthResponseType> {
    return axios.get(apiConfig.refresh, { withCredentials: true }).then(({ data }) => data)
  },

  activationEmail(link): Promise<UserType> {
    return axios.post(apiConfig.activationEmail, { link }).then(({ data }) => data)
  },
}
