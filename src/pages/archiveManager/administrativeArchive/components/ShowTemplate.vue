<template>
  <div class="body">
    <div class="head-button">
      <head-button></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">活动档案</span>
          <activity-table :data-list="dataList"></activity-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">文件档案</span>
          <el-tabs v-model="activeName2" tab-position="left">
            <el-tab-pane name="1">
              <span slot="label">红头文件</span>
              <read-head-document-table></read-head-document-table>
            </el-tab-pane>
            <el-tab-pane name="2">
              <span slot="label">普通文件</span>
              <ordinary-document-table></ordinary-document-table>
            </el-tab-pane>
            <el-tab-pane name="3">
              <span slot="label">会议纪要</span>
              <meeting-minutes-table></meeting-minutes-table>
            </el-tab-pane>
            <el-tab-pane name="4">
              <span slot="label">规章制度</span>
              <regulations-table></regulations-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">资质档案</span>
          <qualification-table :data-list="dataList"></qualification-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">荣誉档案</span>
          <honor-table :data-list="dataList"></honor-table>
        </el-tab-pane>
        <el-tab-pane name="5">
          <span slot="label">工商档案</span>
          <company-table :data-list="dataList"></company-table>
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
  import ActivityTable from './table/ActivityTable.vue'

  import ReadHeadDocumentTable from './table/ReadHeadDocumentTable.vue'
  import OrdinaryDocumentTable from './table/OrdinaryDocumentTable.vue'
  import MeetingMinutesTable from './table/MeetingMinutesTable.vue'
  import RegulationsTable from './table/RegulationsTable.vue'

  import CompanyTable from './table/CompanyTable.vue'
  import HonorTable from './table/HonorTable.vue'
  import QualificationTable from './table/QualificationTable.vue'


  export default {
    components: {
      HeadButton,
      ActivityTable,

      ReadHeadDocumentTable,
      OrdinaryDocumentTable,
      MeetingMinutesTable,
      RegulationsTable,

      CompanyTable,
      HonorTable,
      QualificationTable,

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
