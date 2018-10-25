<template>
  <div class="header clearfix ml-200">
    <div class="fll">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/layout/adminUser' }">管理员列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path:'/layout/adminAdd' }">添加管理员</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flr menu">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">
.header {
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
  box-sizing: border-box;
  .menu {
    cursor: pointer;
  }
}
</style>