<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,scope)">修改</el-button>
    <el-button type="text" size="mini" @click="$emit('click',2,scope)">删除</el-button>
    <el-button type="text" size="mini" @click="$emit('click',3,scope)">明细登记</el-button>
    
    <el-button type="text" size="mini" @click="$emit('click',4,scope)" v-show="(!scope.drawback)">退款申请</el-button>
    <!--这里需要通过流程返回的状态来控制-->
    <el-button type="text" size="mini" @click="$emit('click',5,scope)" v-show="(scope.drawback&&scope.drawback.status==2)">完善退款信息</el-button>
    </div>
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
     
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    margin-left: 10px !important;
  }
</style>
