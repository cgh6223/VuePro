<template>
  <div class="body">
    <el-button type="text" size="mini" @click="$emit('click',1,data)">查看</el-button>
    <el-button type="text" size="mini" @click="$emit('click',3,data)">原件移交</el-button>
    <el-button v-if="data.callOffTypeKeyid===''" type="text" size="mini" @click="$emit('click',4,data)">合同完成申请</el-button>
    <el-button type="text" size="mini" @click="$emit('click',5,data)">合同执行情况</el-button>
    <status-button v-if="data.callOffTypeKeyid!==''" :title="data.contractStatusName+'-'+data.callOffTypeName"></status-button>
    <template v-else>
      <status-button :title="data.contractStatusName"></status-button>
      <el-button type="text" size="mini" @click="$emit('click',2,data)">合同取消登记</el-button>
    </template>

  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      scope: '',
    },
    watch: {
      scope() {
        this.data = this.scope
      }
    },
    //数据节点
    data() {
      return {
        data: this.scope
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
  span {
    color: #409EFF;
    margin: 0 10px;
  }
</style>
