<template>
  <div class="column">
    <el-tabs v-model="activeName" tab-position="left" style="height: 600px;">
      <template v-for="item in tabPaneList"><!--workItemName-->
        <el-tab-pane :label="item.name?item.name:item.workItemName" :name="item.keyid">
          <component :is="item.component"></component>
        </el-tab-pane>
      </template>
      <!--<el-tab-pane label="勘察阶段" name="1">
       <survey-tab></survey-tab>
      </el-tab-pane>
      <el-tab-pane label="设计阶段" name="2">
        <design-tab></design-tab>
      </el-tab-pane>
      <el-tab-pane label="施工阶段" name="3">
       <construction-tab></construction-tab>
      </el-tab-pane>
      <el-tab-pane label="保修阶段" name="4">
				<guarantee-tab></guarantee-tab>
			</el-tab-pane>
      <el-tab-pane label="其他服务" name="5">
        <other-services></other-services>
      </el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import OtherServices from './tab/OtherServices.vue'
  import SurveyTab from './tab/SurveyTab.vue'
  import DesignTab from './tab/DesignTab.vue'
  import ConstructionTab from './tab/ConstructionTab.vue'
  import GuaranteeTab from './tab/GuaranteeTab.vue'
  import {mapState} from 'vuex'
  import {getServicePlan} from '../../../../../../api/workbench/webapi-projectConsult.js'
  export default {
    components: {

      OtherServices,
			SurveyTab,
			DesignTab,
			ConstructionTab,
			GuaranteeTab,
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
        activeName:"1",
        tabPaneList: []
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
