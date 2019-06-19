const WebpackScpUploadPlugin = require('webpack-scp-upload-plugin')
const url = `/www/vue-cli3.x/`
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `//xx.xxx.com${url}` : '', // cdn 需要配置的路径 '//www.jd.com/'
  productionSourceMap: false,
  lintOnSave: true, // 是否自动开启eslint 检查
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      Object.assign(config.optimization.minimizer[0].options.terserOptions.compress, { drop_console: true })
    }
    config.plugins.push(
      new WebpackScpUploadPlugin({
        host: '192.168.177.101',
        password: 'B0$7zDXH',
        local: 'dist',
        path: `/home${url}`
      })
    )
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['src/assets/css/public/mixins-mobile.less']
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
