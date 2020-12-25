<template>
  <!--收款台账-->
  <div class="body">
    <div class="table">
      <el-table
        :data="dataList"
        align="center"
        height="7.5rem"
        highlight-current-row
        :header-cell-style="{ fontSize: '14px' }"
      >
        <el-table-column
          prop="collTime"
          label="收款时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="collType"
          label="付款类型"
          align="center"
          :formatter="showParentCollType"
        ></el-table-column>
        <el-table-column
          prop="payer"
          label="付款人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sumMoney"
          label="收款金额"
          align="center"
        ></el-table-column>

        <el-table-column prop="" label="收款明细" align="center" width="80">
          <template slot-scope="scope">
            <el-popover placement="bottom" width="700" trigger="click">
              <el-table :data="scope.row.childrens">
                <el-table-column
                  label="收款类型"
                  prop="sumType"
                  :formatter="showCollType"
                ></el-table-column>
                <el-table-column
                  label="收款金额"
                  prop="collMoney"
                ></el-table-column>
                <el-table-column
                  label="合同名称"
                  prop="contract_name"
                ></el-table-column>
                <el-table-column
                  label="组织名称"
                  prop="orgname"
                ></el-table-column>
                <el-table-column
                  label="项目名称"
                  prop="project_name"
                ></el-table-column>
                <el-table-column label="操作" prop="">
                  <template slot-scope="scope2">
                    <el-popover placement="top" width="550" trigger="click">
              <el-table :data="scope2.row.childrens">
                <el-table-column
                  width="200"
                  prop="bill.billNo"
                  label="发票号"
                ></el-table-column>
                <el-table-column
                  width="200"
                  prop="collTime"
                  label="登记时间"
                ></el-table-column>
                 <el-table-column
                  width="140"
                  prop="total"
                  label="登记金额"
                ></el-table-column>
              </el-table>
              <el-button slot="reference" type="text" v-show="scope2.row.collType==1||scope2.row.collType==3">登记详细</el-button>
            </el-popover>

                    <el-button type="text" v-show="scope2.row.collType==1||scope2.row.collType==3" @click="RegisterBill">发票登记</el-button>
                    <!-- <el-button type="text" v-show="scope2.row.collType==1||scope2.row.collType==3">删除</el-button> -->
                  </template>
                </el-table-column>
                <!-- <el-table-column label="" prop="enclosure">
                  <template slot-scope="scope2">
                    <el-button type="text">下载</el-button>

                    <el-button type="text" v-show="scope2.row.collType==1||scope2.row.collType==3" @click="RegisterBill(scope2.row)">发票登记</el-button>
                    <el-button type="text" v-show="scope2.row.collType==1||scope2.row.collType==3" @click="DelBill(scope2.row)">删除</el-button>

                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column
          prop="drawback.drawbackMoney"
          label="退款金额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="drawback.creatTime"
          label="退款时间"
          align="center"
        ></el-table-column>
         <!-- <el-table-column prop="" label="退款回执单" align="center" width="100">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>-->
        <el-table-column prop="drawback.drawbackAttach" label="收款回执单" align="center" width="100">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column
          prop=""
          label="实际收款金额"
          align="center"
          width="120"
        ></el-table-column> -->

        <el-table-column
          prop=""
          label="操作"
          align="center"
          width="200"
          fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableClick"></table-button>

            <!-- <el-button type="text" size="mini" @click="$refs.updateRef.openDialog()">修改</el-button>
            <el-button type="text" size="mini">删除</el-button>
            <el-button type="text" size="mini" @click="detailsOpen">明细登记</el-button>
            <el-button type="text" size="mini" @click="refunOpen">退款申请</el-button>
            <status-tag :data="{id:1,msg:'状态显示'}"></status-tag>

            <el-button type="text" size="mini" @click="$refs.perfectRef.openDialog()">完善退款信息</el-button> -->
          </template>
        </el-table-column>
      </el-table>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <insert-collection-dialog
        ref="updateRef"
        title="修改"
      ></insert-collection-dialog>
      <DetailsReristDialog
        ref="detailsRef"
        @getFormData="detailShow"
        title="明细登记"
      ></DetailsReristDialog>
      <refund-application-dialog
        ref="refundRef"
        @getFormData="refshow"
        title="退款申请"
      ></refund-application-dialog>
      <upload-receipt-dialog
        ref="receiptRef"
        title="上传回执单"
      ></upload-receipt-dialog>
      <perfect-refund-dialog
        ref="perfectRef"
        title="完善退款信息"
        @getFormData="perfectShow"
      ></perfect-refund-dialog>
      <!-- <invoice-registration-dialog
        ref="invoiceRef"
        title="发票登记"
      ></invoice-registration-dialog> -->
      <reg-bill-dialog
      ref="regBillRef"
      title="发票登记"
      @getFormData="regBillShow"
      ></reg-bill-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import DetailsReristDialog from "../dialog/DetailsReristDialog.vue";
import RefundApplicationDialog from "../dialog/RefundApplicationDialog.vue";
import UploadReceiptDialog from "../dialog/UploadReceiptDialog.vue";
import InvoiceRegistrationDialog from "../dialog/InvoiceRegistrationDialog.vue";
import InsertCollectionDialog from "../dialog/InsertCollectionDialog.vue";
import PerfectRefundDialog from "../dialog/PerfectRefundDialog.vue";
import StatusTag from "../../../../../components/StatusTag.vue";
import tableButton from "../button/CollectionTableButton.vue";
import regBillDialog from "../dialog/RegisterBill.vue";
import { mapActions, mapState } from "vuex";
import {
  addCollectionList,
  getByID,
  updateCollection,
  addDrawback,
  addConllBill,
  complateDrawback
} from "../../../../../api/webapi-fin.js";
import { startFlow } from "../../../../../api/webapi-flow.js";
export default {
  components: {
    DetailsReristDialog,
    RefundApplicationDialog,
    UploadReceiptDialog,
    InvoiceRegistrationDialog,
    InsertCollectionDialog,
    PerfectRefundDialog,
    StatusTag,
    tableButton,
    regBillDialog
  },
  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {},
  //数据节点
  data() {
    return {
      currentRow: {},
      currentCollListRow:{}
    };
  },
  //生命周期函数节点
  created() {
    // this.networkGetSelect(['finDetailType']);
    this.networkGetAllOrg();
  },
  computed: {
    ...mapState({
      myfilter: (state) => state.loadType,
      currentUser: "currentUser",
    }),
  },
  //自定义函数节点
  methods: {
    ...mapActions({
      networkGetAllOrg: "orgAndPost/networkGetAllOrg",
    }),
    showParentCollType(row) {
      let result = "";
      switch (row.sumType) {
        case "company":
          result = "公账";
          break;
        case "cash":
          result = "现金";
          break;
      }
      return result;
    },
    showCollType(row, col) {
      let result = "";

      switch (row.collType) {
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
    tableClick(btn, data) {
      this.currentRow = data;
      console.log('data',data);
      switch (btn) {
        case 1: //修改
          //this.$parent.$parent.$parent.parentTest();
          //this.$refs.updateRef.openDialog();
          this.$message.success( this.currentRow.keyid);
          break;
        case 2: //删除
         this.$message.success( data.keyid);
          //this.$refs.updateRef.openDialog();
          break;
        case 3: //明细登记
          console.log(this.myfilter.finDetailType.list);
          this.$refs.detailsRef.openDialog();
          break;
        case 4: //退款申请
          this.$refs.refundRef.openDialog();
          break;
        case 5: //完善退款信息
          this.$refs.perfectRef.openDialog();
          break;
      }
    },
    detailsOpen() {
      this.$refs.detailsRef.openDialog();
    },
    //明细添加
    detailShow(data) {
      //console.log(data);
      let sum=0;
      this.currentRow.childrens.forEach(item=>{
          sum+=parseFloat(item.collMoney);
      });
      let sumMoney=parseFloat(this.currentRow.sumMoney);
      if(sumMoney<sum+parseFloat(data.collMoney)){
        this.$message.warning("明细金额合计大于总金额！！请进行调整！");
        return;
      }else{
        let conmax = Object.assign(data, {
        createBy: this.currentUser.dinCode,
        createBy_name: this.currentUser.userName,
        parentId: this.currentRow.keyid
      });
      let pa = { jsondata: JSON.stringify(conmax) };
      addCollectionList(pa).then((res) => {
        if (res.code == 200) {
          this.$message.success("明细添加成功");
          this.$parent.$parent.$parent.getall();
        }
      });
      }

    },
    //申请退款
    refshow(data) {
      let flows = [
        { name: "申请时间", controlType: "input_sign", value: "" },
        { name: "申请组织", controlType: "input_sign", value: "" },
        { name: "申请人", controlType: "input_sign", value: "" },
        { name: "退款金额", controlType: "input_money", value: "" },
        { name: "退款申请说明", controlType: "input_muit", value: "" },
      ];
      let dateNow = new Date();
      flows[0].value = dateNow.Format("yyyy-MM-dd");
      flows[1].value = this.currentUser.orgName;
      flows[2].value = this.currentUser.userName;
      flows[3].value = data.drawbackMoney;
      flows[4].value = data.drawbackDetail;
      let attachmentValue = JSON.stringify(flows); //这里一定要转换成字符串
      let passa = {
        startPerson: this.currentUser.dinCode,
        versionID: "v_2020_cwgl_tksq",
        jsonData: attachmentValue,
      };

      startFlow(passa).then((res) => {
        if (res.success) {
          let orgData = Object.assign(data, {
            drawbackId: res.msg,
            parentId: this.currentRow.keyid,
          });
          orgData = { jsondata: JSON.stringify(orgData) };
          addDrawback(orgData).then((res) => {
            if (res.code == 200) {
              this.$message.success("申请流程发起成功退款成功！");
              this.$parent.$parent.$parent.getall();
            }
          });
        }
      });
    },
    //完善退款
    perfectShow(data) {
      this.$msgbox
        .confirm("是否确定完善，一旦提交后收款总金额将会减少", "标题", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          let pa = { keyid: this.currentRow.drawback.keyid };
          pa = { jsondata: JSON.stringify(pa) };
          complateDrawback(pa).then(res=>{
              if(res.code==200)
              {
               this.$message.success("退款信息完善成功！");
               this.$parent.$parent.$parent.getall();

              }
          });
          // getByID(pa).then((res) => {
          //   if (res.code == 200) {
          //     let orgData = res.data;
          //     let sum =
          //       orgData.sumMoney - this.currentRow.drawback.drawbackMoney; //完善以后需要减去收款总额
          //     orgData = Object.assign(orgData, { sumMoney: sum});
          //     orgData = Object.assign(orgData, data);
          //     orgData = { jsondata: JSON.stringify(orgData) };
          //     updateCollection(orgData).then((res) => {
          //       if (res.code == 200) {
          //         this.$message.success("退款信息完善成功！");
          //         this.$parent.$parent.$parent.getall();
          //       }
          //     });
          //   }
          // });
        })
        .catch(() => {
          this.$message.success("error");
        });
    },
    refunOpen() {
      this.$refs.refundRef.openDialog();
    },
    receiptOpen() {
      this.$refs.receiptRef.openDialog();
    },
    invoiceOpen() {
      this.$refs.invoiceRef.openDialog();
    },
    //发票登记
    RegisterBill(rows){
      this.currentCollListRow=rows;
      let remain = rows.collMoney-rows.receiveMoney;
      if(remain==0){
        this.$message.warning("该收款已全部完成登记！！");
        return;
      }else{
       this.$refs.regBillRef.openDialog() ;
      }
    },
    //发票登记
    regBillShow(formData){
     formData = Object.assign(formData,{collectionlistId:this.currentCollListRow.keyid});
     let pa = {jsondata:JSON.stringify(formData)};
      addConllBill(pa).then(res=>{
        if(res.code==200){
         this.$message.success("发票登记成功");
          this.$parent.$parent.$parent.getall();
        }
      })
    },
    //发票删除
    DelBill(rows){
      let id = rows.keyid;
    },
    updateRow(pa) {},
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex < 4 || columnIndex > 12) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
<style lang='less' scoped>
</style>
