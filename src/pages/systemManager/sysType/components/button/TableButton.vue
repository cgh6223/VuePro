<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,data)">修改</el-button>
    <el-button type="text" size="mini" @click="$emit('click',2,data)">删除</el-button>
    <el-button type="text" size="mini" @click="$emit('click',3,data)">设置</el-button>
    <!--<el-tag v-if="data.status===0">启用中</el-tag>-->
  </div>
</template>

<script>
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

<style scoped>

</style>
