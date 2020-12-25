<template>
  <div class="logContainer">
    <div class="button">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <div class="main-body">
      <el-tabs  v-model="activeName" @tab-click="tabsHandleClick">
        <template v-for="item in tabsName">
          <el-tab-pane :name="item.keyid">
            <span  slot="label">{{item.listname}}</span>
            <div class="table">
              <table-template :contract-type="item.keyid"
                              :status-list="statusList"
                              @showStatus="getStatus"
                              @pageInfoChange="getPageInfo"></table-template>
            </div>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="dialog">
      <!--单合同备案-->
      <single-contract-dialog ref="singleRef" title="单合同备案" width="30%"
                              @getFormData="submitSingleForm"></single-contract-dialog>
      <!--框架或入库合同备案-->
      <frame-or-storage-contract-dialog ref="frameRef"
                                        title="框架或入库合同备案" width="30%" @getFormData="submitSingleForm"></frame-or-storage-contract-dialog>
      <!--高级查询-->
      <query-dialog ref="queryRef" title="高级查询" @getFormData="submitQueryForm"></query-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import TableButton from './button/TableButton.vue'
  import SingleContractDialog from './dialog/SingleContractDialog.vue'
  import FrameOrStorageContractDialog from './dialog/FrameOrStorageContractDialog.vue'
  import QueryDialog from './dialog/QueryDialog.vue'
  import TableTemplate from './table/TableTemplate.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      HeadButton,
      TableButton,
      SingleContractDialog,
      FrameOrStorageContractDialog,
      QueryDialog,
      TableTemplate,
    },
    props:{
      tabsName:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    watch: {
      activeName(newValue){
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.contractTypeKeyId=newValue
        this.networkGetContacts(this.pageShow)
      },
      vuexActiveName(newValue){
        this.activeName=newValue
      }
    },
    computed:{
        ...mapState({
          contracts:state=>state.businessContract.contracts,
          advancedQuery:state=>state.businessContract.advancedQuery,
          vuexActiveName:state=>state.businessContract.activeName
        })
    },
    //数据节点
    data() {
      return {
        activeName:'402880fa74c3492d0174d98785e3003d',
        pageShow: {
          pageInfo:{
            page: 1,
            limit: 30,
          },
          advancedQuery:{
            allstatuscode:'0'
          }
        },
        statusList:[]
      }
    },
    //生命周期函数节点
    created() {
      this.pageShow.advancedQuery.contractTypeKeyId=this.activeName
      this.networkGetContacts(this.pageShow)
      this.getSelectByCode('086').then(item=>{
        this.statusList=item.data
      })
    },
    //自定义函数节点
    methods: {
        ...mapMutations({
          updateAdvancedQuery:'businessContract/updateAdvancedQuery',
          updateOriginalScriptType:'originalScript/updateOriginalScriptType',
          updateModel:'template/updateModel'
        }),
        ...mapActions({
          networkGetContacts:'businessContract/networkGetContacts',
          networkAddContact:'businessContract/networkAddContact',
        }),
      getPageInfo(pageInfo){
        this.pageShow.pageInfo=pageInfo
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.contractTypeKeyId=this.activeName
        this.networkGetContacts(this.pageShow)
      },
      getStatus(status){
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.allstatuscode=status
        this.pageShow.advancedQuery.contractTypeKeyId=this.activeName
        this.networkGetContacts(this.pageShow)
      },
      headBtnClick(btn){
        switch (btn) {
          case 1:
            this.$refs.singleRef.openDialog()
            break
          case 2:
            this.$refs.frameRef.openDialog()
            break
          case 3:
            this.$refs.queryRef.openDialog()
            break
          case 4:
            break
          case 5:
            this.$router.push({path:'/contract/original_script'})
            break
          case 6:
            break
          case 7:
            let ref={
              code:'402880fa74e735230174ec6bbe490009',
              name:'合同模块/业务合同',
              modelName:'ht'
            }
            this.updateModel(ref)
            this.$router.push({path:'/contract/template_manager'})
            break
          case 8:
            break
        }
      },
      tabsHandleClick(tab,event){

      },
      //提交合同表单
      submitSingleForm(formData){
        this.networkAddContact(formData).then(item=>{
          if (item) {
            this.pageShow.advancedQuery.contractTypeKeyId=this.activeName
            this.networkGetContacts(this.pageShow)
          }
        })
      },
      //提交查询表单
      submitQueryForm(formData){
        this.updateAdvancedQuery(formData)
        this.pageShow.advancedQuery=formData
        this.networkGetContacts(this.pageShow)
      },

    }
  }
</script>
<style lang='less' scoped>
  .button{
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
  }
</style>
