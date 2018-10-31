<template>
  <div>
    <el-card>
      <div slot="header">
        管理员列表
        <div class="flr">
          <i class="el-icon-search"></i>
          <input type="text" v-model="searchText" @keyup.enter="handleSearch">
          <el-button type="primary" size="mini" @click="handleSearch">查询</el-button>
        </div>
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column label="姓名" prop="nickname" />
        <el-table-column label="手机号" prop="phone" />
        <el-table-column label="头像" prop="avatar">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" class="table-item-img">
          </template>
        </el-table-column>  
        <el-table-column label="性别" prop="sex" />
        <el-table-column label="个性签名" prop="desc" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">查看详细</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :total="total"
        v-show="!isShow"
        style="padding:10px 0; float:right;">
      </el-pagination>
      <el-button type="primary" size="mini" style="margin:10px 0; float:right;" v-show="isShow" @click="handleBack">返回</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      loading: false,
      searchText: "",
      isShow: false
    };
  },
  methods: {
    getData(page) {
      this.loading = true;
      this.$axios.get("/admin/adminUser", { page, row: 5 }).then(res => {
        if (res.code == 200) {
          res.data.forEach(item => {
            if (item.sex == 1) {
              item.sex = "男";
            } else {
              item.sex = "女";
            }
          });
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false;
        }
      });
    },
    handleCurrentChange(val) {
      this.getData(val);
    },
    handleDetail(row) {
      this.$router.push({ name: "adminDetail", params: { id: row._id } });
    },
    handleDelete(row) {
      let id = row._id;
      this.$axios.delete(`/admin/adminUser/${id}`).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleSearch() {
      if (this.searchText == "") {
        this.$notify.error({
          title: "错误",
          message: "请输入查询信息"
        });
      } else {
        this.loading = true;
        this.$axios
          .get("/admin/adminUser/search/username", { username: this.searchText })
          .then(res => {
            if (res.code == 200) {
              this.tableData = res.data;
              this.loading = false;
              this.isShow = true;
            }
          });
      }
    },
    handleBack() {
      this.getData();
      this.isShow = false;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
/deep/.table-item-img {
  max-width: 70px;
  height: 80px;
  border-radius: 50%;
}
</style>