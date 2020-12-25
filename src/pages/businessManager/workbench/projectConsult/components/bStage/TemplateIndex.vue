<template>
  <div class="column">
    <el-tabs v-model="activeName" tab-position="left" style="height: 600px;">
      <template v-for="item in tabPaneList"><!--workItemName-->
        <el-tab-pane :label="item.name?item.name:item.workItemName" :name="item.keyid">
          <component :is="item.component"></component>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import SiteSurvey from './template/SiteSurvey.vue'
  import Report from './template/Report.vue'
  import Review from './template/Review.vue'
  import Negtiate from './template/Negtiate.vue'
  import AdministrativeLicensing from './template/AdministrativeLicensing.vue'
  import OtherServices from './template/OtherServices.vue'
  import {mapState} from 'vuex'
  import {getServicePlan} from '../../../../../../api/workbench/webapi-projectConsult.js'

  export default {
    components: {
      SiteSurvey,
      Report,
      Review,
      Negtiate,
      AdministrativeLicensing,
      OtherServices,
    },
    props: {},
    watch: {},
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        activeName: "1",
        tabPaneList: [
          {keyid: '402880fa751bcd4c01751bd0e0860003', name: '现场踏勘', component: 'SiteSurvey'},
          {keyid: '402880fa751bcd4c01751bd13bc50004', name: '会商谈判', component: 'Negtiate'},
          {keyid: '402880fa751bcd4c01751bd164880005', name: '组织评审', component: 'Review'},
          {keyid: '402880fa751bcd4c01751bd188bc0006', name: '编制及出具报告', component: 'Report'},
          {keyid: '402880fa751bcd4c01751bd1ba7c0007', name: '办理行政许可', component: 'AdministrativeLicensing'},
          {keyid: '402880fa751bcd4c01751bd1e04a0008', name: '其他服务', component: 'OtherServices'},
        ]
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
