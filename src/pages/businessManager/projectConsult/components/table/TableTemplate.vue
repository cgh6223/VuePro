<template>
  <div class="body">
    <div class="table">
      <el-table ref="tableRef" :data="items.dataList" style="width: 100%" align="center" height="7rem"
                highlight-current-row
                :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="projectCode" label="项目编号" align="center" fixed="left" width="150"></el-table-column>
        <el-table-column prop="projectName" label="项目名称" align="center" fixed="left" width="180"></el-table-column>
        <el-table-column prop="createddateTime" label="创建时间" align="center" width="80"></el-table-column>
        <el-table-column prop="contractTypeName" label="合同类型" align="center" width="80"></el-table-column>
        <el-table-column prop="contractCode" label="合同编号" align="center" width="150"></el-table-column>
        <el-table-column prop="contractName" label="合同名称" align="center" width="180"></el-table-column>
        <el-table-column prop="contractBurchaser" label="客户方名称" align="center" width="180"></el-table-column>
        <el-table-column prop="projectSum" label="项目总投资" align="center" width="100"></el-table-column>
        <el-table-column prop="projectTypeName" label="项目类型" align="center" width="100"></el-table-column>
        <el-table-column prop="projectMajorName" label="专业工程分类" align="center" width=" 120"></el-table-column>
        <el-table-column prop="projectPolicyName" label="决策类型" align="center" width="100"></el-table-column>

        <el-table-column prop="groupWorks" label="工作组成员" align="center" width="100">
          <template slot-scope="scope">
            <com-popover data-type="ky" :data="scope.row.groupWorks" label="projectJobName" prop="projectPersonName"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="projectcontact" label="委托联系人" align="center" width="100">
          <template slot-scope="scope">
            <com-popover :data="scope.row.projectcontact" :label-prop="clientTemplate"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="datajson" label="成果文件" align="center" width="100">
          <template slot-scope="scope">
            <com-popover data-type="obj" :data="scope.row.datajson" :label-prop="outcomeDocumentTemplate"></com-popover>
          </template>
        </el-table-column>

        <el-table-column prop="licensing" label="行政许可" align="center" width="100">
          <template slot-scope="scope">
            <com-popover :data="scope.row.licensing" :label-prop="adminTemplate"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="projectOrgName" label="项目归属" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="180" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <!--分页-->
      <pagination :pageTotal="items.total" @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>
    </div>

    <div class="dialog">
      <transfer-file-dialog ref="transferRef" title="原件移交" @getFormData="submitTransferForm"></transfer-file-dialog>
      <cancel-project-dialog ref="cancelRef" width="30%" title="项目取消登记"
                             @getFormData="submitCancelForm"></cancel-project-dialog>
      <cancel-project-dialog ref="cancelInfoRef" width="30%" title="项目取消信息"></cancel-project-dialog>
      <contract-execute-dialog title="合同执行情况" width="90%" ref="contractRef"></contract-execute-dialog>
    </div>

  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import TransferFileDialog from '../dialog/TransferFileDialog.vue'
  import CancelProjectDialog from '../dialog/CancelProjectDialog.vue'
  import ContractExecuteDialog from '../../../acomponents/ContractExecuteDialog.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      TableButton,
      ContractExecuteDialog,
      TransferFileDialog,
      CancelProjectDialog,
    },
    props: {},
    watch: {},
    computed: {
      ...mapState({
        items: state => state.projectConsult.items,
        item: state => state.item
      })
    },
    //数据节点
    data() {
      return {
        pageShow: {
          page: 1,
          limit: 30
        },
        //成果模板
        outcomeDocumentTemplate: [
          {
            label: '报告名称',
            prop: 'reportName'
          },
          {
            label: '报告出具时间',
            prop: 'reportTime'
          },
          {
            label: '咨询工程师执业章',
            prop: 'occupationSeal'
          },

        ],
        //委托人模板
        clientTemplate: [
          {
            label: '姓名',
            prop: 'contactname'
          },
          {
            label: '电话',
            prop: 'contactphone'
          },
          {
            label: '部门',
            prop: 'contactdepartment'
          },
          {
            label: '职务',
            prop: 'contactpost'
          },
        ],
        //行政许可模板
        adminTemplate: [
          {
            label: '行政许可名称',
            prop: 'permitName'
          },
          {
            label: '行政许可上的日期',
            prop: 'permitTime'
          },
        ],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {

      ...mapMutations({
        updateWorkbenchKeyid: 'workbench/updateWorkbenchKeyid',
        workbenchCurrentItem: 'workbench/updateCurrentItem',
        aStageCurrentItem: 'workbench/aStage/updateCurrentItem',
        cStageCurrentItem: 'workbench/cStage/updateCurrentItem'
      }),
      ...mapActions({
        networkUpItem: 'projectConsult/networkUpItem',
        networkGetItemByKeyId: 'projectConsult/networkGetItemByKeyId',
        networkGetItems: 'projectConsult/networkGetItems',
        //原件移交
        networkAddTransfer: 'originalScript/networkAddTransfer',
      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.$emit('handlePageInfo', this.$myfunction.copyData(this.pageShow))
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.$emit('handlePageInfo', this.$myfunction.copyData(this.pageShow))
      },
      tableBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.clickTable(data)
            break;
          case 2:
            //跳转哪个工作台
            this.updateWorkbenchKeyid('402880fa75fcce490175fea4c804006e')
            //更新工作组的项目
            this.workbenchCurrentItem(data)
            this.aStageCurrentItem(data)
            this.cStageCurrentItem(data)
            this.$router.push({path: 'workbench'})
            break;
          case 3:
            this.$refs.transferRef.openDialog(data)
            break;
          case 4:
            this.cancelOpenDialog(data)
            break;
          case 5:
            this.$refs.contractRef.openDialog()
            break;
          case 6:
            this.$refs.cancelInfoRef.openDialog(data, false)
            break;
        }
      },
      cancelOpenDialog(data) {
        this.networkGetItemByKeyId(data.keyid).then(item => {
          this.$refs.cancelRef.openDialog(item)
        })

      },
      submitCancelForm(formData) {
        this.networkUpItem(formData)
      },
      submitTransferForm(formList) {
        formList.forEach(item => {
          this.networkAddTransfer(item)
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
