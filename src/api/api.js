import axios from 'axios'

const baseURL = 'http://localhost:4000'

const instance = axios.create()

instance.defaults.baseURL = baseURL

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['x-access-token'] = token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log('x-access-token', response.headers['x-access-token'])
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)





export default instance