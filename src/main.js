import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'
// 导入所有组件
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 自动按需引入组件 (推荐)
// 安装插件
// yarn add babel-plugin-import -D
// 接着你可以在代码中直接引入 Vant 组件

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
