import axios from 'axios'

import $api from '../api'

import { apiConfig } from './index'
import { UsersMongoDBType, UserType } from '../types/users.type'

export const UsersApi = {
  getUsers(): Promise<UserType[]> {
    return axios.get(apiConfig.users).then(({ data }) => data)
  },
  getUser(id: number): Promise<UserType> {
    const url = `${apiConfig.users}/${id}`
    return axios.get(url).then(({ data }) => data)
  },
  getAllUsersMongoDB(): Promise<UsersMongoDBType[]> {
    return $api.get(apiConfig.usersMongoDB).then(({ data }) => data)
  },
}
