<template>
  <div>
      <el-button type="text" size="mini" @click="$emit('click',1,scope)" v-show="scope.billType==0">发票登记</el-button>
      <el-button type="text" size="mini" @click="$emit('click',2,scope)">申请作废</el-button>
  </div>


</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import StatusTag from "../../../../../components/StatusTag.vue"
  export default {
		components:{
			StatusTag,
		},
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

      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      handleCommand (command) {
        this.$emit('click', parseInt(command),this.data)
      }
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    margin-left: 10px !important;
  }
</style>
