<template>
  <div>
    <el-card>
      <div slot="header">
        讨论列表
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleAdd">发起新讨论</el-button>
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column label="用户头像">
          <template slot-scope="scope">
            <img :src="scope.row.user.avatar" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="用户名" prop="user.username" />
        <el-table-column label="内容" prop="content" />
        <el-table-column label="发表时间" prop="create_time" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="hanleDetail(scope.row)">查看详情</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :page-size="5"
        :total="total"
        style="padding:10px 0; float:right;">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: false,
      total:0
    };
  },
  methods: {
    getData(page) {
      this.isloading = true;
      this.$axios.get("/admin/topic",{page,row:5}).then(res => {
        if (res.code == 200) {
          let data = res.data;
          data.forEach(item => {
            item.create_time = new Date(item.create_time).toLocaleString();
          });
          res.data = data;
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false;
        }
      });
    },
    handleAdd() {
      this.$router.push({ name: "topicAdd" });
    },
    handleCurrentChange(val) {
      this.getData(val);
    },
    handleDelete(row) {
      let id = row._id;
      this.$axios.delete(`/admin/topic/${id}`).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    hanleDetail(row){
      this.$router.push({name:'topicDetail',params:{id:row._id,data:row}})
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
</style>