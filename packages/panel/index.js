import Panel from './src/panel'
import PanelContent from './src/panel-content'
import Panelheader from './src/panel-header'

Panel.install = function(Vue) {
  Vue.component(Panel.name, Panel)
  Vue.component(PanelContent.name, PanelContent)
  Vue.component(Panelheader.name, Panelheader)
}

export default Panel
