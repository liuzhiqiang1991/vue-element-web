import request from '@/utils/request'

export function listCode(params) {
  return request({
    url: '/vue-element-admin/phone_code/list',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/phone_code/add',
    method: 'post',
    data
  })
}

export function update(user) {
  return request({
    url: '/vue-element-admin/phone_code/update',
    method: 'post',
    data: user
  })
}

export function getCode(code) {
  // alert(code)
  return request({
    url: '/vue-element-admin/phone_code/get',
    method: 'get',
    params: { code }
  })
}

export function deleteAreaCode(code) {
  return request({
    url: '/vue-element-admin/phone_code/delete',
    method: 'get',
    params: { code }
  })
}
