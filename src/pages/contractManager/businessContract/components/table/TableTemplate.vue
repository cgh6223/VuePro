<template>
  <div class="body">
    <div class="status">
      <el-radio-group v-model="radioStatus" @change="radioStatusChange">
        <el-radio v-for="status in statusList"
                  :label="status.staticsCode"
                  :key="status.keyid">
          {{status.listname}}
        </el-radio>
      </el-radio-group>
    </div>
    <div class="table">
      <el-table
              :data="contracts.dataList"
              style="width: 100%"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="contractCode" label="合同编号" align="center" width="150" fixed="left"></el-table-column>
        <el-table-column prop="contractName" label="合同名称" align="center" width="200" fixed="left"></el-table-column>
        <el-table-column prop="createddateTime" label="创建时间" align="center" width="100"></el-table-column>
        <el-table-column prop="contractBurchaser" label="客户方名称" align="center" width="250">
          <template slot-scope="scope">
            <template v-if="scope.row.contractBurchaser!==''">
              <el-popover :trigger="tagType" placement="top">
                <!--<p>客户方名称: {{ scope.row.contractBurchaser }}</p>-->
                <p>第三方名称: {{ scope.row.thirdparty }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.contractBurchaser }}</el-tag>
                </div>
              </el-popover>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="contractBurchaserPerson" label="合同上客户方项目负责人" align="center" width="180">
          <template slot-scope="scope">
            <template v-if="scope.row.contractBurchaserPerson!==''">
              <el-popover :trigger="tagType" placement="top">
                <p>电话: {{ scope.row.contractBurchaserPhone }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.contractBurchaserPerson}}</el-tag>
                </div>
              </el-popover>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="concludesigndateTime" label="签订时间" align="center" width="110px"></el-table-column>
        <!--框架入库-->
        <template v-if="contractType==='402880fa74c3492d0174d989e5de0044'">
          <el-table-column prop="" label="是否有有效期" align="center" width="110px">
            <template slot-scope="scope">
              <template v-if="scope.row.issxpiryDate">
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
        </template>
        <el-table-column prop="contractSellerPerson" label="合同上公司项目负责人" align="center" width="170"></el-table-column>
        <!--综合业务-->
        <template v-if="contractType==='402880fa74c3492d0174d989b38e0043'
        || contractType==='402880fa74c3492d0174d989e5de0044'">
          <el-table-column prop="contractVocationalTypeName" label="涉及业务" align="center" width="100px"></el-table-column>
        </template>
        <!--招标代理-->
        <template v-if="contractType!=='402880fa74c3492d0174d988b0cb003f'">
          <el-table-column prop="projectSum" label="项目总投资" align="center" width="100px"></el-table-column>
          <el-table-column prop="" label="项目规模" align="center" width="100px">
            <template slot-scope="scope">
              <el-popover :trigger="tagType" placement="top">
                <div style="width: 300px">
                  <rea-textarea v-model="scope.row.projectScale" readonly></rea-textarea>
                </div>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">详细</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </template>
        <!--造价咨询-->
        <template v-if="contractType==='402880fa74c3492d0174d98812c0003e'">
          <el-table-column prop="" label="计价标准" align="center" width="250px">
            <template slot-scope="scope">
              <el-popover :trigger="tagType" placement="top">
                <div style="width: 300px">
                  <rea-textarea v-model="scope.row.castName" readonly></rea-textarea>
                </div>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">详细</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </template>
        <!--工程监理-->
        <template v-if="contractType==='402880fa74c3492d0174d988f7670040'">
          <el-table-column prop="installsum" label="建筑安装工程费" align="center" width="150px"></el-table-column>
          <el-table-column prop="projectAddress" label="工程建设地" align="center" width="150px"></el-table-column>
          <el-table-column prop="proTimeLimit" label="监理工期(天)" align="center" width="130px"></el-table-column>
          <el-table-column prop="enPersonName" label="总监理工程师" align="center" width="130px"></el-table-column>
        </template>
        <!--招标代理-->
        <template v-if="contractType==='402880fa74c3492d0174d988b0cb003f'">
          <el-table-column prop="projectSum" label="项目总投资/采购预算" align="center" width="150px"></el-table-column>
          <el-table-column prop="projectScale" label="项目规模/采购内容" align="center" width="150px">
            <template slot-scope="scope">
              <el-popover :trigger="tagType" placement="top">
                <div style="width: 300px">
                  <rea-textarea v-model="scope.row.projectScale" readonly></rea-textarea>
                </div>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">详细</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </template>
        <el-table-column prop="projectStandard" label="收费标准" align="center">
          <template slot-scope="scope">
            <el-popover :trigger="tagType" placement="top">
              <div style="width: 300px">
                <rea-textarea v-model="scope.row.projectStandard" readonly></rea-textarea>
              </div>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>

        </el-table-column>
        <!--工程监理-->
        <template v-if="contractType==='402880fa74c3492d0174d988f7670040'">
          <el-table-column prop="" label="延期收费标准" align="center" width="120">
            <template slot-scope="scope">
              <el-popover :trigger="tagType" placement="top">
                <div style="width: 300px">
                  <rea-textarea v-model="scope.row.deferredCharges" readonly></rea-textarea>
                </div>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">详细</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </template>
        <el-table-column prop="contractSum" label="合同酬金" align="center"></el-table-column>
        <el-table-column prop="isgather" label="是否缴纳保证金" align="center" width="150px">
          <template slot-scope="scope">
            <template v-if="scope.row.isgather">
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
        <el-table-column prop="" label="原件情况" align="center">
          <template slot-scope="scope">
            <el-popover :trigger="tagType" placement="top">
              <div>
                <el-table :data="scope.row.turnOvers">
                  <el-table-column prop="resourcename" label="资料名称" align="center"></el-table-column>
                  <el-table-column prop="outOrgName" label="移交组织" align="center"></el-table-column>
                  <el-table-column prop="outperson" label="移交人" align="center"></el-table-column>
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
        <el-table-column prop="methodDisputeName" label="合同争议方式" align="center" width="130">
          <template slot-scope="scope">
            <el-popover :trigger="tagType" placement="top">
              <p v-if="scope.row.methodDisputeName==='仲裁委员会申请仲裁'">仲裁地点: {{scope.row.disputeName}}</p>
              <p v-if="scope.row.methodDisputeName==='人民法院起诉'">法院名称: {{scope.row.disputeName}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag v-if="scope.row.methodDisputeName!==''" size="medium">{{scope.row.methodDisputeName}}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="studyOutOrgName" label="合同归属" align="center" width="100"></el-table-column>
        <el-table-column label="操作" align="center" width="250px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
              :pageTotal="contracts.total"
              @handleCurrentChange="handleCurrentChange"
              @handleSizeChange="handleSizeChange">
      </pagination>
    </div>
    <div class="dialog">
      <!--合同取消登记-->
      <cancel-contract-dialog ref="cancelRef" title="合同取消登记" width="35%"
                              @getFormData="submitCancelForm"></cancel-contract-dialog>
      <!--合同移交-->
      <transfer-file-dialog ref="transferRef" title="原件移交" @getFormData="submitTransferForm"></transfer-file-dialog>
      <!--合同确定-->
      <ok-contract-dialog ref="okRef" title="合同确定申请" width="30%" @getFormData="submitOkForm"></ok-contract-dialog>
      <!--合同执行情况-->
      <contract-execute-dialog ref="executeRef" title="合同执行情况" width="90%"></contract-execute-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  import CarryOutTable from './CarryOutTable.vue'
  import CancelContractDialog from '../dialog/CancelContractDialog.vue'
  import OkContractDialog from '../dialog/OkContractDialog.vue'
  import TransferFileDialog from '../dialog/TransferFileDialog.vue'
  import ContractExecuteDialog from '../dialog/ContractExecuteDialog.vue'

  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      TableButton,
      pagination,
      CarryOutTable,
      CancelContractDialog,
      OkContractDialog,
      TransferFileDialog,
      ContractExecuteDialog
    },
    props: {
      contractType: '',
      statusList: [Array]
    },
    watch: {
    },
    computed: {
      ...mapState({
        contracts: state => state.businessContract.contracts
      })
    },
    //数据节点
    data() {
      return {
        tagType: 'click',
        pageShow: {
          page: 1,
          limit: 30,
        },
        radioStatus: '0',
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      ...mapMutations('businessContract', {
        updateContractInfo: 'updateContractInfo'
      }),
      ...mapActions({
        networkGetContacts: 'networkGetContacts',
        networkGetContactBasic: 'businessContract/networkGetContactBasic',
        networkAddTransfer: 'originalScript/networkAddTransfer',
        networkOkContact: 'businessContract/networkOkContact',
        networkCancelContact: 'businessContract/networkCancelContact',
      }),
      radioStatusChange(status) {
        this.$emit('showStatus', status)
      },
      handleCurrentChange(val) {
        this.pageShow.pageInfo.page = val;
        this.$emit('pageInfoChange', this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.pageInfo.limit = val;
        this.$emit('pageInfoChange', this.pageShow)
      },
      tableBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.networkGetContactBasic(data.keyid)
            this.updateContractInfo(data)
            this.$router.push({path: '/contract/business_basic_manager'})
            break
          case 2:
            this.$refs.cancelRef.openDialog(data)
            break
          case 3:
            this.$refs.transferRef.openDialog(data)
            break
          case 4:
            this.$refs.okRef.openDialog(data)
            break
          case 5:
            this.$refs.executeRef.openDialog(data)
            break
        }
      },
      //提交取消合同表单
      submitCancelForm(formData) {
        this.networkCancelContact(formData)
      },
      //提交合同移交表单
      submitTransferForm(formData) {
        this.networkAddTransfer(formData)
      },
      //提交确认合同圣切
      submitOkForm(formData) {
        this.ddform('v_2020_htgl_yw_htwc', {
          c: {code: formData.contractCode, name: formData.contractName},
          moneyList: [{name: '合同酬金', value: formData.contractSum}, {name: '实际收入', value: formData.officialReceipts}],
          muitList: [{name: '差异描述', value: formData.differenceDesc}]
        }).then(flowId => {
          this.networkOkContact(formData).then(item => {
            this.ddflow(0, 0, {
              baseId: item.keyid,
              baseUrl: 'agr/busicontractbase',
              baseColumn: 'allstatuscode',
              flowId: flowId,
              fType: '合同完成申请'
            })
          })
        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .el-table {
    .el-tag {
      cursor: pointer;
    }
  }
</style>
