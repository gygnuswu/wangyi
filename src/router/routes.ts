
//路由表
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      hidden: true  //是否显示底部导航
    }
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('@/views/buy/index.vue'),
    meta: {
      title: '值得买',
      hidden: true  //是否显示底部导航
    }
  },
  {
    path: '/categroy/particulars',
    name: 'particulars',
    component: () => import('@/views/particulars/index.vue'),
    meta: {
      title: '分类详情',
      hidden: false  //是否显示底部导航
    }
  },
  {
    path: '/categroy/',
    name: 'categroy',
    component: () => import('@/views/categroy/index.vue'),
    meta: {
      title: '分类',
      hidden: true  //是否显示底部导航
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/index.vue'),
    meta: {
      title: '详情',
      hidden: false  //是否显示底部导航
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true  //是否显示底部导航
    }
  },

  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index.vue'),
    meta: {
      title: '支付',
      hidden: false  //是否显示底部导航
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index.vue'),
    meta: {
      title: '搜索',
      hidden: false  //是否显示底部导航
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import('@/views/shopCart/index.vue'),
    meta: {
      title: '购物车',
      hidden: true  //是否显示底部导航
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue'),
    meta: {
      title: '个人',
      hidden: true  //是否显示底部导航
    }
  },


]

export default routes