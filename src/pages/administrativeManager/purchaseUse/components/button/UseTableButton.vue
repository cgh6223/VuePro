<template>
  <div>
    <status-button title="审核中"></status-button>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import  StatusButton from '../../../acomponents/StatusButton.vue'
  export default {
    components:{
      StatusButton
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
        data: this.scope
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
