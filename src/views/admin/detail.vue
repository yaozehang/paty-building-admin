<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>管理员详情</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit">编辑</el-button>
      </div>
      <el-form label-width="100px" label-position="left" style="width:400px; margin:0 auto;">
        <el-form-item label="用户头像">
          <img :src="formData.avatar" style="max-width: 100px;">
        </el-form-item>
        <el-form-item label="用户名">
          {{formData.username}}
        </el-form-item>
        <el-form-item label="昵称">
          {{formData.nickname}}
        </el-form-item>
        <el-form-item label="性别">
          {{formData.sex}}
        </el-form-item>
        <el-form-item label="电话">
          {{formData.phone}}
        </el-form-item>
        <el-form-item label="工作">
          {{formData.job}}
        </el-form-item>
        <el-form-item label="个性签名">
          {{formData.desc}}
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData:{}
      }
    },
    methods:{
      getData(){
        let id = this.$route.params.id
        this.$axios.get(`/admin/adminUser/${id}`).then(res => {
          this.formData = res.data
          if(res.data.sex == 1 ){
            this.formData.sex = "男"
          } else {
            this.formData.sex = "女"
          }
        })
      },
      handleEdit(){
        let id = this.$route.params.id
        this.$router.push({name:'adminEdit',params:{id:id}})
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
</style>