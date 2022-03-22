import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeraUi from 'main/src/index'
import '../../packages/theme-chalk/src/index.less'
import './less/reset.less'

Vue.config.productionTip = false

Vue.use(HeraUi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
