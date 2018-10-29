<template>
  <div>
    <el-card>
      <div class="topic">
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
            <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
        </div>
        <div class="top-content">
          {{topicData.content}}
        </div>
      </div>
      <div class="common" v-for="(item, index) in common" v-bind:key="index">
        <div class="com-title">
          评论
          <el-button style="float: right; padding: 3px 0" type="text">加入评论</el-button>
        </div>
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
            </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
      <div class="bottom">
          已经没有评论啦
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topicData: {},
      common: [],
      total: 0
    };
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.topicData = this.$route.params.data;
      this.$axios.get(`/admin/common/getCommon/${id}`).then(res => {
        let data = res.data
        data.forEach(item => {
          item.create_time = (new Date(item.create_time)).toLocaleString()
        });
        res.data = data
        this.common = res.data;
        this.total = res.total;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.topic {
  border-bottom: 1px solid #f1f1f1;
}
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
  padding: 20px 60px 70px 60px;
  box-sizing: border-box;
}
.content {
  padding: 20px 60px;
  box-sizing: border-box;
}

.common {
  .com-title {
    padding: 20px 0;
    color: #999;
    font-size: 16px;
  }
  border-bottom: 1px solid #f1f1f1;
}

.bottom {
  color:#ddd;
  padding:10px 0;
  text-align: center;
}

.tower {
  color:#999;
}
</style>