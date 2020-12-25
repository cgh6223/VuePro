<template>
  <!--发票管理台账-->
  <div class="body">
    <div class="table">	
      <el-table
        :data="mytableData"
        align="center"
        height="7.5rem"
        highlight-current-row
        :header-cell-style="{ fontSize: '14px' }"
      >
        <el-table-column
          prop="createTime"
          label="申请时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="orgName"
          label="申请组织"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createBy_name"
          label="申请人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop=""
          :formatter="TypeShow"
          label="类型"
          align="center"
        ></el-table-column>
        <!-- <el-table-column prop="" label="开票类型" align="center"></el-table-column> -->
        <el-table-column
          prop="payer"
          label="付款单位全称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sumMoney"
          label="开票金额"
          align="center"
        ></el-table-column>
        <!-- <el-table-column prop="" label="所属组织" align="center"></el-table-column> -->

        <el-table-column prop="" label="发票构成" align="center">
          <template slot-scope="scope">
            <el-popover placement="bottom" width="600" trigger="click">
              <el-table :data="scope.row.structData">
                <el-table-column
                  label="开票类型"
                  prop="categoryType"
                  :formatter="showCollType"
                ></el-table-column>
                <el-table-column
                  label="开票金额"
                  prop="money"
                ></el-table-column>
                <el-table-column
                  label="合同名称"
                  prop="contractName"
                ></el-table-column>
                <el-table-column
                  label="组织名称"
                  prop="orgName"
                ></el-table-column>
                <!-- <el-table-column label="" prop="enclosure">
                  <template slot-scope="scope2">
                    <el-button type="text">下载</el-button>
                  </template>
                </el-table-column> -->
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="" label="项目情况" align="center">
					<template slot-scope="scope">
						<el-popover-template  type="m" :label-prop="itemInfo" :data="scope.row.itemInfo"></el-popover-template>
					</template>
				</el-table-column> -->

        <el-table-column
          prop="billTime"
          label="开票日期"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="billNo"
          label="发票号"
          align="center"
        ></el-table-column>
        <el-table-column prop="" label="附件" align="center">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="回款情况" align="center">
          <template slot-scope="scope">
             <el-popover placement="bottom" width="600" trigger="click">
              <el-table :data="scope.row.receivableData">               
                <el-table-column
                  label="收款金额"
                  prop="total"
                ></el-table-column>
                <el-table-column
                  label="收款时间"
                  prop="collTime"
                ></el-table-column>               
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column
          prop="receiveMoney"
          label="回款总额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sumMoney"
          label="应收账款"
          align="center"
        ></el-table-column>
        <el-table-column
          prop=""
          label="操作"
          align="center"
          width="200"
          fixed="right"
        >
          <template slot-scope="scope">
            <table-button
              :scope="scope.row"
              @click="tableButtonClick"
            ></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <update-invoice-dialog
        title="发票登记"
        ref="updateRef"
        @getFormData="updateBill"
      ></update-invoice-dialog>
      <invalid-inovice-dialog
        title="申请作废"
        ref="invalidRef"
      ></invalid-inovice-dialog>
      <scanner-invoice-dialog
        title="查看扫描件"
        ref="scannerRef"
      ></scanner-invoice-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import TableButton from "../button/TableButton.vue";
import UpdateInvoiceDialog from "../dialog/UpdateInvoiceDialog.vue";
import InvalidInoviceDialog from "../dialog/InvalidInoviceDialog.vue";
import ScannerInvoiceDialog from "../dialog/ScannerInvoiceDialog.vue";
//import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'
import { updateBill} from "../../../../../api/webapi-fin.js";
export default {
  components: {
    TableButton,
    UpdateInvoiceDialog,
    InvalidInoviceDialog,
    ScannerInvoiceDialog,
    //ElPopoverTemplate
  },
  props: {
	 mytableData:'',
	 title:'' 
  },
  watch: {},
  //数据节点
  data() {
    return {
      currentRow:''
    };
  }, 
  //生命周期函数节点
  created() {	
	 
  },
  //自定义函数节点
  methods: {
	  showCollType(row,col){
		   let result = "";
      switch (row.categoryType) {
        case "1":
          result = "服务费";
          break;
        case "3":
          result = "文件费";
          break;
        case "4":
          result = "管理费";
          break;
        case "5":
          result = "风险（履约）保证金";
          break;
        case "6":
          result = "投标保证金";
          break;
        case "7":
          result = "其他往来款";
          break;
        case "8":
          result = "其他收款";
          break;
      }
      return result;
	  },
    tableButtonClick(btn, data) {
      this.currentRow=data;
      switch (btn) {
        case 1://开票登记
        let flowStatus = data.flowStatus;
        if(flowStatus!='COMPLETED'){
          this.$message.success('流程还在审核中');
        }else{
          this.$refs.updateRef.openDialog();
        }          
          break;
        case 2://申请作废
          this.$refs.invalidRef.openDialog();
          break;
        case 3:
          this.$refs.scannerRef.openDialog();
          break;      
      }
    },
    //发票登记（更新）
    updateBill(data){
        data = Object.assign(this.currentRow,data);
        let pa = {jsondata:JSON.stringify(data)};
        updateBill(pa).then(res=>{
          if(res.code==200){
            this.$message.success("添加成功");            
          }
        })
    },
    TypeShow(row, col) {
      let result = "登记";
      if (row.billType=="0") {
        result = "申请";
      }
      return result;
    }
  }
};
</script>
<style lang='less' scoped>
</style>
