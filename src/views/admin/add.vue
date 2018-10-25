<template>
  <div>
    <el-card>
      <div slot="header">
        添加管理员
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="用户头像" required>
          <uploadAvatar v-model="formData.avatar"></uploadAvatar>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required>
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职业">
          <el-select v-model="formData.job">
            <el-option label="前台" value="1"></el-option>
            <el-option label="后台" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item label="操作">
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadAvatar from '@/components/upload-avatar'

  export default {
    components: {
      uploadAvatar
    },
    data(){
      return {
        formData:{
          username:"",
          nickname:"",
          avatar:"",
          password:"",
          desc:"",
          job:"",
          phone:"",
          sex:""
        }
      }
    },
    methods:{
      handleSubmit(){
        this.$axios.post('/admin/adminUser', this.formData).then(res => {
          console.log(res);
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push('/layout/adminUser')
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>