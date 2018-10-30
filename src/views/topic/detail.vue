<template>
  <div>
    <el-card>
      <div class="topic" slot="header">
        <div class="clearfix header">
            <img :src="topicData.user.avatar" class="img fll">
            <div class="fll header-right">
              <div class="username" >
                {{topicData.user.username}}
              </div>
              <div class="time"> 
                {{topicData.create_time}}
              </div>
            </div>
        </div>
        <div class="top-content">
          {{topicData.content}}
        </div>
      </div>
      <div class="title">
        评论
      </div>
      <div>
        <el-form class="form">
          <el-form-item>
            <el-input
              type="textarea"
              :autosize="{ minRows: 5}"
              placeholder="请输入内容"
              class="newCommon"
              v-model="newCommon">
            </el-input>
          </el-form-item>
          <el-form-item style="margin-left:100px">
            <el-button type="primary" @click="report">发表</el-button>
          </el-form-item>
        </el-form>        
      </div>
      <div class="common" v-for="(item, index) in common" v-bind:key="index">
        <div class="clearfix header">
            <img :src="item.user.avatar" class="img fll">
            <div class="fll header-right">
              <div class="username" >
                {{item.user.username}}
              </div>
              <div class="time"> 
                {{item.create_time}}
              </div>
            </div>
            <div class="flr tower">
              {{index+1}}楼
              <el-button  icon="el-icon-delete" circle style="float:right padding: 3px 0; color:red;" type="text" @click="hanleDetail(item._id)"></el-button>
            </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
      <div v-show="!isShow" style="padding-top:20px;text-align:center;">
        暂无评论
      </div>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :page-size="5"
        :total="total"
        style="padding:10px 0; float:right;"
        v-show="isShow">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topicData: {},
      common: [],
      total: 0,
      isShow: false,
      newCommon:''
    };
  },
  methods: {
    getData(page) {
      let id = this.$route.params.id;
      this.topicData = this.$route.params.data;
      this.$axios.get(`/admin/common/getCommon/${id}`,{page,row:5}).then(res => {
        let data = res.data
        data.forEach(item => {
          item.create_time = (new Date(item.create_time)).toLocaleString()
        });
        res.data = data
        this.common = res.data;
        this.total = res.total;
        if(this.total == 0){
          this.isShow = false
        } else {
          this.isShow = true
        }
      });
    },
    handleCurrentChange(val) {
      this.getData(val);
    },
    report(){
      let topic_id = this.$route.params.id
      this.$axios.post(`/admin/common`,{content:this.newCommon,topic_id}).then(res => {
        if(res.code == 200){
          this.newCommon = ""
          this.$message.success('发表成功')
          this.getData()
        } else {
          this.$message.error('发表失败')
        }
      })
    },
    hanleDetail(id){
      this.$axios.delete(`/admin/common/${id}`).then(res => {
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
.header {
  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .header-right {
    margin-left: 10px;
    .username {
      line-height: 1.5;
    }
    .time {
      font-size: 13px;
      color: #999;
      line-height: 3;
    }
  }
}
.top-content {
  padding: 20px 60px 60px 60px;
  box-sizing: border-box;
}
.content {
  padding: 20px 60px;
  box-sizing: border-box;
}

.title {
    padding: 20px 0;
    color: #999;
    font-size: 16px;
  }

.common {
  padding: 20px;
  .com-title {
    padding: 20px 0;
    color: #999;
    font-size: 16px;
  }
  border-bottom: 1px solid #f1f1f1;
}

.tower {
  color:#999;
}
.form {
  border-bottom: 1px solid #f1f1f1;
}
.newCommon {
  width: 80%;
  margin-left: 100px;
}
</style>