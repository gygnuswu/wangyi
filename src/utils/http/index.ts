/**
 * 前台数据请求
 */
import axios from "axios"
// import NProgress from "nprogress"
import "nprogress/nprogress.css"

const ajax = axios.create({
  baseURL: "/app-dev"
})


//请求拦截器
ajax.interceptors.request.use((config) => {
  // Nprogress.start();

  return config
}, (err) => {
  // 通过组件，做一些信息提示
  return Promise.reject(new Error(err))
})
//响应拦截器
ajax.interceptors.response.use((res) => {
  console.log('响应拦截成功');
  // Nprogress.done();
  return res.data;
}, (err) => {
  // Nprogress.done();
  console.log('响应拦截失败');
  // 通过组件，做一些信息提示
  return Promise.reject(new Error(err))
})
export default ajax