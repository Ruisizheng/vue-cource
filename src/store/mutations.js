
import Vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params.appName
  },
  SET_APP_NAME2 (state, params) {
    state.appName2 = params
  },
  SET_APP_VERSION (state) { // 给state 添加新的属性
    Vue.set(state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}
export default mutations
