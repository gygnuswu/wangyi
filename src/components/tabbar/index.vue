<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>

      <van-tabbar-item replace to="/categroy" icon="apps-o">分类</van-tabbar-item>

      <van-tabbar-item replace to="/buy" icon="goods-collect-o">值得买</van-tabbar-item>

      <van-tabbar-item replace to="/shopCart" icon="cart-o">购物车</van-tabbar-item>

      <van-tabbar-item replace to="/user" icon="user-circle-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue'

export default {
  naem: 'TabBar',
  setup() {
    const active = ref(0);
    return { active };
  }
}
</script>

<style lang="less" scoped>

</style>