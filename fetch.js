import 'whatwg-fetch'
/* eslint-disable */
/**
 * get请求
 * @param  {string} url   api地址
 * @param  {bool} base 是否带基础参数
 * @param  {string} query query参数
 * @param  {function} succ   成功后的回掉函数
 * @param  {function} error  异常后的回掉函数
 */
 import {local} from './storage'
 const debug = process.env.NODE_ENV !== 'production'
 export const get = ({url, base, data, succ, error}) => {
  if (!navigator.onLine) {
    alert('网络貌似不给力,请检查您的网络')
    return false
  }
  let query = ''
  for (var key in data) {
    query += `${key}=${data[key]}&`
  }
  var _url = ''
  if (url.indexOf('?') !== -1) {
    _url = `${url}&${query}`
  } else {
    _url = `${url}?${query}`
  }
  if (debug) {
    console.log('请求的地址是：' + _url)
  }
  fetch(_url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      if (error) {
        error()
      } else {
        alert('服务器错误,请稍后再试')
      }
      return Promise.reject(new Error(res.status))
    }
  })
  .then((json) => {
    if (json.message === '未登录') {
      local.setItem('loacl_href', window.location.hash)
      window.location.hash = '#/'
    }
    if (debug) {
      console.log(json)
    }
    succ(json)
  })
  .catch((ex) => {
    console.log(ex)
  })
}

/**
 * post请求
 * @param  {string} url   api地址
 * @param  {bool} base 是否带基础参数(默认是带基础参数)
 * @param  {json} data json数据
 * @param  {function} succ   成功后的回掉函数
 * @param  {function} error  异常后的回掉函数
 */
 export const post = ({url, base, data, succ, error}) => {
  if (!navigator.onLine) {
    alert('网络貌似不给力,请检查您的网络')
    return false
  }
  if (!data) {
    data = {}
  }
  let query = ''
  if (debug) {
    console.log('请求地址:' + url)
  }
  for (var key in data) {
    query += `${key}=${data[key]}&`
  }
  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: query})
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      if (error) {
        error()
      } else {
        alert('服务器错误,请稍后再试')
      }
      return Promise.reject(new Error(res.status))
    }
  })
  .then((json) => {
    if (json.message === '未登录') {
      local.setItem('loacl_href', window.location.hash)
      window.location.hash = '#/'
    }
    if (debug) {
      console.log(json)
    }
    succ(json)
  })
  .catch((ex) => {
    console.log(ex)
  })
}
