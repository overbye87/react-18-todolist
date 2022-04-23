import axios from 'axios'

const baseURL = 'http://localhost:4000'
const token = localStorage.getItem('token')

const instance = axios.create();

instance.defaults.baseURL = baseURL;
if (token) {
  instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

export default instance