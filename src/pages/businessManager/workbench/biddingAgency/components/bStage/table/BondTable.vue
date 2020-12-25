<!-- 编制及审核资格预审文件台账 -->
<template>
  <div>
    <div style="margin: 5px 5px;">
      <el-tabs tab-position="top">
        <template v-for="(item,index) in subcontractNames">
          <el-tab-pane :label="item.name">
            <el-col :span="4" style="margin: 10px 0;"><label>报名家数：{{item.signUpNumber}}</label></el-col>
            <el-col :span="4" style="margin: 10px 0;"><label>保证金缴纳家数：{{item.paymentNumber}}</label></el-col>
            <el-col :span="4" style="margin: 10px 0;"><label>已退家数：{{item.returnNumber}}</label></el-col>
            <el-col :span="4" style="margin: 10px 0;"><label>未退家数：{{item.onReturnUpNumber}}</label></el-col>
            <el-col :span="8" style="margin: 10px 0;">
              <el-button style="float: right" type="primary" size="mini" @click="$refs.addSaleRef.openDialog()">新增文件发售</el-button>
            </el-col>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="table">
      <el-table :data="materialInfo"
                :span-method="objectSpanMethod"
                style="width: 100%"
                align="center"
                height="350px"
                highlight-current-row
                :header-cell-style="{fontSize:'10px'}">

        <el-table-column prop="createddateTime" label="创建时间" align="center" width="150"></el-table-column>
        <el-table-column prop="filesalename" label="分包/分标段名称" align="center" width="150" fixed="left"></el-table-column>
        <el-table-column prop="" label="文件费收费时间" align="center" width="140">
          <template slot-scope="scope">
            <span v-if="scope.row.filesalebegindateTime!==''&& scope.row.filesalebegindateTime!==''">
              {{scope.row.filesalebegindateTime}}-{{scope.row.filesalebegindateTime}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="filecost" label="文件费金额" align="center" width="100"></el-table-column>
        <el-table-column label="保证金收款时间" align="center" width="140">
          <template slot-scope="scope">
            <span v-if="scope.row.cashdeposittime!==''&& scope.row.cashdepositendtime!==''">
              {{scope.row.cashdeposittime}}-{{scope.row.cashdepositendtime}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="cashdepositcost" label="保证金金额" align="center" width="100"></el-table-column>
        <el-table-column prop="children.companyname" label="单位名称" align="center" width="150"></el-table-column>
        <el-table-column prop="children.filesaledateTime" label="文件费收款时间" align="center" width="140"></el-table-column>
        <el-table-column prop="children.cashdepositdateTime" label="保证金收款时间" align="center" width="140"></el-table-column>
        <el-table-column prop="children.refunddateTime" label="保证金退回时间" align="center" width="100"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100">
          <template slot-scope="scope">
            <template v-if="!$myfunction.isEmpty(scope.row.children)">
              <el-button type="text" @click="$refs.upComRef.openDialog('edit',scope.row.children)">修改</el-button>
              <el-button type="text" @click="$refs.perfectRef.openDialog(scope.row.children)">完善信息</el-button>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="120" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.upSaleRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="$refs.addComRef.openDialog('add',scope.row)">新增单位</el-button>
            <el-button type="text" @click="">文件费推送</el-button>
            <el-button type="text" @click="">保证金推送</el-button>
            <status-button title="文件费已推送"></status-button>
            <status-button title="保证金已推送"></status-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div lang="dialog">
      <add-file-sale-dialog title="新增文件发售" ref="addSaleRef" width="40%" @getFormData="networkAddData"></add-file-sale-dialog>
      <add-file-sale-dialog title="修改文件发售" ref="upSaleRef" width="40%" @getFormData="networkUpData"></add-file-sale-dialog>

      <add-company-dialog title="新增单位" width="30%" ref="addComRef" @getFormData="networkAddCom"></add-company-dialog>
      <add-company-dialog title="修改单位" width="30%" ref="upComRef" @getFormData="networkUpCom"></add-company-dialog>

      <perfect-file-dialog title="完善信息" width="30%" ref="perfectRef" @getFormData="networkUpCom"></perfect-file-dialog>
    </div>
  </div>


</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddCompanyDialog from "../dialog/BondTable/AddCompanyDialog.vue"
  import AddFileSaleDialog from "../dialog/BondTable/AddFileSaleDialog.vue"
  import PerfectFileDialog from "../dialog/BondTable/PerfectFileDialog.vue"

  import {mapState} from 'vuex'
  import {getBond, addBond, upBond, delBond,addBondCom,upBondCom} from '../../../../../../../api/workbench/webapi-biddingAgency.js'

  export default {
    components: {
      HeadRightButton,
      AddCompanyDialog,
      AddFileSaleDialog,
      PerfectFileDialog,
    },
    props: {
      typeCode: {
        type: String,
        default: ''
      }
    },
    mounted() {

    },
    watch: {
      activeName(newValue) {

      },
      subcontractNames(newValue) {

      },
      materialInfo(newValue){

      }
    },
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        activeName: 'A包',
        subcontractNames: [],
        materialInfo: [],
        tableData: [],
        OrderIndexArr: []

      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDatas()
    },
    //自定义函数节点
    methods: {
      networkGetDatas() {
        this.materialInfo=[]
        this.subcontractNames=[]
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typeCode: this.typeCode
        }
        getBond(ref).then(item => {
          item.data.forEach(refs=>{
            let obj={
              children:{}
            }
            let subcontractName={
              id:refs.keyid,
              name:refs.filesalename,
              signUpNumber: refs.fileSaleList.length,
              paymentNumber: 0,
              returnNumber: 0,
              onReturnUpNumber: 0,
            }

            Object.assign(obj,refs)
            if (refs.fileSaleList.length > 0) {
              refs.fileSaleList.forEach(ref=>{
                if (ref.cashdepositdateTime!=='') {
                  subcontractName.paymentNumber++
                }
                if (ref.refunddateTime!=='') {
                  subcontractName.returnNumber++
                }
                obj.children=ref
                this.materialInfo.push(this.$myfunction.copyData(obj))
              })
            }else {
              this.materialInfo.push(obj)
            }
            subcontractName.onReturnUpNumber=subcontractName.paymentNumber-subcontractName.returnNumber
            this.subcontractNames.push(this.$myfunction.copyData(subcontractName))
          })
          this.tableData= []
          this.OrderIndexArr= []
          this.getOrderNumber('filesalename')
        })

      },
      networkAddData(formData) {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typeCode: this.typeCode
        }
        Object.assign(formData, ref)
        addBond(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      networkUpData(formData) {
        formData.proofcount = formData.proofcount + 1
        upBond(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      //新增单位
      networkAddCom(formData){
        addBondCom(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      networkUpCom(formData){
        upBondCom(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },

      //合并项计算方法
      getOrderNumber(firstColumn) {
        let OrderObj = {}
        this.materialInfo.forEach((element, index) => {
          element.rowIndex = index
          if (OrderObj[element[firstColumn]]) {
            OrderObj[element[firstColumn]].push(index)
          } else {
            OrderObj[element[firstColumn]] = []
            OrderObj[element[firstColumn]].push(index)
          }
        })
        // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
        for (let k in OrderObj) {
          if (OrderObj[k].length > 1) {
            this.OrderIndexArr.push(OrderObj[k])
          }
        }
      },
      objectSpanMethod: function ({row, column, rowIndex, columnIndex}) {
        if (columnIndex < 6 || columnIndex === 11) {
          for (let i = 0; i < this.OrderIndexArr.length; i++) {
            let element = this.OrderIndexArr[i]
            for (let j = 0; j < element.length; j++) {
              let item = element[j]
              if (rowIndex == item) {
                if (j == 0) {
                  return {
                    rowspan: element.length,
                    colspan: 1
                  }
                } else if (j != 0) {
                  return {
                    rowspan: 0,
                    colspan: 0
                  }
                }
              }
            }
          }
        }
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
