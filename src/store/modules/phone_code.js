import { add, update } from '@/api/phone_code'

const actions = {

  add({ commit }, userInfo) {
    const { province, city, code } = userInfo
    return new Promise((resolve, reject) => {
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
    // alert(province)
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
