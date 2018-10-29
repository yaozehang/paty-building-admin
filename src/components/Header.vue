<template>
  <div class="header clearfix ml-200">
    <div class="fll bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadList" v-bind:key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flr menu">
      <el-dropdown>
        <span class="el-dropdown-link">
        <img :src="avatar" class="avatar">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div @click="handleDetail">个人中心</div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="handleEdit">修改密码</div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="handleOut">退出登录</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: [],
      avatar: ""
    };
  },
  methods: {
    getData() {
      this.avatar = this.$store.state.userinfo.avatar;
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta.title);
      this.breadList = matched;
    },
    handleDetail(){
      let id = this.$store.state.userinfo._id
      this.$router.push({name:'adminDetail',params:{id}})
    },
    handleOut(){
      sessionStorage.clear()
      this.$router.push('/')
    },
    handleEdit(){
      this.$router.push({name:'editPassword'})
    }
  },
  created() {
    this.getBreadcrumb();
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #f1f1f1;
  .bread {
    padding: 20px;
    box-sizing: border-box;
  }
  .menu {
    cursor: pointer;
    padding: 5px 20px;
    box-sizing: border-box;
  }
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
</style>