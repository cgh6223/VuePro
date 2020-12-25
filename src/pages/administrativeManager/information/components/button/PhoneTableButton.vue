<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,data)">修改</el-button>
    <el-dropdown @command="handleCommand">
      <el-tag>使用中<i class="el-icon-arrow-down el-icon--right"></i></el-tag>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="2">暂停使用</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    props: {
      user: {
        type: String,
        default: "admin"
      },
      scope: '',
    },
    //数据节点
    data() {
      return {
        currentUser: this.user,
        data: this.scope
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      handleCommand(command) {
        this.$emit('click', parseInt(command), this.data)
      }
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    cursor: pointer;
    margin-left: 10px !important;
  }
</style>
