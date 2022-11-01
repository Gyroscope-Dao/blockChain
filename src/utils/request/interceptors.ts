import { ElMessage } from 'element-plus'
import router from '../../router'
import { AxiosInstance } from 'axios'

const addInterceptors = (axiosImpl: AxiosInstance) => {
  axiosImpl.interceptors.response.use(
    (response) => {
      switch (response.data.code) {
        case 401:
          ElMessage({
            message: response.data.message,
            type: 'error',
          })
          localStorage.removeItem('token')
          router.push('/login')
          break
        case 404:
          if (response.data.message !== null) {
            ElMessage({
              message: response.data.message,
              type: 'error',
            })
          } else {
            ElMessage({
              message: '未知错误',
              type: 'error',
            })
          }
          break
        case 500:
          // 错误
          if (response.data.message !== null) {
            ElMessage({
              message: response.data.message,
              type: 'error',
            })
          } else {
            ElMessage({
              message: '未知错误',
              type: 'error',
            })
          }
          break
        default:
          return response.data
      }
      return response.data
    },
    (err) => {
      if (err.response.data.message) {
        ElMessage({
          message: err.response.data.message,
          type: 'error',
        })
        return Promise.reject(err.response.data.message) // 返回接口返回的错误信息
      } else {
        // 返回状态码不为200时候的错误处理
        ElMessage({
          message: err,
          type: 'error',
        })
        return Promise.resolve(err)
      }
    }
  )
}
export default addInterceptors
