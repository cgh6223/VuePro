<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,data)">查看</el-button>
    <el-button type="text" size="mini" @click="$emit('click',2,data)">工作提醒</el-button>
    <span>已备案</span>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      scope:'',
    },
    watch: {
      scope(){
        this.data=this.scope
      }
    },
    //数据节点
    data() {
      return {
        data:this.scope
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {}
  }
</script>
<style lang='less' scoped>
span{
  color: #409EFF;
  margin-left: 20px;
}
</style>
