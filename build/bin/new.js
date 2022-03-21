const clc = require("cli-color")

process.on('exit', () => {
    console.log(clc.green('done'))
})

if (!process.argv[2]) {
    console.error(clc.red('[组件名]必填 - Please enter new component name'))
    process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
const Files = [
    {
        filename: 'index.js',
        content: `import ${ComponentName} from './src/main'

${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`
    },
    {
        filename: 'src/main.vue',
        content: `<template>
    <div class="he-${componentname}"></div>
</template>

<script>
export default {
    name: 'He${ComponentName}'
}
</script>`
    },
    {
        filename: path.join('../../packages/theme-chalk/src', `${componentname}.less`),
        content: `@import "common/var";`
    }
]

// 添加到 components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
    console.error(clc.yellow(`${componentname} 已存在`))
    process.exit(1)
}
componentsFile[componentname] = `./packages/${componentname}/index.js`
fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
    .end('\n')

// 添加到 index.scss
const lessPath = path.join(__dirname, '../../packages/theme-chalk/src/index.less')
const lessImportText = `${fs.readFileSync(lessPath)}@import "./${componentname}.less";`
fileSave(lessPath)
    .write(lessImportText, 'utf8')
    .end('\n')

// 创建 package
Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content, 'utf8')
        .end('\n')
})
