// 分类的请求接口
// 导入request
import requset from '@/utils/http/request'
// 定义请求地址的枚举
enum Api {
  // 1. 获取侧边栏数据
  GetSidebarData = 'item/cateList.json',
  // 2. 获取内容详情数据
  getData = 'item/cateList.json?__timestamp=1630131286110'
}

/**
 * 1. 获取侧边栏的数据
 * @returns 
 */
export const reqSidebarData = () => {
  return requset.get(Api.GetSidebarData);
}
/**
 * 2. 获取右侧内容数据
 * @param id 
 * @returns 
 */
export const reqData = (id:any) => {
  return requset.get(`item/cateList.json?__timestamp=1630131286110&categoryId=${id}`)
}
// 
/**
 * 3. 获取分类详情页的列表详情
 * @param id1 
 * @param id2 
 * @returns 
 */
export const GetCategoryListDetails = (ID: any, id: any) => {
  return requset.get<any, any>(`/item/list.json?__timestamp=1630133942864&categoryType=0&subCategoryId=${id}&categoryId=${ID}`)
}
