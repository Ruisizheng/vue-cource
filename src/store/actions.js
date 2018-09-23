import { getAppName } from '@/api/api'
const actions = {
  // 方法一.Promise 对象的处理方法
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     //  commit('SET_APP_NAME2', res.info.appName)   1.正常取值法
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME2', appName) // 2.通过ES6中的解构赋值获取值
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // 方法二. 通过ES8 里的Async 进行异步操作
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME2', appName)
    } catch (err) {
      console.log(err)
    }
  }

}
export default actions
