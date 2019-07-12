// 封装 axios
import axios from 'axios'
import Vue from 'vue'

const vue = new Vue()

// 接口限制请求时间
axios.defaults.timeout = 10000
// 基础接口
axios.defaults.baseURL = 'http://localhost:3000'
// 拦截器 数据发送前，数据返回前，进行一个拦截操作
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    // 当前接口请求有问题
    window.alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (err) => {
  window.alert('网络异常')
  return Promise.reject(err)
})

// 封装axios get方法
export function fetchGet(url,param) {
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:param
    })

    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })

    .catch(error => {
      reject(error)
    })
  })
}

export default {
  Login(params){
    return fetchGet('/login',params) 
  }
}