import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/element.js'
import lazyload from 'vue-lazyload'
import '../src/common/rem' // 移动端适配
import '../src/common/global.css' // 全局样式初始化
Vue.config.productionTip = false

Vue.use(lazyload, { error: 'http://img.zcool.cn/community/0176af5844caf4a8012060c87e987f.gif' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
