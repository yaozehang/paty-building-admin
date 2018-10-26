<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>{{formData.title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit">编辑</el-button>
      </div>
      <div>
        <div class="related clearfix">
          <div class="fll">
            作者:{{formData.author.nickname}}
          </div>
          <div class="rel-item fll">
            时间:{{formData.create_time}}
          </div>
          <div class="rel-item fll">
            类型:{{formData.type.title}}
          </div>
          <div class="rel-item fll">
            观看人数:{{formData.look_num}}
          </div>
        </div>
        <div v-html="formData.content" class="content"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData:{
          author:{
            nickname:''
          },
          type:{
            title:''
          }
        }
      }
    },
    methods:{
      getData(){
        let id = this.$route.params.id
        this.$axios.get(`/admin/news/${id}`).then(res => {
          this.formData = res.data
        })
      },
      handleEdit(){
        let id = this.$route.params.id
        this.$router.push({name:'newsEdit',params:{data:this.formData,id:id}})
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
.related {
  font-size: 12px;
  color:#888;
  .rel-item {
    margin-left: 20px;
  }
}
/deep/.content {
  img {
    display: block;
    width: 600px;
    margin:0 auto;
  }
}
</style>