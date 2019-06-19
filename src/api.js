/**
 * Servie Api By axios
 * @author: xiaoxian
 */
import axios from 'axios'
import router from './router'

// 接口配置
export const HOST = '//weapi.jd.com'

/**
 * 跳转、重定向
 */
const loadPage = (url, reject) => {
  if (reject) {
    return reject(url)
  }
  router.replace(url)
}

const handlerResult = (resolve, reject, result, isNeedReject) => {
  switch (result.errno) {
    case 0:
      resolve(result.data)
      break
    case 505: // 此状态时，表示活动下线，跳转只京东主页
      window.location.href = '//www.jd.com'
      break
    default:
      isNeedReject
        ? reject(result) // 不抛出处理，直接跳转到错误页
        : loadPage(`/error`)
  }
}
/**
 * axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
 * axios.defaults.withCredentials = true
 */
const ajax = (url, type, options, isNeedReject, others = {}) => {
  return new Promise((resolve, reject) => {
    console.log(`${url} 请求数据，参数=>`, JSON.stringify(options))
    axios({
      ...others,
      method: type,
      url: HOST + url,
      params: type === 'get' ? options : null,
      data: type !== 'get' ? options : null
    })
      .then(result => handlerResult(resolve, reject, result.data, isNeedReject)) //isNeedReject
      .catch(() => loadPage(`/error`))
  })
}

export default {
  async get(url, options, isNeedReject) {
    return await ajax(url, 'get', options, isNeedReject)
  },
  async post(url, options, isNeedReject) {
    return await ajax(url, 'post', options, isNeedReject)
  }
}
