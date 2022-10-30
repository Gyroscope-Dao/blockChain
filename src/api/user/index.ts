import request from '../../utils/request'

export const userLogin = async (username: string, password: string) => {
  const res = await request.post('/user/login', {
    username,
    password,
  })
  return res
}
