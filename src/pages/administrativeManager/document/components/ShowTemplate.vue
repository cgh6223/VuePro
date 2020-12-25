<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">红头文件</span>
          <document-table :type="true"></document-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">普通文件</span>
          <document-table :type="false"></document-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">会议纪要</span>
          <meeting-minutes-table ></meeting-minutes-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">规章制度</span>
          <regulations-table></regulations-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog">
      <add-document-dialog title="添加文件" ref="addRef"></add-document-dialog>
      <query-document-dialog title="高级查询" ref="queryRef" ></query-document-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import DocumentTable from './table/DocumentTable.vue'
  import MeetingMinutesTable from './table/MeetingMinutesTable.vue'
  import RegulationsTable from './table/RegulationsTable.vue'
  import AddDocumentDialog from './dialog/AddDocumentDialog.vue'
  import QueryDocumentDialog from './dialog/QueryDocumentDialog.vue'


  export default {
    components: {
      HeadButton,
      DocumentTable,
      MeetingMinutesTable,
      RegulationsTable,
      AddDocumentDialog,
      QueryDocumentDialog
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
    methods: {
      headButtonClick(btn){
        switch (btn) {
          case 1:
            this.$refs.addRef.openDialog()
            break
          case 2:
            this.$refs.queryRef.openDialog()
            break
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .head-button {
    height: 50px;
    line-height: 50px;
    padding: 10px 20px;
  }
</style>
