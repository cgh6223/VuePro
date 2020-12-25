<template>
  <el-row class="header_top">
    <el-col :span="4" class="sys_title">
      <div class="logo"></div>
      <div class="title">项目管理系统后台<el-divider direction="vertical"></el-divider></div>
    </el-col>
    <el-col :span="16" class="menu_top wflex rflex"></el-col>
    <el-col :span="4" :offset="16">
      <div class="right_meun">
        你好！管理员
        <el-avatar
          class="avatar"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "headerNav_new",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },
    getpush(str) {
      this.$router.push({ path: str });
    }
  }
};
</script>
<style lang="less" scoped>
.header_top {
  //background: linear-gradient(to right, rgb(0, 105, 70), rgb(0, 125, 95));
  background-color: #ffffff;
  color: black;

  .sys_title {
    font-size: 24px;
    line-height: 60px;
    padding-left: 12px;
    .logo{
      margin-left: 20px;
      margin-top: 10px;
      float: left;
      width: 40px;
      height: 40px;
      background-image: url("../../public/images/sys_logo.png");
      background-size: 100%;

    }
    .title{
      margin-left: 70px;
    }
  }
  .right_meun {
    justify-content: space-between;
    padding: 0 10px;
    line-height: 60px;
    text-align: right;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .center_meun {
    line-height: 60px;
  }
  .menu_top {
    // width:calc(100% - 350px);
    .el-menu-demo {
      border: none;
      overflow-y: hidden;
      flex: 1;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      outline: 0;
      background-color: #ceeda8;
    }
  }
  .sub2 {
    color: #fff;
    background: none;
  }
  .sub2:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #3a8ee6;
  }
  .sub2:hover {
    background: none;
    border-bottom-color: orange;
    color: #fff;
  }
  .sub2:visited {
    background: orange;
    color: #fff;
  }
}
</style>
