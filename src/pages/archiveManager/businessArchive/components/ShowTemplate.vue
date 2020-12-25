<template>
  <div class="body">
    <div class="head-button">
      <head-button></head-button>
    </div>
    <div class="table">
        <el-tabs v-model="activeName">
          <el-tab-pane name="1">
            <span slot="label">工程咨询项目档案</span>
            <project-consult-table :data-list="dataList"></project-consult-table>
          </el-tab-pane>
          <el-tab-pane name="2">
            <span slot="label">造价咨询项目档案</span>
            <project-cost-table :data-list="dataList"></project-cost-table>
          </el-tab-pane>
          <el-tab-pane name="3">
            <span slot="label">招标代理项目档案</span>
            <bidding-agency-table :data-list="dataList"></bidding-agency-table>
          </el-tab-pane>
          <el-tab-pane name="4">
            <span slot="label">工程监理项目档案</span>
            <project-supervisor-table :data-list="dataList"></project-supervisor-table>
          </el-tab-pane>
          <el-tab-pane name="5">
            <span slot="label">项目管理项目档案</span>
            <item-table :data-list="dataList"></item-table>
          </el-tab-pane>
          <el-tab-pane name="6">
            <span slot="label">全过程工程咨询项目档案</span>
            <whole-process-table :data-list="dataList"></whole-process-table>
          </el-tab-pane>
          <el-tab-pane name="7">
            <span slot="label">综合业务项目档案</span>
            <overall-business-table :data-list="dataList"></overall-business-table>
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
  import BiddingAgencyTable from './table/BiddingAgencyTable.vue'
  import ItemTable from './table/ItemTable.vue'
  import OverallBusinessTable from './table/OverallBusinessTable.vue'
  import ProjectConsultTable from './table/ProjectConsultTable.vue'
  import ProjectCostTable from './table/ProjectCostTable.vue'
  import ProjectSupervisorTable from './table/ProjectSupervisorTable.vue'
  import WholeProcessTable from './table/WholeProcessTable.vue'


  export default {
    components: {
      HeadButton,
      BiddingAgencyTable,
      ItemTable,
      OverallBusinessTable,
      ProjectConsultTable,
      ProjectCostTable,
      ProjectSupervisorTable,
      WholeProcessTable

    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
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
