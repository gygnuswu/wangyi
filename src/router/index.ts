import { createRouter, createWebHistory } from "vue-router";  // 解构出来才能使用
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),  //模式设置：括号不能丢
  routes,
})

export default router