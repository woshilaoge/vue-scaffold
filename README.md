## Vue-cli@3.x 版本 - 移动版本

## Status: 3.4.1(`new`)

> 当前稳定版本，[文档地址](https://cli.vuejs.org/)

```bash
  npm i

  npm run dev

  or

  yarn

  yarn dev
```

## 代码提交检查

> 关闭代码检查，删除 package.json 以下代码即可

```json
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
```

> 或者 修改为

```json
  "gitHooks": {
    "no-pre-commit": "lint-staged"
  }
```

```js
  "serve": "vue-cli-service serve --open"
  // 不需要自动浏览器打开页面 去掉--open 即可
```

## [vue.config.js](https://github.com/vuejs/vue-cli/blob/dev/docs/config.md)

> 精简的脚手架配置文件，类似 create-react-app 配置文件

> CSS [样式处理](https://github.com/vuejs/vue-cli/blob/dev/docs/css.md) 因为 npm 依赖包安装了 less-loader 默认支持 less
> 若是需要使用 sass npm install -D sass-loader node-sass

### Px2Rem

> [Auto px2rem](https://marketplace.visualstudio.com/items?itemName=aleafo.autopx2rem) vscode 插件

> 配置 User Settings

```json
"cssrem.sassFuncFirst": false, // 默认rem 放前
"cssrem.rootFontSize": 16 // 根节点字号 (可根据项目自行调整)
```

### vue.config.js

> 这里可以设置 webpack 的配置

```js
configureWebpack: config => {
  console.log(config)
}
```

### 使用 webpack-bundle-analyzer 插件

```bash
npm i webpack-bundle-analyzer -D
```

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  // 使用 webpack-bundle-analyzer 插件分析打包结果
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
}
```

### 按需引入配置

> 以 mint-ui 为示例

```bash
npm install babel-plugin-component -D
```

> babel plugins 配置 ，在.babelrc 文件 或者 package.json 等文件

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
```

```js
import { Button, Cell } from 'mint-ui'

// to

var button = require('components/lib/button')
require('components/lib/button/style.css')
```

```js
"autoprefixer": {
  "browsers": [
    "last 2 version",
    "iOS >= 8"
  ]
}
==> browserslist
```

```js
chainWebpack: config => {
  config
    .plugin('optimize-css')
    .tap(args => (Object.assign(args[0].cssnanoOptions.preset[1], { normalizeUrl: false }), args))
}
```

##### 引用额外字体的路径设置

> 因为 vuecli3 的问题，在 3.3 以上版本修改为 [publicPath](https://cli.vuejs.org/zh/config/#publicpath)
> 兼容目前方案 < 3.3 版本时

```js
config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => ((options.publicPath = '/www/linglong'), opti
```

[vscode ](https://3.cn/cC3T1e3)

> vuter

[nodejs](https://npm.taobao.org/mirrors/node/)

> 建议 8.x

### ChangeLog

`2019-03-08`

- 升级 CLI 至 3.4.1
- CLI baseUrl 配置 更新为 `publicPath`
- 升级 pettier 至 1.16.x 版本 ，摸平 npm 、yarn 装包带来的问题
- 升级 lint-staged 至 8.1.5，支持更灵活的配置，支持 ignore 选项，
- lint-staged 默认对进行 warning 选项的异常自动处理 `vue-cli-service lint`

```json
{
  "linters": {
    "src/**/*.{js,vue}": ["vue-cli-service lint", "git add"]
  },
  "ignore": ["*.min.js"]
}
```

- 默认设置 vetur html/template 格式化工具 `prettyhtml` ==> `prettier`，因此重新设置了`printWidth`

```json
{
  "printWidth": 120
}
```

- 修复目前目录命名问题 小写命名

```bash
- views
 - home
 - error.vue
```

- 默认设置 `disableHostCheck:true`，便于 本地配置 host 调试接口 如 `127.0.0.1 id.test.xxx.com`
- 默认添加 `webpack-scp-upload-plugin` 插件，配合 `scripts` `build:id`构建完成自动更新到 xxx.xxx.com

```bash
# 执行
npm run build:id

# 访问
http://xxx.xxx.com/www/vue-cli3.x

#省去
1. 新项目需要手动去 id服务器创建目录
2. 每次 build后 执行 scripts 进行文件上传
3. 输入密码
```
