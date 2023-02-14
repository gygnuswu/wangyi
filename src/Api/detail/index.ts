// 这是详情页的数据
// 用的是尚品汇前台的数据
import request from '@/utils/http/index'
// 定义请求接口的枚举
enum Api {
  getDate = '/api/item',
  addData = '/api/cart/addToCart'
}
/**
 * 1.根据id获取详情页所有数据
 * @param id 
 * @returns 
 */
export const getListData = (id:number) => {
  return request.get(Api.getDate + `/${id}`)
}
/**
 * 2.将数据添加到购物车
 * @param skuId 
 * @param skuNum 
 * @returns 
 */
export const AddDataInfo = (skuId:number,skuNum:number) => {
  return request.post(Api.addData + `/${ skuId }/${ skuNum }`)
}