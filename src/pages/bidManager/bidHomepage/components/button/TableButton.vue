<template>
  <div>
    <el-button type="text" size="mini" @click="$emit('click',1,data)">项目情况登记</el-button>
    <el-button type="text" size="mini" @click="$emit('click',2,data)">报名登记</el-button>
    <el-button v-if="data.tenderstatuskeyid!=='0'" type="text" size="mini" @click="$emit('click',3,data)">投标确定</el-button>
    <el-button type="text" size="mini" @click="$emit('click',4,data)">进入工作台</el-button>
    <el-button type="text" size="mini" @click="$emit('click',5,data)">指定负责人</el-button>
    <span>备案中</span>
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
    methods: {}
  }
</script>
<style lang='less' scoped>
span{
  color: #409EFF;
  margin: 0 10px;
}
</style>
