<template>
  <div class="column">
    <el-tabs v-model="activeName" tab-position="left" style="height: 600px;">
      <template v-for="item in tabPaneList">
        <el-tab-pane :label="item.workItemName" :name="item.keyid">
          <component v-if="item.workItemName==='qualification-examination-table'"
                     :is="item.component" type-code="startbid"></component>
          <component v-else-if="item.workItemName==='publish-results-table'"
                     :is="item.component" type-code="publicity"></component>
          <component v-else :is="item.component"></component>
        </el-tab-pane>
      </template>
        <!--<el-tab-pane label="项目报建" name="1">
          <project-application-tag></project-application-tag>
        </el-tab-pane>
        <el-tab-pane label="项目备案" name="2">
          <project-filing-tag></project-filing-tag>
        </el-tab-pane>
        <el-tab-pane label="需求公示编制发布" name="3">
          <demand-notice-tag></demand-notice-tag>
        </el-tab-pane>
        <el-tab-pane label="资格预审" name="4">
          <prequalification-tag></prequalification-tag>
        </el-tab-pane>
        <el-tab-pane label="招标/采购文件编制审核" name="5">
          <bidding-file-tag></bidding-file-tag>
        </el-tab-pane>
        <el-tab-pane label="公告/邀请书编制发布、文件发售" name="6">
          <notice-and-invitation-tag></notice-and-invitation-tag>
        </el-tab-pane>
        <el-tab-pane label="单一来源公示编制发布、文件发售" name="7">
          <single-publicity-tag></single-publicity-tag>
        </el-tab-pane>
        <el-tab-pane label="开标评标" name="8">
          <qualification-examination-table type-code="startbid"></qualification-examination-table>
        </el-tab-pane>
        <el-tab-pane label="公示编制发布" name="9">
          <publish-results-table type-code="publicity"></publish-results-table>
          &lt;!&ndash;<preliminary-notice-table type-code="publicity"></preliminary-notice-table>&ndash;&gt;
        </el-tab-pane>
        <el-tab-pane label="单一来源公告编制发布" name="10">
          <single-notice-table></single-notice-table>
        </el-tab-pane>
        <el-tab-pane label="出具中标通知书" name="11">
          <win-bid-notice-tag></win-bid-notice-tag>
        </el-tab-pane>
        <el-tab-pane label="其他服务" name="12">
          <other-services></other-services>
        </el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import QualificationExaminationTable from './table/QualificationExaminationTable.vue'
  import PublishResultsTable from './table/PublishResultsTable.vue'
  import OtherServices from './tabs/OtherServices.vue'
  import ProjectApplicationTag from './tabs/ProjectApplicationTag.vue'
  import ProjectFilingTag from './tabs/ProjectFilingTag.vue'
  import PrequalificationTag from './tabs/PrequalificationTag.vue'
  import BiddingFileTag from './tabs/BiddingFileTag.vue'
  import NoticeAndInvitationTag from './tabs/NoticeAndInvitationTag.vue'
  import WinBidNoticeTag from './tabs/WinBidNoticeTag.vue'
  import DemandNoticeTag from './tabs/DemandNoticeTag.vue'
  import SinglePublicityTag from './tabs/SinglePublicityTag.vue'
  import SingleNoticeTable from './table/SingleNoticeTable.vue'
  import {getServicePlan} from '../../../../../../api/workbench/webapi-projectConsult.js'
  export default {
    components: {
      OtherServices,//其他服务
      ProjectApplicationTag,//项目报建
      ProjectFilingTag,//项目备案
      PrequalificationTag,//资格预审
      BiddingFileTag,//招标/采购文件编制审核
      NoticeAndInvitationTag,//公告/邀请书编制发布、文件发售
      QualificationExaminationTable,//开标评标
      PublishResultsTable,//公示编制发布
      WinBidNoticeTag,//出具中标通知书
      DemandNoticeTag,//需求公示编制发布
      SinglePublicityTag,//单一来源公示编制发布、文件发售
      SingleNoticeTable,//单一来源公告编制发布
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        tabPaneList:[]
      }
    },
    //生命周期函数节点
    created() {
      this.networkItemService()
    },
    //自定义函数节点
    methods: {
      networkItemService() {
        if (!this.$myfunction.isEmpty(this.currentItem.projectPlanKeyid)) {
          getServicePlan({workPlanKeyId: this.currentItem.projectPlanKeyid}).then(item => {
            this.tabPaneList = item.data
            this.activeName = this.tabPaneList[0].keyid
          })
        } else {
          this.tabPaneList = []
        }
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
