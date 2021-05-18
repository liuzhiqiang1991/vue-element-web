import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/user/add',
    method: 'post',
    data
  })
}

export function listUser(params) {
  return request({
    url: '/vue-element-admin/user/list',
    method: 'get',
    params
  })
}
