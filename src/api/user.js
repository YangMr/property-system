import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(userId) {
  return request({
    url: '/user/getInfo',
    method: 'get',
    params: {
      userId
    }
  })
}

export function logout() {
  return request({
    url: '/user/loginOut',
    method: 'POST'
  })
}
