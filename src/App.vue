<template>
  <div>
    <router-view />

    <TabBar v-show="$route.meta.hidden"></TabBar>
  </div>
</template>

<script lang="ts">

export default {
  name: "App",
}

</script>
<script lang="ts" setup>
import TabBar from "@/components/tabbar/index.vue"
</script>

<style lang="less" scoped>
.active {
  background-color: red;
}
</style>