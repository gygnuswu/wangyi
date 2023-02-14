<template>
  <div class="categroy">
    <!-- 搜索商品 -->
    <van-sticky>
      <div class="categroy-seach">
        <!-- 点击搜索商品按钮跳往搜索页面 -->
        <van-button type="primary" @click="ToSeach"><van-icon name="search" size="1em"/>搜索商品，共123183款好物</van-button>
      </div>
    </van-sticky>
    <!-- 分类内容 -->
    <div class="categroy-content">
      <!-- 侧边栏 -->
      <van-sticky :offset-top="46">
        <van-sidebar v-model="active">
          <!--  v-for="side in sidebarList"  -->
          <van-sidebar-item :title="side.name" v-for="side in sidebarList" :key="side.id" @click="changIndex(side.id)"></van-sidebar-item>
        </van-sidebar>
      </van-sticky>
      <!-- 内容 -->
      <div class="contentItem">
        <!-- 图片 -->
        <van-image
          lazy-load
          width="264"
          height="96"
          :src="imageurl"
        />
        <!-- 内容 -->
        <div class="Itemlist" v-for="item in ContentData" :key="item.id">
          <div :class="{'Itemlist-title':item.name}">{{ item.name }}</div>
          <van-grid square :gutter="10">
            <van-grid-item v-for="cate in item.categoryList" :key="cate.id" @click="Toparticulars(cate , cate.id)">
              <van-image :src="cate.wapBannerUrl"/>
              <div class="grid-title">{{ cate.name }}</div>
            </van-grid-item>
          </van-grid>
        </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Categroy'
}
</script>

<script lang="ts" setup>
import { reqData, reqSidebarData} from '@/Api/categroy';
import { Button ,Icon, Sidebar, SidebarItem,Image as VanImage, Grid, GridItem } from 'vant';
import { onMounted, ref, watch } from 'vue';
import router from '@/router';
const active = ref(0);
const sidebarList = ref([]);//这是侧边栏数组
const id = ref<any>(11);  //id数据
const imageurl = ref();//图片数据
const ContentData = ref([]);
// 1.获取侧边栏数据
const getSideBarList = async () => {
  let res = await reqSidebarData();
  // console.log(res.data);
  sidebarList.value = res.data.categoryL1List
}
// 2.添加点击事件将当前id存储
const changIndex = (i:number) => {
  id.value = i;
}
// 3.获取广告图片和列表内容数据
const getData = async (newValue:any) => {
  let res = await reqData(newValue);
  // console.log(res.data.currentCategory.bannerList[0].picUrl);
  //  3.1 获取广告图片
  imageurl.value = res.data.currentCategory.bannerList[0].picUrl;
  // 3.2 获取列表内容数据
  // console.log(res.data.categoryGroupList);
  ContentData.value = res.data.categoryGroupList;
}
// 4.点击搜索跳转到搜索页面
const ToSeach = () =>{
  router.push({
    path: '/search'
  })
}

// 5.点击内容，进入分类详情页
const Toparticulars = (cate:any,i:any) => {
  const ID = id.value
  console.log(ID);
  
  // 跳转到并携带参数
  router.push({
    path:'/categroy/particulars',
    query: {
      ID,
      i,
      cname: cate.name
    }
  })
}
onMounted(()=>{
  getSideBarList();
})
// 监听id，获取不同的数据
watch(id,(newValue,oldValue)=>{
  // console.log(id.value);
  if(newValue === undefined){
    getData(oldValue)
  } else {
    getData(newValue);
  }
 
},{immediate:true})
</script>

<style lang="less">
:root:root {
  --van-sidebar-selected-border-color: #AB2B2B;
  --van-sidebar-selected-border-width: 3px;
  --van-sidebar-selected-border-height: 25px;
}
</style>

<style lang="less" scoped>

.van-sidebar-item--select {
  font-weight:normal;
  color: #AB2B2B;
 }
 :deep(.van-grid-item__content ){
  padding: 0;
 }
.categroy {
  width: 100%;
  // 搜索商品
  .categroy-seach {
    width: 100%;
    height: 45px;
    background-color: white;
    .van-button--primary {
      border: none;
      background: #EDEDED;
      color:#666666;
      height: 65%;
      width: 90%;
      margin: 0 19px;
      .van-icon {
        margin-right: 6px;
      }
    }
  }
  // 分类内容
  .categroy-content {
    display: flex;
    margin-top: 1px;
    // overflow: auto;
    // 侧边栏
    .van-sidebar {
      // height: 100%;
      background-color: #fff;
      overflow: auto;
      .van-sidebar-item {
        background-color: #fff;
        height: 50px;
        padding:16px 12px 12px;
      }
    }
    // 内容主体
    .contentItem {
      flex: 1;
      margin-left:1px;
      background-color: #fff;
      padding: 10px;
      overflow: auto;
      :deep(.van-image) {
        background-color: #eee;
        width: 100% !important;
        height: 2.56rem !important;
        .van-image__img {
          width: 100%;
          height:96px
        }
      }
      .Itemlist {
        margin-top: 20px;
        .Itemlist-title {
          font-size: 14px;
          font-weight: 600;
          height: 30px;
          line-height: 30px;
          border-bottom: 1px solid #E5E5E5;
        }
        .van-grid {
        margin-top: 10px;
        :deep(.van-grid-item ){
          width: 100%;
          height: 108px;
          flex-basis: 32% !important;
          .van-image {
            background-color: #fff;
            width: 72px;
            height: 72px;
            .van-image__img {
              width: 100%;
              height: 72px;
            }
          }
        }
        .grid-title {
          font-size: 12px;
          height: 30px;
          line-height: 30px;
          // width: 100%;
          overflow: hidden;
        }
      }
      }
    }
  }
}
</style>