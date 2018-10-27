<template>
  <div>
    <el-card>
      <div slot="header">
        添加管理员
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="用户头像" >
          <uploadAvatar v-model="formData.avatar"></uploadAvatar>
        </el-form-item>
        <el-form-item label="用户名"  style="width: 800px;" v-show="!isEdit">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"  style="width: 800px;" v-show="!isEdit">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="昵称" style="width: 800px;" >
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="电话" style="width: 800px;" >
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别" >
          <el-select v-model="formData.sex" >
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职业" > 
          <el-select v-model="formData.job">
            <el-option label="前台" :value="1"></el-option>
            <el-option label="后台" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个性签名" style="width: 800px;" >
          <el-input v-model="formData.desc"
                    type="textarea"
                    autosize
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="操作">
          <el-button type="primary" @click="handleSubmit" v-show="!isEdit">提交</el-button>
          <el-button v-show="isEdit" type="primary" @click="handleSave">保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadAvatar from "@/components/upload-avatar";

export default {
  components: {
    uploadAvatar
  },
  data() {
    return {
      formData: {
        username: "",
        nickname: "",
        avatar: "",
        password: "",
        desc: "",
        job: "",
        phone: "",
        sex: ""
      },
      isEdit: false
    };
  },
  methods: {
    handleSubmit() {
      this.$axios.post("/admin/adminUser", this.formData).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.$router.push("/layout/adminUser");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    getData() {
      let id = this.$route.params.id;
      this.$axios.get(`/admin/adminUser/${id}`).then(res => {
        this.formData = res.data;
      });
    },
    handleSave() {
      let id = this.$route.params.id;
      this.$axios.patch(`/admin/adminUser/${id}`, this.formData).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.isEdit = false
          this.$router.push("/layout/adminUser");
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  },
  created() {
    if (this.$route.name == "adminEdit") {
      this.isEdit = true;
      this.getData();
    } else {
      this.isEdit = false;
    }
  },
  watch: {
    $route(to, from) {
      if (to.name == "adminEdit") {
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    }
  }
};
</script>

<style scoped>
</style>