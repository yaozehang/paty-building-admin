<template>
  <div class="login">
    <vue-particles color="#dedede" class="bg"></vue-particles>
    <div class="login-box">
      <h2>党建E家后台管理系统</h2>
      <el-form v-model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password" @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleLogin" type="primary" class="block-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    handleLogin() {
      this.$axios.post("/admin/adminUser/login", this.formData).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.$store.commit("CHANGE_USERINFO", res.data);
          this.$router.push({ name: "home" });
        } else {
          this.$message.info(res.msg);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  overflow: hidden;
  height: 100vh;

  h2 {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 500px;
    height: 400px;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
    padding: 30px;
    box-sizing: border-box;
  }
  /deep/.el-input {
    background: #2d3a4b;
    border: none;
  }
  /deep/ .el-form-item__label {
    color: #fff;
  }

  .block-btn {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("/static/img/beijing.jpg") no-repeat;
  background-size: cover;
}
</style>