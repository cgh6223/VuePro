<template>
  <!--往来款台账-->
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="collection.collTime" label="收款时间" align="center"></el-table-column>
        <el-table-column prop="collection.sumType" label="收款类型" :formatter="sumTypeShow" align="center"></el-table-column>
        <el-table-column prop="collection.payer" label="付款人" align="center"></el-table-column>
        <el-table-column prop="collection.sumMoney" label="收款金额(总)" align="center"></el-table-column>
        <!--上面合并行-->
        <el-table-column prop="collType" label="收款类型" :formatter="collTypeShow" align="center"></el-table-column>
        <el-table-column prop="collMoney" label="收款金额" align="center"></el-table-column>
        <el-table-column prop="orgname" label="所属组织" align="center"></el-table-column>
        <!-- <el-table-column prop="" label="类型" align="center"></el-table-column> -->
        <el-table-column prop="contractId" label="合同编号" align="center"></el-table-column>
        <el-table-column prop="contract_name" label="合同名称" align="center"></el-table-column>
        <!-- <el-table-column prop="" label="项目情况" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" width="300" trigger="click">
              <el-table :data="scope.row.peoject">
                <el-table-column width="150" property="projectNumber" label="项目编号"></el-table-column>
                <el-table-column width="150" property="projectName" label="项目名称"></el-table-column>
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="退款时间" align="center"></el-table-column>
        <el-table-column prop="" label="退款回执单" align="center" width="100">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="往来款金额" align="center" width="100"></el-table-column> -->
        <!-- <el-table-column prop="" label="操作" align="center" width="200" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="$refs.perfectRef.openDialog()">完善退款信息</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
    <div class="dialog">
      <perfect-refund-dialog ref="perfectRef" title="完善退款信息"></perfect-refund-dialog>
      <upload-receipt-dialog ref="receiptRef" title="上传回执单"></upload-receipt-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import UploadReceiptDialog from "../dialog/UploadReceiptDialog.vue"
  import PerfectRefundDialog from "../dialog/PerfectRefundDialog.vue"

  export default {
    components: {

      UploadReceiptDialog,
      PerfectRefundDialog
    },
    props: {
      dataList: ''
    },
    watch: {},
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      detailsOpen() {
        this.$refs.detailsRef.openDialog();
      },
      refunOpen() {
        this.$refs.refundRef.openDialog();
      },
      receiptOpen() {
        this.$refs.receiptRef.openDialog();
      },
      sumTypeShow(row,col){
        let result="现金";
        if(row.sumType=="commpany") result="公账";
        return result;
      },
      collTypeShow(row,col){
        return "其它往来款";
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
