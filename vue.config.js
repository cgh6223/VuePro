const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir);
};


const env = process.env.NODE_ENV
let target = process.env.VUE_APP_URL // development和production环境是不同的

// const cdn = {
//   // 开发环境
//   dev: {
//     css: [],
//     js: []
//   },
//   // 生产环境
//   build: {
//     css: [
//       'https://cdn.bootcss.com/element-ui/2.11.1/theme-chalk/index.css',
//       'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
//     ],
//     js: [
//       'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
//       'https://cdn.bootcss.com/vue-router/3.1.2/vue-router.min.js',
//       'https://cdn.bootcss.com/vuex/2.3.1/vuex.min.js',
//       'https://cdn.bootcss.com/axios/0.19.0/axios.min.js',
//       'https://cdn.bootcss.com/vue-i18n/8.13.0/vue-i18n.min.js',
//       'https://cdn.bootcss.com/element-ui/2.11.1/index.js',
//       'https://cdn.bootcss.com/echarts/3.8.5/echarts.min.js',
//       'https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js',
//       'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
//       'https://cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js'
//     ]
//   }
// }

module.exports = {
  publicPath: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  // chainWebpack: (config) => {
  //   config.entry.app = ['./src/main.js']
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('cps', resolve('src/components'))
  //   // 关闭npm run build之后，This can impact web performance 警告
  //   config.performance
  //     .set('hints', false)
  //   // 移除 prefetch 插件
  //   config.plugins.delete("prefetch");
  //   // 移除 preload 插件
  //   config.plugins.delete('preload');
  //   // 压缩代码
  //   config.optimization.minimize(true);
  //   // 分割代码
  //   config.optimization.splitChunks({
  //     chunks: 'all'
  //   })

  //   // set svg-sprite-loader
  //   // config.module
  //   //   .rule('svg')
  //   //   .exclude.add(resolve('src/icons'))
  //   //   .end()
  //   // config.module
  //   //   .rule('icons')
  //   //   .test(/\.svg$/)
  //   //   .include.add(resolve('src/icons'))
  //   //   .end()
  //   //   .use('svg-sprite-loader')
  //   //   .loader('svg-sprite-loader')
  //   //   .options({
  //   //     symbolId: 'icon-[name]'
  //   //   })
  //   //   .end()


  //   // 对图片进行压缩处理
  //   // config.module
  //   // .rule('images')
  //   // .use('image-webpack-loader')
  //   // .loader('image-webpack-loader')
  //   // .options({
  //   //     disable: true, // webpack@2.x and newer
  //   //     quality: '65-80',
  //   //     speed: 4
  //   // })
  //   // .end()
  //   // 项目文件大小分析
  //   // config.plugin('webpack-bundle-analyzer')
  //   // .use(new BundleAnalyzerPlugin({
  //   //   openAnalyzer: false,   // 是否打开默认浏览器
  //   //   analyzerPort:8777
  //   // }))

  //   // 对vue-cli内部的 webpack 配置进行更细粒度的修改。
  //   // 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       if (process.env.NODE_ENV === 'production') {
  //         args[0].cdn = cdn.build
  //       }
  //       if (process.env.NODE_ENV === 'development') {
  //         args[0].cdn = cdn.dev
  //       }
  //       return args
  //     })


  // },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        } // 别名配置
      }
    })
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jquery": "jquery"
    //   })
    // ]

  },
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))

    //注意 store 和 router 没必要配置

  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {} // 这里的选项会传递给 postcss-loader
    } // css预设器配置项
    // modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: true,//process.platform === 'darwin',
    host: '0.0.0.0', // 允许外部ip访问
    port: 9527, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'http://wx.gygkzh.com/home/',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/capi': {
        target: 'http://182.43.223.185:8080/hdpmwork',
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        pathRewrite: {
          '^/capi': ''
        }
      }
    } // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {}
}
