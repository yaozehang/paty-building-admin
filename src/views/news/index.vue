<template>
  <div>
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="新闻标题" prop="title" />
        <el-table-column label="新闻副标题" prop="content" />
        <el-table-column label="新闻内容" prop="contentText" />
        <el-table-column label="新闻作者" prop="author" />
        <el-table-column label="新闻头图" prop="img">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" class="table-item-img">
          </template>
        </el-table-column>  
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">查看详细</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tableData:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/admin/news').then(res => {
          console.log(res);
          if(res.code == 200){
            this.tableData = res.data
          }
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>

</style>