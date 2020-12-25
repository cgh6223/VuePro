<template>
  <div>
    <el-tabs v-model="activeName" tab-position="left" style="height: 600px;">
      <el-tab-pane name="1">
        <span slot="label">制作文件</span>
        <div :key="name1" class="pane-main">
          <make-file-table type-code="402880fa750101f90175029c5d15000f"></make-file-table>
        </div>
      </el-tab-pane>
      <el-tab-pane name="2">
        <span slot="label">开标评标</span>
        <div :key="name2" class="pane-main">
          <open-bid-table type-code="402880fa750101f90175029c5d15000f"></open-bid-table>
        </div>
      </el-tab-pane>
      <el-tab-pane name="3">
        <span slot="label">结果跟踪</span>
        <div :key="name3" class="pane-main">
          <result-track-table type-code="402880fa750101f90175029c5d15000f"></result-track-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="dialog">
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import MakeFileTable from '../table/MakeFileTable.vue'
  import OpenBidTable from '../table/OpenBidTable.vue'
  import ResultTrackTable from '../table/ResultTrackTable.vue'


  export default {
    components: {
      MakeFileTable,
      OpenBidTable,
      ResultTrackTable
    },
    props: {},
    watch: {
      activeName(newValue){
        if (newValue==='1'){
          this.name1=new Date().getTime()
        }
        if (newValue==='2'){
          this.name2=new Date().getTime()
        }
        if (newValue==='3'){
          this.name3=new Date().getTime()
        }
      }
    },
    //数据节点
    data() {
      return {
        dataList: [],
        isBid: [],
        activeName:'1',
        name1:'nameA',
        name2:'nameB',
        name3:'nameC'
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
  .pane-main{

  }

</style>
