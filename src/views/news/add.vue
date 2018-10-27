<template>
  <div>
    <el-card>
      <div slot="header">
        添加新闻
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item label="新闻标题" >
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="新闻作者">
          <el-select v-model="formData.author">
            <el-option v-for="(item, index) in users" :key="index" :label="item.nickname" :value="item._id" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻内容" >
          <Editor v-model="con"/>
        </el-form-item>
        <el-form-item label="新闻头图">
          <uploadAvatar v-model="formData.img"></uploadAvatar>
        </el-form-item>
        <el-form-item label="新闻类型">
          <el-select v-model="formData.type">
            <el-option v-for="(item, index) in category" :key="index" :label="item.title" :value="item._id" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="观看人数">
          <el-input-number v-model="formData.look_num" :min="0"></el-input-number>
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
import Editor from "@/components/Editor"

export default {
  components: {
    uploadAvatar,
    Editor
  },
  data() {
    return {
      formData: {
        title: "",
        content: "",
        contentText: "",
        img: "",
        author: "",
        type: "",
        look_num: ""
      },
      users: [],
      category:[],
      con:{}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios.post("/admin/news", this.formData).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.$router.push("/layout/news");
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    getUser() {
      this.$axios.get("/admin/adminUser").then(res => {
        if (res.code == 200) {
          this.users = res.data;
        }
      });
    },
    getCategory() {
      this.$axios.get("/admin/category").then(res => {
        if (res.code == 200) {
          this.category = res.data;
        }
      })
    }
  },
  created() {
    this.getUser();
    this.getCategory()
  },
  watch:{
    con(val){
      this.formData.content = val.content;
      this.formData.contentText = val.contentText
    }
  }
};
</script>

<style scoped>
</style>