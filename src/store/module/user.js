const state = {
  userName: 'Rui.Leo',
  userName2: 'Leo2'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substring(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
