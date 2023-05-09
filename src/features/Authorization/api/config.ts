import axios from 'axios'
import { AuthResponseType } from '../types'

const BaseURL = 'https://jwt-express-server.vercel.app/api'

export const URL = {
  login: BaseURL + '/login',
  logout: BaseURL + '/logout',
  registration: BaseURL + '/registration',
  usersMongoDB: BaseURL + '/users',
  refresh: BaseURL + '/refresh',
  activationEmail: BaseURL + '/activate',
}

const $api = axios.create({
  withCredentials: true,
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      await axios
        .get<AuthResponseType>(URL.refresh, { withCredentials: true })
        .then(({ data }) => localStorage.setItem('token', data.accessToken))
      return $api.request(originalRequest)
    }
    throw error
  },
)

export { $api }
