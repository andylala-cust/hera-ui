/* Automatically generated by './build/bin/build-entry.js' */
import Icon from '../packages/icon/index.js'
import Panel from '../packages/panel/index.js'
import PanelContent from '../packages/panel-content/index.js'
import PanelHeader from '../packages/panel-header/index.js'
import VirtualList from '../packages/virtual-list/index.js'

const components = [
  Icon,
  Panel,
  PanelContent,
  PanelHeader,
  VirtualList
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
    install,
    Icon,
  Panel,
  PanelContent,
  PanelHeader,
  VirtualList
}
