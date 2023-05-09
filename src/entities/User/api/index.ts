import axios from 'axios'

import { UserType } from '../types'

const BaseURL = 'https://jsonplaceholder.typicode.com'

export const URL = {
  users: BaseURL + '/users',
}

export const UsersApi = {
  getUsers(): Promise<UserType[]> {
    return axios.get(URL.users).then(({ data }) => data)
  },
  getUser(id: number): Promise<UserType> {
    const url = `${URL.users}/${id}`
    return axios.get(url).then(({ data }) => data)
  },
}
