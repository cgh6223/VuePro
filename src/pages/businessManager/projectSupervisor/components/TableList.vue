<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <div class="table">
      <el-tabs :active-name="activeName">
        <template v-for="item in projectStatus.list">
          <el-tab-pane :label="item.listname" :name="item.staticsCode">
            <table-template @getPageInfo="getPageInfo"></table-template>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="dialog">
      <add-item-dialog title="项目备案" ref="addItemRef" width="30%" @getFormData="submitAddForm"></add-item-dialog>
      <query-item-dialog title="高级查询" ref="queryItemRef" width="60%" @getFormData="submitQueryForm"></query-item-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableTemplate from './table/TableTemplate.vue'
  import HeadButton from './button/HeadButton.vue'
  import ContractCarryOutTemplate from '../../acomponents/ContractCarryOutTemplate.vue'
  import AddItemDialog from './dialog/AddItemDialog.vue'
  import QueryItemDialog from './dialog/QueryItemDialog.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      TableTemplate,
      HeadButton,
      ContractCarryOutTemplate,
      AddItemDialog,
      QueryItemDialog,

    },
    props: {},
    watch: {
      activeName(newValue) {
        this.updateActiveName(newValue)
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.projectStatusKeyId=newValue
        this.networkGetItems(this.pageShow)
      },
      vuexActiveName(newValue){
        this.activeName=newValue
      },
      advancedQuery(newValue){
        this.pageShow.advancedQuery=newValue
      }
    },
    computed: {
      ...mapState('loadType', {
        projectStatus: 'projectStatus'
      }),
      ...mapState('projectSupervisor', {
        advancedQuery: 'advancedQuery',
        vuexActiveName:'activeName'
      })
    },
    //数据节点
    data() {
      return {
        activeName: '0',
        pageShow: {
          pageInfo: {
            page: 1,
            limit: 30
          },
          advancedQuery: {
            contractVocationalTypeKeyId: '402880fa74c3492d0174d45f629c0018',
            projectStatusKeyId: '0'
          }
        }
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetItems(this.pageShow)
    },
    //自定义函数节点
    methods: {
      ...mapMutations('template', {
        updateModel: 'updateModel'
      }),
      ...mapMutations('projectSupervisor', {
        updateActiveName:'updateActiveName',
        updateAdvancedQuery:'updateAdvancedQuery'
      }),
      ...mapActions('projectSupervisor', {
        networkGetItems: 'networkGetItems',
        networkAddItem: 'networkAddItem',
      }),
      getPageInfo(pageInfo){
        this.pageShow.pageInfo=pageInfo
        this.networkGetItems(this.pageShow)
      },
      headBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.$refs.addItemRef.openDialog()
            break
          case 2:
            this.$refs.queryItemRef.openDialog()
            break
          case 3:
            this.$refs.queryItemRef.openDialog()
            break
          case 4:
            this.$router.push({path: 'item_original'})
            break
          case 6:
            let ref = {
              code: '402880fa74e735230174ec6ec55c000f',
              name: '业务模块/工程监理模块',
            }
            this.updateModel(ref)
            this.$router.push({path: 'template'})
            break
          case 8:
            this.$refs.infoDataRef.openDialog()
            break
        }
      },
      submitAddForm(formData){
        this.updateActiveName('0')
        this.networkAddItem(formData)
      },
      submitQueryForm(formData){
        formData.projectStatusKeyId=this.activeName
        this.updateAdvancedQuery(formData)
        this.pageShow.advancedQuery=formData
        this.networkGetItems(this.pageShow)
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
