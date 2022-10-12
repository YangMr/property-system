import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserIdKey = 'userId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUserId(userId) {
  return Cookies.set(UserIdKey, userId)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeUserId() {
  return Cookies.remove(UserIdKey)
}
