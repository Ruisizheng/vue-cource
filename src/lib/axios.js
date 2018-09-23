import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (basUrl = baseURL) {
    this.basUrl = basUrl
    this.queue = {}
  }
  getInstanceConfig () {
    const config = {
      basUrl: this.basUrl,
      headers: {
        //
      }
    }
    console.log('请求的配置信息：' + config)
    return config
  }

  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 在发送请求之前做些什么 ：如 添加全局的loading
      // iview 里的 Spin.show()
      console.log('正在请求...' + config)
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      // 对请求错误做些什么
      console.log('请求出错...' + error)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log('服务器返回正常...' + res)
      delete this.queue[url]
      // 此处可对res 返回的信息加以处理如 ：
      const { code, state } = res // 此处的处理是仅显示 code 和 state
      return { code, state }
      // return res
    }, error => {
      console.log('服务器返回出错...' + error)
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  // 创建请求方法
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInstanceConfig(), options)
    // 跟实例添加拦截器
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
