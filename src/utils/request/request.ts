import axios from 'axios'


const axiosImpl = axios.create({
  baseURL: '/api',
  timeout: 10000,
})



export default axiosImpl
