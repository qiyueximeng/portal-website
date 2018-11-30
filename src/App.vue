<template>
  <el-container id="app" class="app">
    <el-header class="app__header">
      <div class="header__content">
        <div class="header__logo">LOGO</div>
        <el-menu
          class="header__menu"
          mode="horizontal"
          :default-active="$route.path"
          :router="true"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/production">产品与服务</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main class="app__main">
      <router-view class="main__content"></router-view>
    </el-main>
    <el-footer class="app__footer">
      <div class="footer__content">
        <span>版权所有：某某有限公司</span>
        <span>备案号：京ICP备2018xxxx号</span>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import './reset.scss';

.app {
  height: 100%;
  color: #303030;

  &__header {
    // border-bottom: 1px solid #DDD;
  }

  &__footer {
    background: #000;
    color: #FFF;
  }
}

.header {
  &__content {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }

  &__logo {
    width: 150px;
  }

  &__menu {
    flex: 1;
    border-bottom: none !important;
  }
}

.main {
  &__content {
    width: 1000px;
    margin: 0 auto;
  }
}

.footer {
  &__content {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
