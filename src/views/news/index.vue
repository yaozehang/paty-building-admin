<template>
  <div>
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column label="新闻标题" prop="title" />
        <el-table-column label="新闻作者" prop="author.nickname" />
        <el-table-column label="新闻头图" prop="img">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" class="table-item-img">
          </template>
        </el-table-column>  
        <el-table-column label="新闻内容" prop="contentText"/>
        <el-table-column label="新闻类型" prop="type.title" />
        <el-table-column label="观看人数" prop="look_num" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="hanleDetail(scope.row)">查看详细</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :page-size="10"
        :total="total"
        style="padding-top:10px; float:right;">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      loading:false,
    };
  },
  methods: {
    getData(page) {
      this.loading = true
      this.$axios.get("/admin/news", { page, row: 5 }).then(res => {
        if (res.code == 200) {
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false
        }
      });
    },
    hanleDetail(row) {
      this.$router.push({ name: "newsDetail", params: { id: row._id } });
    },
    handleCurrentChange(val) {
      this.getData(val);
    },
    handleDelete(row) {
      let id = row._id;
      this.$axios.delete(`/admin/news/${id}`).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
// /deep/.el-table .cell{
//   display:-webkit-box;
//   -webkit-box-orient:vertical;
//   -webkit-line-clamp:3;
//   overflow:hidden;
// }
</style>