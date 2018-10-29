<template>
  <div class="side-bar">
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      background-color="#2d3a4b"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router=router>
      <el-menu-item index="/layout/home">
          首页
      </el-menu-item>
      <el-submenu index="admin">
        <div slot="title">
          管理员管理
        </div>
        <el-menu-item index="adminUser" class="nav-item">
          管理员列表
        </el-menu-item>
        <el-menu-item index="adminAdd" class="nav-item">
          添加管理员
        </el-menu-item>
      </el-submenu>
      <el-submenu index="news">
        <div slot="title">
          新闻管理
        </div>
        <el-menu-item index="news" class="nav-item">
          新闻列表
        </el-menu-item>
        <el-menu-item index="newsAdd" class="nav-item">
          添加新闻
        </el-menu-item>
      </el-submenu>
      <el-submenu index="swiper">
        <div slot="title">
          轮播图管理
        </div>
        <el-menu-item index="swiper" class="nav-item">
          轮播图列表
        </el-menu-item>
        <el-menu-item index="swiperAdd" class="nav-item">
          添加轮播图
        </el-menu-item>
      </el-submenu>
      <el-submenu index="topic">
        <div slot="title">
          讨论管理
        </div>
        <el-menu-item index="topic" class="nav-item">
          讨论列表
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      router:true
    }
  }
};
</script>

<style scoped lang="scss">
.side-bar {
  width: 200px;
  background-color: #2d3a4b;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  /deep/{
      .el-menu-vertical-demo{
        border-right:none;
      }
    }
    .nav-item {
      background: #1f2d3d !important;
    }
}
</style>