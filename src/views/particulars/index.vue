<template>
  <div class="particulars">
    <!-- 这是头部 -->
    <van-sticky>
      <div class="par-head">
      <van-icon name="wap-home-o" @click="$router.push('/')"/>
      <div class="head-title">网 易 严 选</div>
      <div>
        <van-icon name="search" @click="$router.push('/search')"/>
        <van-icon name="shopping-cart-o" @click="$router.push('/shopCart')"/>
      </div>
    </div>
    <!-- 这是导航栏 -->
      <div class="ItemNav">
        <van-tabs v-model:active="active" @click-tab="change(active)">
          <van-tab v-for="item in set" :key="item.id" :name="item.name" :title="item.name"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <!-- 这是内容 -->
    <div class="main-item">
      <!-- 这是顶部文字 -->
      <div class="header" v-show="list.category?.frontName">
        <p>{{ list.category?.frontName }}</p>
      </div>
      <!-- 这是内容列表 -->
      <div class="itemList">
        <div class="item-image" v-for="Details in list.itemList" :key="Details.id">
          <van-image  lazy-load :src="Details.listPicUrl" @click="$router.push('/detail')" alt=""></van-image>
          <div class="name">
            <img class="preLogo" src="https://yanxuan.nosdn.127.net/static-union/16698631101bcf18.png" alt=""
              style="height: 15px; width: 15px; vertical-align: -3PX;">
            <span style="font-size:14px">{{ Details.name }}</span><br>
            <span style="color:red; font-size:20px; font-weight: bold;">￥{{ Details.retailPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">更多内容敬请期待</div>
  </div>
  <!-- 回到顶部 -->
  <van-back-top />
</template>

<script lang="ts">
export default {
  name: 'Particulars'
}
</script>

<script lang="ts" setup>
import { GetCategoryListDetails } from '@/Api/categroy';
import { onMounted, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { Image as VanImage, BackTop } from 'vant';
let route = useRoute();
const active = ref<any>();
const set = ref<any>([]);
const list = ref<any>([])
// console.log(route.query);
let ID = ref<any>(route.query.ID);  //侧边栏id
let id = ref<any>(route.query.i);   //选中内容id


// 导航栏数据的获取
let change = async (active: any) => {
  let categoryFilter = set.value.filter((item: any) => {
    return item.name == active
  })
  // console.log(categoryFilter[0].id);
  let result = await GetCategoryListDetails(ID.value, categoryFilter[0].id);
  let categoryList = result.data.categoryItems

  list.value = categoryList
  id.value = categoryFilter[0].id

}
// list中数据的获取
let ListDetailsInfo = async (ID: any, id: any) => {
  // 根据侧边栏的id和当前点击商品的id获取数据
  let result = await GetCategoryListDetails(ID.value, id.value);
  let categoryDetails = result.data.categoryL2List
  let categoryList = result.data.categoryItems
  // console.log(categoryList);
  set.value = categoryDetails
  list.value = categoryList
}

onMounted(async () => {
  ListDetailsInfo(ID, id);  //获取列表数据
  await nextTick(() => {
    active.value = route.query.cname; //id.value
  })
  // console.log(route.query, 1111111111111);
});
</script>

<style lang="less">
:root:root {
  --van-tabs-bottom-bar-color: #DD252C;
}
</style>

<style lang="less" scoped>
.particulars {
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;


  .par-head {
    display: flex;
    justify-content: space-between;
    padding: 0 8px 0 12px;
    height: 43px;
    align-items: center;
    background-color: #FAFAFA;
    position: sticky;
    top: 0;
    .head-title {
      flex: 1;
      font-size: 18px;
      font-weight: 600;
      margin: auto;
      text-align: center;
    }
    .van-icon-search {
      margin-right: 15px;
    }
  }

  .ItemNav {
    background-color: #FAFAFA;
    border-bottom: 1px solid #ccc;
    :deep(.van-tab--active) {
      color: #DD252C;
      // font-weight: normal;
    }
  }

  .main-item {
    background-color: #fff;
    // overflow: auto;
    .header {
      height: 40px;
      // line-height: 55px;
      text-align: center;
      font-size: 15px;

    }

    .itemList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 10px 10px 0;
      padding-bottom: 5px;

      .item-image {
        width: 172px;
        height: 260px;

        // margin: 0 10px;
        :deep(.van-image__img) {
          width: 172px;
          height: 172px;
          border-radius: 10px;
          margin-right: 3px;
          .name {
            display: flex;
            vertical-align: auto;
          }
        }
      }
    }
  }
  .footer {
    background-color: #eeeeee;
    color: #999999; 
    font-size: 14px; 
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}

</style>