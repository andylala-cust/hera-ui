var path = require("path");
var nodeExternals = require("webpack-node-externals");
var Components = require("../components.json");

var externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`hera-ui/packages/${key}`] = `hera-ui/lib/${key}`;
});

externals["hera-ui/src/locale"] = "hera-ui/lib/locale";

externals = [
  Object.assign(
    {
      vue: "vue",
    },
    externals
  ),
  nodeExternals(),
];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, "../src"),
  packages: path.resolve(__dirname, "../packages"),
  examples: path.resolve(__dirname, "../examples"),
  "hera-ui": path.resolve(__dirname, "../"),
};

exports.vue = {
  root: "Vue",
  commonjs: "vue",
  commonjs2: "vue",
  amd: "vue",
};
