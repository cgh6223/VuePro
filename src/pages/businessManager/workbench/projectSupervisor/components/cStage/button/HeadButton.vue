<template>
  <div class="button-box">
    <el-row :gutter="20">
     
      <div class="btn-right">
        
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',1)">新增监理业务手册</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',3)">新增其他存档资料</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {},
    watch: {},
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      handleCommand (command) {
        this.$emit('click', parseInt(command))
      }
    }
  }
</script>
<style lang='less' scoped>
  .button-box{
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 18px 20px;
  }
  .btn-left{
    float: left;
    margin-left: 0 !important;
  }
  .btn-right {
    float: right;
    margin-right: 0 !important;
    .el-button {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
</style>
