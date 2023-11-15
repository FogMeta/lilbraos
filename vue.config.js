'use strict'
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin') // gzip压缩
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i // gzip匹配文件规则
const BranchVersionWebpackPlugin = require('./webpack-plugin/branch-version-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')
const NOT_DEV = process.env.NODE_ENV !== 'development'

const globalConfig = require('./src/config/index.js')

const resolve = dir => path.join(__dirname, dir)
const addOptions = {
  preserveWhitespace: true
}

const externals = {
  "axios": "axios",
  'moment': 'moment',
  'qs': 'Qs',
  'web3': 'Web3',
  // 'echarts': 'echarts'
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'testnet' ? '' : '/',

  outputDir: process.env.VUE_APP_OUTPUTDIR,

  runtimeCompiler: true,

  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        // lessOptions: {
        modifyVars: {
          'bg-color': 'rgb(243, 243, 243)',
          'white-color': '#fff',
          'primary-color': 'rgba(0,0,0,0.87)',
          'primary-color-opacity': 'rgba(0,0,0,0.6)',
          'primary-color-opacity1': 'rgba(0, 0, 0, 0.24)',
          'primary-color-opacity2': 'rgba(0, 0, 0, 0.04)',
          'primary-color-opacity3': 'rgb(224, 224, 224)',
          'theme-color': 'rgba(72, 176, 255, 1)',
          'theme-color-opacity': 'rgba(72, 176, 255, 0.5)',
          'theme-color-opacity1': 'rgba(72, 176, 255, 0.8)',
          'theme-color-opacity2': 'rgba(72, 176, 255, 0.2)',
          'dot-color': 'rgb(234, 234, 240)',
          'dot-fusco-color': 'rgb(189, 189, 189)',
          'dot-fusco-color-hover': 'rgba(12, 11, 11, 0.12)',
          'grey-color': 'rgb(117, 117, 117)'
        }
        // },
      }
    }
  },

  configureWebpack: (config) => {
    config.name = globalConfig.baseTitle
    config.entry.app = ['babel-polyfill', './src/main.js'];
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true
          },
          output: {
            comments: false,
          }
        },
        sourceMap: false,
        parallel: true,
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      }),
      new webpack.DefinePlugin({
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false)
      }),
      AutoImport({
        resolvers: [ElementPlusResolver({
          exclude: new RegExp(/^(?!.*loading-directive).*$/)
        })]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ]
    Object.assign(config, {
      externals,
    })
    if (NOT_DEV) {
      config.mode = 'production';
      config.plugins = [...config.plugins, ...plugins];
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
      config.plugins.push(new BranchVersionWebpackPlugin());
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
      .set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
      .set('@public', resolve('public'));
    config.output.filename('[name].[hash].js').end();

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions = addOptions;
        return options;
      });
  },

  devServer: {
    port: 8080,
    open: true,
    // proxy: { 
    //   '/api': {
    //     target: 'http://18.221.71.211:5000/',
    //     ws: true,
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    // }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'zn',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}