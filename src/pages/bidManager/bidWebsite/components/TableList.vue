<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">每日游览网站</span>
          <div class="table">
            <daily-visit-table ref="website"></daily-visit-table>
          </div>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">投标交易中心</span>
          <div class="table">
            <bid-transaction-table ref="platform"></bid-transaction-table>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="dialog">
      <website-dialog ref="addWebsiteRef" title="每日网站浏览" width="30%" @getFormData="networkAddWebsiteRef"></website-dialog>
      <platform-dialog ref="addPlatformRef" title="投标交易平台" width="30%" @getFormData="networkAddPlatformRef"></platform-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import ElPopoverTemplate from '../../acomponents/ElPopoverTemplate.vue'
  import pagination from '../../../../components/pagination/index.vue'
  import HeadButton from './button/HeadButton.vue'
  import TableButton from './button/TableButton.vue'
  import PlatformDialog from './dialog/PlatformDialog.vue'
  import WebsiteDialog from './dialog/WebsiteDialog.vue'
  import DailyVisitTable from './table/DailyVisitTable.vue'
  import BidTransactionTable from './table/BidTransactionTable.vue'
  import {getPlatformWebsite,getBrowseWebsite,addPlatformWebsite,addBrowseWebsite} from '../../../../api/webapi-bidRecord.js'

  export default {
    components: {
      pagination,
      HeadButton,
      TableButton,
      ElPopoverTemplate,
      PlatformDialog,
      WebsiteDialog,
      DailyVisitTable,
      BidTransactionTable
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName:'1',
        website:1,
        platform:1,


      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      headBtnClick(btn,data){
        switch (btn) {
          case 1:
            this.$refs.addWebsiteRef.openDialog()
            break
          case 2:
            this.$refs.addPlatformRef.openDialog()
            break
        }
      },
      networkAddWebsiteRef(formData){
        addBrowseWebsite(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.$refs.website.networkGetDataList()
            this.activeName='1'
          }
        })
      },
      networkAddPlatformRef(formData){
        addPlatformWebsite(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.$refs.platform.networkGetDataList()
            this.activeName='2'
          }
        })
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
