var fs = require("fs");
var path = require("path");
var Components = require("../../components.json");
var themes = ["theme-chalk"];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, "../../packages/");

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach((theme) => {
  var isLess = theme !== "theme-default";
  // var indexContent = isLess ? '@import "./base.less";\n' : '@import "./base.css";\n';
  var indexContent = "";
  Components.forEach(function (key) {
    // if (['option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + (isLess ? ".less" : ".css");
    indexContent += '@import "./' + fileName + '";\n';
    var filePath = path.resolve(basepath, theme, "src", fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, "", "utf8");
      console.log(theme, " 创建遗漏的 ", fileName, " 文件");
    }
  });
  fs.writeFileSync(
    path.resolve(basepath, theme, "src", isLess ? "index.less" : "index.css"),
    indexContent
  );
});
