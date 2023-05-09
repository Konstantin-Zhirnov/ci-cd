import axios from 'axios'

import { $api, URL } from './config'
import { AuthResponseType, LogoutResponseType, UserType } from '../types'

export const AuthAPI = {
  login(email: string, password: string): Promise<AuthResponseType> {
    return $api.post(URL.login, { email, password }).then(({ data }) => data)
  },

  logout(): Promise<LogoutResponseType> {
    return $api.post(URL.logout).then(({ data }) => data)
  },

  registration(email: string, password: string, name: any): Promise<AuthResponseType> {
    return $api.post(URL.registration, { email, password, name }).then(({ data }) => data)
  },

  checkAuth(): Promise<AuthResponseType> {
    return axios.get(URL.refresh, { withCredentials: true }).then(({ data }) => data)
  },

  activationEmail(link): Promise<UserType> {
    return axios.post(URL.activationEmail, { link }).then(({ data }) => data)
  },
}
