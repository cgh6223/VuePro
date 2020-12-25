<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <el-table
            :data="contracts.dataList"
            style="width: 100%"
            align="center"
            height="7.5rem"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">
      <el-table-column prop="contractCode" label="合同编号" align="center" width="150" fixed="left"></el-table-column>
      <el-table-column prop="contractName" label="合同名称" align="center" width="250" fixed="left"></el-table-column>
      <el-table-column prop="createddateTime" label="创建时间" align="center" width="100"></el-table-column>
      <el-table-column prop="orgName" label="签订部门" align="center"></el-table-column>
      <el-table-column prop="contractTypename" label="合同类型" align="center" width="100"></el-table-column>
      <el-table-column prop="" label="合同协议各方情况" align="center" width="150">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>甲方名称: {{ scope.row.contractBurchaser}}</p>
            <p>乙方名称: {{ scope.row.contractSeller}}</p>
            <p>第三方名称: {{ scope.row.thirdparty}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="concludesigndateTime" label="签订时间" align="center" width="100"></el-table-column>
      <el-table-column prop="isexpiryDate" label="是否有有效期" align="center" width="120">
        <template slot-scope="scope">
          <template v-if="scope.row.isexpiryDate">
            <el-popover trigger="click" placement="top">
              <p>{{scope.row.expiryDate}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">是</el-tag>
              </div>
            </el-popover>
          </template>
          <template v-else>
            否
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="isdeposit" label="是否收取保证金" align="center" width="200">
        <template slot-scope="scope">
          <template v-if="scope.row.isdeposit">
            <el-popover trigger="click" placement="top">
              <p>收取金额：{{scope.row.depositsum}}</p>
              <p>收取时间：{{scope.row.depositdateTime}}</p>
              <p>退回时间：{{scope.row.indepositdateTime}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">是</el-tag>
              </div>
            </el-popover>
          </template>
          <template v-else>
            否
          </template>
        </template>

      </el-table-column>
      <el-table-column prop="isgather" label="是否缴纳保证金" align="center" width="200">
        <template slot-scope="scope">
        <template v-if="scope.row.isgather">
          <el-popover trigger="click" placement="top">
            <p>缴纳金额：{{scope.row.depositsum}}</p>
            <p>缴纳时间：{{scope.row.depositdateTime}}</p>
            <p>退回时间：{{scope.row.indepositdateTime}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">是</el-tag>
            </div>
          </el-popover>
        </template>
        <template v-else>
          否
        </template>
      </template>
      </el-table-column>
      <el-table-column prop="" label="原件情况" align="center" width="200px">
        <template slot-scope="scope">
          <el-popover :trigger="tagType" placement="top">
            <div>
              <el-table :data="scope.row.turnOvers">
                <el-table-column prop="resourcename" label="资料名称" align="center"></el-table-column>
                <el-table-column prop="outOrgkeyid" label="移交组织" align="center"></el-table-column>
                <el-table-column prop="outOrgName" label="移交人" align="center"></el-table-column>
                <el-table-column prop="inOrgName" label="接收组织" align="center"></el-table-column>
                <el-table-column prop="inperson" label="接收人" align="center"></el-table-column>
                <el-table-column prop="inturnoverdate" label="接收时间" align="center"></el-table-column>
                <el-table-column prop="copies" label="份数" align="center"></el-table-column>
              </el-table>
            </div>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="" label="合同争议方式" align="center" width="130">
        <template slot-scope="scope">
          <el-popover :trigger="tagType" placement="top">
            <p>法院名称/仲裁地点: {{scope.row.disputename}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag v-if="!$myfunction.isEmpty(scope.row.methodofdisputename)" size="medium">
                {{scope.row.methodofdisputename}}
              </el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px" fixed="right">
        <template slot-scope="scope">
          <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination
            :pageTotal="contracts.total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange">
    </pagination>
    <!--合同备案-->
    <add-contract-dialog ref="addRef" title="合同备案" width="30%" @getFormData="submitAddContract"></add-contract-dialog>
    <!--高级查询-->
    <query-dialog ref="queryRef" title="高级查询" width="45%" @getFormData="submitQueryForm"></query-dialog>
    <!--合同取消登记-->
    <cancel-contract-dialog ref="cancelRef" title="合同取消登记" width="35%" @getFormData="submitCancelForm"></cancel-contract-dialog>
    <!--合同移交-->
    <transfer-contract-dialog ref="transferRef" title="原件移交" @getFormData="submitTransferForm"></transfer-contract-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import pagination from '../../../../components/pagination/index.vue'
  import HeadButton from './button/HeadButton.vue'
  import TableButton from './button/TableButton.vue'
  import AddContractDialog from './dialog/AddContractDialog.vue'
  import QueryDialog from './dialog/QueryDialog.vue'
  import CancelContractDialog from './dialog/CancelContractDialog.vue'
  import TransferContractDialog from './dialog/TransferContractDialog.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      pagination,
      HeadButton,
      TableButton,
      AddContractDialog,
      QueryDialog,
      CancelContractDialog,
      TransferContractDialog
    },
    props: {},
    model: {
      prop: 'model',
      event: 'getPageShow'
    },
    watch: {},
    computed: {
      ...mapState({
        advancedQuery: state=>state.nonBusContract.advancedQuery,
        contracts: state=>state.nonBusContract.contracts,
      })
    },
    //数据节点
    data() {
      return {
        tagType:'click',
        pageShow: {
          pageInfo: {
            page: 1,
            limit: 30,
          },
          advancedQuery: {}
        },
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetContacts(this.pageShow)
    },
    //自定义函数节点
    methods: {
      ...mapMutations('nonBusContract',{
        updateContractInfo: 'updateContractInfo'
      }),
      ...mapMutations({
        updateAdvancedQuery: 'nonBusContract/updateAdvancedQuery',
        updateModel: 'template/updateModel'
      }),
      ...mapActions({
        networkGetContacts: 'nonBusContract/networkGetContacts',
        networkAddContact: 'nonBusContract/networkAddContact',
        networkGetContactBasic:'nonBusContract/networkGetContactBasic',
        networkUpContract:'nonBusContract/networkUpContract',
        networkCancelContact:'nonBusContract/networkCancelContact',
        networkAddTransfer:'originalScript/networkAddTransfer',

      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.pageShow.advancedQuery = this.advancedQuery
        this.networkGetContacts(this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.pageShow.advancedQuery = this.advancedQuery
        this.networkGetContacts(this.pageShow)
      },
      headBtnClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.addRef.openDialog()
            break
          case 2:
            this.$refs.queryRef.openDialog()
            break
          case 3:
            this.$router.push({path: '/contract/original_script'})
            break
          case 5:
            let ref={
              code:'402880fa74e735230174ec6c6f79000a',
              name:'合同模块/非业务合同',
              modelName:'ht'
            }
            this.updateModel(ref)
            this.$router.push({path: '/contract/template_manager'})
            break

        }
      },
      tableBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.updateContractInfo(data)
            this.networkGetContactBasic(data.keyid)
            this.$router.push({path: '/contract/basic_manager'})
            break
          case 2:
            this.$refs.cancelRef.openDialog(data)
            break
          case 3:
            this.$refs.transferRef.openDialog(data)
            break
          case 4:
            break
          case 5:
            break
        }
      },
      submitAddContract(data) {
        this.networkAddContact(data)
      },
      submitQueryForm(data) {
        this.updateAdvancedQuery(data)
        this.pageShow.advancedQuery=data
        this.networkGetContacts(this.pageShow)
      },
      submitCancelForm(data){
        this.networkCancelContact(data).then(item=>{
          if (item)  this.networkGetContacts(this.pageShow)
        })
      },
      submitTransferForm(formDataArray){
        formDataArray.forEach(item=>{
          this.networkAddTransfer(item)
        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .search_container {
    margin-bottom: 20px;
  }

  .searchArea {
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 18px 18px 0;
  }

  .el-tag {
    cursor: pointer
  }
</style>
