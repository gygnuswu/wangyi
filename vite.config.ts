import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
import { resolve } from 'path';

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  server: {
    host: '0.0.0.0', // 会映射多个域名地址
    port: 8000, // 默认起始端口号
    open: true, // 自动打开浏览器访问
    proxy: {
      '/app-dev': { // 代理所有以 '/app-dev'开头的请求路径
        // 后台接口地址
        target: 'http://gmall-h5-api.atguigu.cn',  //前端服务器地址
        changeOrigin: true,
        // 重写路径: 去掉路径中开头的'/dev-api'
        rewrite: (path: any) => path.replace(/^\/app-dev/, ''),
      },

      '/app-mian': { // 代理所有以 '/app-dev'开头的请求路径
        // 后台接口地址
        target: 'https://m.you.163.com',  //严选服务器地址
        changeOrigin: true,
        // 重写路径: 去掉路径中开头的'/dev-api'
        rewrite: (path: any) => path.replace(/^\/app-mian/, ''),
      },
    },
  },


})
