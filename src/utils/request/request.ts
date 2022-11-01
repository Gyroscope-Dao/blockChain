import axios from 'axios'
import addInterceptors from './interceptors'

const axiosImpl = axios.create({
  baseURL: '/api',
  timeout: 10000,
})
addInterceptors(axiosImpl)

export default axiosImpl
