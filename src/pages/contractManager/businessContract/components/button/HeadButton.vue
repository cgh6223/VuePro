<template>
  <div>
    <el-row :gutter="20">
      <div class="btn-left">
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',1)">单合同备案</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',2)">框架或入库合同备案</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',3)">高级查询</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',4)">数据展示</el-button>
      </div>
      <div class="btn-right">
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',5)">合同原件管理</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',7)">模板管理</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',8)">导出Excel</el-button>
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
