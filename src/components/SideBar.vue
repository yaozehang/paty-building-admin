<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#2d3a4b"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router=router>
      <el-menu-item index="/layout/home">
          首页
      </el-menu-item>
      <el-submenu index="admin-manage">
        <div slot="title">
          管理员管理
        </div>
        <el-menu-item index="/layout/adminUser" class="nav-item">
          管理员列表
        </el-menu-item>
        <el-menu-item index="/layout/adminAdd" class="nav-item">
          添加管理员
        </el-menu-item>
      </el-submenu>
      <el-submenu index="admin-news">
        <div slot="title">
          新闻管理
        </div>
        <el-menu-item index="/layout/news" class="nav-item">
          新闻列表
        </el-menu-item>
        <el-menu-item index="/layout/newsAdd" class="nav-item">
          添加新闻
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