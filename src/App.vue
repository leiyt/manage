<template>
  <div id="app">
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <!-- 导航栏 -->
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏 -->
          <left></left>
        </el-aside>
        <el-main>
          <!-- Body -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 登录页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import header from "./components/Header.vue";
import left from "./components/Left.vue";

export default {
  components: {
    headerNav: header,
    left: left
  }
};
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
.el-header{
  padding: 0;
}
</style>
