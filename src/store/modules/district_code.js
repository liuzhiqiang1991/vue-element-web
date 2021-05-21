import { add, update } from '@/api/district_code'

const actions = {

  add({ commit }, userInfo) {
    const { code, name, parent, code_level } = userInfo
    return new Promise((resolve, reject) => {
      add({ code: code.trim(), name: name.trim(), parent: parent.trim(), code_level: code_level.trim() }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user edit: 编辑用户
  update({ commit }, userInfo) {
    // alert('a')
    const { code, name, parent, code_level } = userInfo
    // alert(province)
    return new Promise((resolve, reject) => {
      update({ code: code.trim(), name: name.trim(), parent: parent.trim(), code_level: code_level.trim() }).then(response => {
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
