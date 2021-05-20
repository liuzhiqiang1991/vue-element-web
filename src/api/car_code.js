import request from '@/utils/request'

export function listCode(params) {
  return request({
    url: '/vue-element-admin/car_code/list',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: '/vue-element-admin/car_code/add',
    method: 'post',
    data
  })
}

export function update(user) {
  return request({
    url: '/vue-element-admin/car_code/update',
    method: 'post',
    data: user
  })
}

export function getCode(city) {
  return request({
    url: '/vue-element-admin/car_code/get',
    method: 'get',
    params: { city }
  })
}

export function deleteAreaCode(city) {
  return request({
    url: '/vue-element-admin/car_code/delete',
    method: 'get',
    params: { city }
  })
}
