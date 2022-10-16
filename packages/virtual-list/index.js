import VirtualList from './src/main'

VirtualList.install = function(Vue) {
  Vue.component(VirtualList.name, VirtualList)
}

export default VirtualList
