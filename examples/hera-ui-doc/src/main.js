import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeraUi from 'main/src/index'
import codeDemo from '@/components/common/codeDemo'
import 'main/packages/theme-chalk/src/index.less'
import './less/reset.less'
import VueHighlightJS from 'vue-highlightjs'
// import 'highlight.js/styles/color-brewer.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

Vue.use(HeraUi)
Vue.use(VueHighlightJS)
Vue.use(VueClipboard)

Vue.component('codeDemo', codeDemo)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
