<template>
  <div class="main">
    <el-tabs v-model="activeName">
      <el-tab-pane label="前期阶段" name="advance">
        <a-stage></a-stage>
      </el-tab-pane>
      <el-tab-pane label="实施阶段" name="second">
        <b-stage></b-stage>
      </el-tab-pane>
      <el-tab-pane label="收尾阶段" name="third">
        <c-stage></c-stage>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import aStage from './components/aStage/TemplateIndex.vue'
  import bStage from './components/bStage/TemplateIndex.vue'
  import cStage from './components/cStage/TemplateIndex.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      aStage,
      bStage,
      cStage,
    },
    props: {},
    watch: {
      activeName(newValue) {
        switch (newValue) {
          case 'advance':
            this.aStageGetCurrWorkPlan()
            this.aStageGetHistoryWorkPlan()
            this.aStageGetItemContacts()
            this.aStageGetMaterials()
            break
          case 'second':
            break
          case 'third':
            this.cStageGetCurrWorkPlan()
            this.cStageGetReturnMaterials()
            break
        }
      }
    },
    //数据节点
    data() {
      return {
        activeName: 'advance',
        form: {},
        formRules: {}
      }
    },
    //生命周期函数节点
    created() {
      this.aStageGetCurrWorkPlan()
      this.aStageGetHistoryWorkPlan()
      this.aStageGetItemContacts()
      this.aStageGetMaterials()
    },
    //自定义函数节点
    methods: {
      ...mapActions('workbench/aStage', {
        aStageGetCurrWorkPlan: 'networkGetCurrWorkPlan',
        aStageGetHistoryWorkPlan: 'networkGetHistoryWorkPlan',
        aStageGetItemContacts: 'networkGetItemContacts',
        aStageGetMaterials: 'networkGetMaterials',
      }),
      ...mapActions('workbench/bStage', {}),
      ...mapActions('workbench/cStage', {
        cStageGetCurrWorkPlan: 'networkGetCurrWorkPlan',
        cStageGetReturnMaterials:'networkGetReturnMaterials'
      }),
    }
  }
</script>
<style lang='less' scoped>
  .main {
    padding: 5px 20px;
  }
</style>
