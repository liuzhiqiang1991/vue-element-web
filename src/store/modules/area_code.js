import { add, update } from '@/api/area_code' // 去掉logout

const actions = {

  add({ commit }, userInfo) {
    const { province, city, code } = userInfo
    return new Promise((resolve, reject) => {
      // alert(username.trim() + '  test' )
      add({ province: province.trim(), city: city.trim(), code: code.trim() }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user edit: 编辑用户
  update({ commit }, userInfo) {
    // alert('a')
    const { province, city, code } = userInfo
    // alert(username)
    return new Promise((resolve, reject) => {
      update({ province: province.trim(), city: city.trim(), code: code.trim() }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  actions
}
