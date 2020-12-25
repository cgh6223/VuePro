<template>
  <div>
    <el-row :gutter="20">
      <div class="btn-left">
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',1)">新增人员</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',2)">高级查询</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',3)">数据展示</el-button>
      </div>
      <div class="btn-right">
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',4)">导出Excel</el-button>
        <el-dropdown @command="handleCommand">
          <el-button class="btn_color" type="primary" size="mini">
            社保公积金上传<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="5">社保公积金导入</el-dropdown-item>
            <el-dropdown-item command="6">社保公积金扫描件上传</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',7)">工资信息上传</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    //数据节点
    data () {
      return {}
    },
    //生命周期函数节点
    created () {
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
