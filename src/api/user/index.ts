import request from '../../utils/request'

type loginType = {
  code: number
  message: string
  data: {
    name: string
    position: string
    menus: string
    token: string
  }
}

export const userLogin = async (username: string, password: string): Promise<loginType> => {
  return await request.post('/user/login', {
    username,
    password,
  })
}
