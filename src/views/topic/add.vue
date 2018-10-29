<template>
  <div>
    <el-card>
      <div slot="header">
        发起讨论
      </div>
      <el-form  label-width="100px" label-position="left" class="demo-ruleForm">
        <el-form-item>
            <img :src="avatar" style="width: 50px; height:50px; border-radius:50%;" class="fll">
          <div class="fll" style="margin-left:10px; line-height:3.5;">
            {{username}}
          </div>
        </el-form-item>
        <el-form-item label="输入内容">
          <el-input v-model="content" 
          :autosize="{ minRows: 4}"
          type="textarea"
          placeholder="请输入内容">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">立即发起</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content:'',
      avatar:'',
      username:''
    };
  },
  methods: {
    getData(){
      this.avatar = this.$store.state.userinfo.avatar;
      this.username = this.$store.state.userinfo.username;
    },
    submit(){
      this.$axios.post('/admin/topic',{content:this.content}).then(res => {
        if(res.code == 200){
          this.$message.success('发布成功')
          this.$router.push({name:'topic'})
        } else {
          this.$message.error('发布失败')
        }
      })
    }
  },
  created(){
    this.getData()
  }
};
</script>

<style scoped>
.demo-ruleForm{
  width: 600px;
  margin:0 auto;
}
</style>