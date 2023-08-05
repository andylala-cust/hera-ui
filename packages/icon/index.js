import Icon from "./src/main.jsx";

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
