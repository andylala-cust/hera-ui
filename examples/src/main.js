import Vue from 'vue'
import App from './App.vue'
import HeraUi from '../../src/index'
import '../../packages/theme-chalk/src/index.less'
import './less/reset.less'

Vue.config.productionTip = false

Vue.use(HeraUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
