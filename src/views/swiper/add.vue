<template>
  <div>
    <el-card>
      <div slot="header">
        添加轮播图
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="标题" style="width: 800px;" >
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="新闻">
          <el-button  @click="dialogVisible = true" v-show="!isAdd">选择新闻</el-button>
          <div v-show="isAdd">
            <div>{{handleNews.title}}</div>
            <img :src="handleNews.img" style="width:200px">
            <el-button type="primary" icon="el-icon-edit" circle @click="dialogVisible = true"></el-button>
          </div>
          <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            top="5vh"
            >
             <el-table :data="newsData">
              <el-table-column label="新闻标题" prop="title" />
              <el-table-column label="新闻作者" prop="author.nickname" />
              <el-table-column label="新闻头图" prop="img">
                <template slot-scope="scope">
                  <img :src="scope.row.img" alt="" class="table-item-img">
                </template>
              </el-table-column>  
              <el-table-column label="新闻类型" prop="type.title" />
              <el-table-column label="观看人数" prop="look_num" />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="handleAdd(scope.row)">添加</el-button>
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
          </el-dialog>
        </el-form-item>
        <el-form-item label="轮播图">
          <uploadAvatar v-model="formData.img"></uploadAvatar>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="formData.sort" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="是否显示" prop="statue">
          <el-switch
            v-model="formData.statue"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="不显示">
          </el-switch>
          </el-form-item>
        <el-form-item label="操作">
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadAvatar from "@/components/upload-avatar";
import Editor from "@/components/Editor";

export default {
  components: {
    uploadAvatar,
    Editor
  },
  data() {
    return {
      formData: {
        title: "",
        news: "",
        img: "",
        sort:"", //控制排序
        statue:1 //控制显示
      },
      handleNews:{
        title:"",
        _id:"",
        img:""
      },
      newsData: [],
      total: 0,
      dialogVisible: false,
      isAdd:false,
    };
  },
  methods: {
    handleSubmit() {
      this.$axios.post("/admin/swiper", this.formData).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.$router.push("/layout/swiper");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    getNews(page) {
      this.$axios.get("/admin/news", { page,row:4 }).then(res => {
        if (res.code == 200) {
          this.newsData = res.data;
          this.total = res.total;
        }
      });
    },
    handleCurrentChange(val) {
      this.getNews(val);
    },
    handleAdd(row) {
      this.dialogVisible = false;
      this.handleNews.title = row.title
      this.handleNews.img = row.img
      this.handleNews._id = row._id
      this.formData.news = row._id
      this.isAdd = true;
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped lang="scss">
</style>
<style>
.el-dialog__body {
  padding-bottom: 50px;
}
</style>
