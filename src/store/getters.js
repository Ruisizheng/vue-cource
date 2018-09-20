const getters = {
  appNameWithVersion: (state) => {
    return `${state.appName}v3.0` // <-ES6的模板语法， 或者  state.appName + 'v2.0'
  }
}

export default getters
