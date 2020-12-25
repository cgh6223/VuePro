<template>
  <div>

    <el-button type="text" size="mini" @click="$emit('click',2,data)">进入工作台</el-button>
    <el-button type="text" size="mini" @click="$emit('click',3,data)">原件移交</el-button>
		<el-button type="text" size="mini" @click="$emit('click',1,data)">合同执行情况</el-button>
    <el-button  v-if="data.projectStatusKeyId != 6" type="text" size="mini" @click="$emit('click',4,data)">项目取消登记</el-button>
    <el-button v-if="data.projectStatusKeyId == 6" type="text" size="mini" @click="$emit('click',6,data)">项目取消详情</el-button>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
	import StatusTag from '../../../../../components/StatusTag.vue'
  export default {
    components: {StatusTag},
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
.el-tag{
  margin: 0 10px;
}
</style>
