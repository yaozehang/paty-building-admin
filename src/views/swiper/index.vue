<template>
  <div>
    <el-card>
      <div slot="header">
        轮播图列表
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column label="轮播图" prop="img">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" class="table-item-img">
          </template>
        </el-table-column>  
        <el-table-column label="轮播图标题" prop="title" />
        <el-table-column label="新闻标题" prop="news.title" />
        <el-table-column label="排序" prop="sort"/>
        <el-table-column label="是否显示" prop="status" >
          <template slot-scope="scope">
            {{scope.row.status ? '显示' : '不显示'}}
          </template>
        </el-table-column> 
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="hanleEdit(scope.row)">编辑</el-button>
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
      total: 0,
      loading: false
    };
  },
  methods: {
    getData(page) {
      this.loading = true;
      this.$axios.get("/admin/swiper", { page, row: 5 }).then(res => {
        if (res.code == 200) {
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false;
        }
      });
    },
    hanleEdit(row) {
      this.$router.push({ name: "swiperEdit", params: { data: row } });
    },
    handleCurrentChange(val) {
      this.getData(val);
    },
    handleDelete(row) {
      let id = row._id;
      this.$axios.delete(`/admin/swiper/${id}`).then(res => {
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
/deep/.el-table .cell {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
/deep/.table-item-img {
  width: 150px;
  height: 100px;
}
</style>