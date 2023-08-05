import VerticalVirtualList from './src/main'

VerticalVirtualList.install = function(Vue) {
  Vue.component(VerticalVirtualList.name, VerticalVirtualList)
}

export default VerticalVirtualList
