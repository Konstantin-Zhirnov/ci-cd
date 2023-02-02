import axios from 'axios'
import { AuthResponseType } from '../types/auth.type'

const BaseURL = 'https://jsonplaceholder.typicode.com'
const AuthURL = 'https://jwt-express-server.vercel.app/api'

export const apiConfig = {
  users: BaseURL + '/users',
  posts: BaseURL + '/posts',
  comments: BaseURL + '/comments',
  login: AuthURL + '/login',
  logout: AuthURL + '/logout',
  registration: AuthURL + '/registration',
  usersMongoDB: AuthURL + '/users',
  refresh: AuthURL + '/refresh',
  activationEmail: AuthURL + '/activate',
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
        .get<AuthResponseType>(apiConfig.refresh, { withCredentials: true })
        .then(({ data }) => localStorage.setItem('token', data.accessToken))
      return $api.request(originalRequest)
    }
  },
)

export default $api
