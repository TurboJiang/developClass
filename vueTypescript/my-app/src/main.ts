import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vue router钩子函数:做vue的权限操作 常用于登陆
router.beforeEach((to, from, next) => {//next中间键
  if(to.meta.title) {
    document.title = to.meta.title
  }
  // if(document.cookie = '') {
  //   // location href ''
  //   document.title = to.meta.title
  // }
  next()
})