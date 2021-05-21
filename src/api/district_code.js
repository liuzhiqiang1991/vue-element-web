import request from '@/utils/request'

export function listCode(params) {
  return request({
    url: '/vue-element-admin/district_code/list',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/district_code/add',
    method: 'post',
    data
  })
}

export function update(code) {
  return request({
    url: '/vue-element-admin/district_code/update',
    method: 'post',
    data: code
  })
}

export function getCode(code) {
  // alert(code)
  return request({
    url: '/vue-element-admin/district_code/get',
    method: 'get',
    params: { code }
  })
}

export function deleteAreaCode(code) {
  return request({
    url: '/vue-element-admin/district_code/delete',
    method: 'get',
    params: { code }
  })
}
