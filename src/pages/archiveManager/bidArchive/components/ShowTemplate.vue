<template>
  <div class="body">
    <div class="head-button">
      <head-button></head-button>
    </div>
    <div class="table">
      <el-tabs  v-model="activeName">
        <el-tab-pane name="1">
          <span  slot="label">备案中</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span  slot="label">已报名</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span  slot="label">投标中</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span  slot="label">中标项目</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>
        <el-tab-pane name="5">
          <span  slot="label">未中标项目</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>
        <el-tab-pane name="6">
          <span  slot="label">不投标项目</span>
          <bid-table :data-list="dataList"></bid-table>
        </el-tab-pane>

      </el-tabs>
    </div>
    <div class="dialog">

    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import BidTable from './table/BidTable.vue'


  export default {
    components: {
      HeadButton,
      BidTable,

    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        activeName2: '1',
        dataList: [{}, {}],
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
  .head-button {
    height: 50px;
    line-height: 50px;
    padding: 10px 20px;
  }
</style>
