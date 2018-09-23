const state = {
  userName: 'Rui.Leo',
  userName2: 'Leo2',
  userName3: 'RuiSiZheng'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substring(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName3 = params
  }
}
const actions = {
  updateAppName ({ commit, state, rootSate, dispatch }) {
    //
    dispatch('xxx', '') // 提交模块内的action
  },
  xxx () {
    //
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    //
  }
}
