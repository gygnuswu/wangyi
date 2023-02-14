import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'amfe-flexible'
import pinia from './store'

//底部导航栏：
import { Tabbar, TabbarItem } from 'vant';

//引入路由：
import router from './router'
import { Lazyload } from 'vant';
const app = createApp(App)


app.use(pinia)    //注册pinia

app.use(Tabbar)
app.use(TabbarItem);

app.use(router)
// 注册图片懒加载
app.use(Lazyload);
// 注册时可以配置额外的选项
app.use(Lazyload, {
  lazyComponent: true,
});
app.mount('#app')