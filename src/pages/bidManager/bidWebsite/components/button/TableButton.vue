<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,data)">修改</el-button>
    <delete-button :data="data" @click="delData"></delete-button>
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
      scope(newValue){
        this.data=newValue
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
    methods: {
      delData(data){
        this.$emit('click',2,data)
      }
    }
  }
</script>
<style lang='less' scoped>
.el-tag{
  margin: 0 10px;
}
</style>
