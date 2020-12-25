<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>

    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">未回款</span>
          <!-- <no-invoice-tale :dataList="dl.noReciveData"> noReciveData: noReciveData,
          noReciveEnoughData: noReciveEnoughData,
          ReciveData: ReciveData,
          cancelData: cancelData,</no-invoice-tale> -->
          <invoice-table :mytableData="dl.noReciveData"></invoice-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">未回款完整</span>
          <invoice-table :mytableData="dl.noReciveEnoughData"></invoice-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">已回款</span>
         <invoice-table :mytableData="dl.ReciveData"></invoice-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">已作废</span>
          <invoice-table :mytableData="dl.cancelData"></invoice-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog">
      <add-invoice-dialog
        title="发票登记"
        ref="addRef"
        @getFormData="add"
      ></add-invoice-dialog>
      <apply-invocie-dialog
        title="申请开票"
        ref="applyRef"
        @getFormData="apply"
      ></apply-invocie-dialog>
      <query-invoice-dialog
        title="高级查询"
        ref="queryRef"
        @getFormData="queryForm"
      ></query-invoice-dialog>
      <display-invoice-dialog
        title="数据展示"
        ref="displayRef"
        @getFormData="display"
      ></display-invoice-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import HeadButton from "./button/HeadButton.vue";
import InvoiceTable from "./table/InvoiceTable.vue";
import AddInvoiceDialog from "./dialog/AddInvoiceDialog.vue";
import ApplyInvocieDialog from "./dialog/ApplyInvocieDialog.vue";
import QueryInvoiceDialog from "./dialog/QueryInvoiceDialog.vue";
import DisplayInvoiceDialog from "./dialog/DisplayInvoiceDialog.vue";
import noInvoiceTale from "./table/noInvoiceTable.vue";
import { mapState, mapActions } from "vuex";
import { startFlow } from "../../../../api/webapi-flow.js";
import { addBill, getAllBill } from "../../../../api/webapi-fin.js";

export default {
  components: {
    HeadButton,
    InvoiceTable,
    noInvoiceTale,
    AddInvoiceDialog,
    ApplyInvocieDialog,
    QueryInvoiceDialog,
    DisplayInvoiceDialog,
  },
  props: {},
  watch: {},
  //数据节点
  data() {
    return {
      activeName: "1",
      dl: {},
      noReciveData: [],
    };
  },
  computed: {
    ...mapState({
      currentUser: "currentUser",
    }),
  },
  //生命周期函数节点
  created() {
    this.networkGetOrgAndPost();
    this.getAll();
  },
  //自定义函数节点
  methods: {
    ...mapActions({
      networkGetOrgAndPost: "loadType/networkGetOrgAndPost",
    }),
    headButtonClick(btn) {
      switch (btn) {
        case 1:
          this.$refs.addRef.openDialog();
          break;
        case 2:
          this.$refs.applyRef.openDialog();
          break;
        case 3:
          this.$refs.queryRef.openDialog();
          break;
        case 4:
          this.$refs.displayRef.openDialog();
          break;
      }
    },
    getAll() {
      let pa = { page: 1, limit: 20, where: "" };
      pa = { jsondata: JSON.stringify(pa) };
      getAllBill(pa).then((res) => {
        //console.log(res.data);
        let noReciveData = res.data.filter((e) => {
          return e.receiveMoney == 0;
        });
        let noReciveEnoughData = res.data.filter((e) => {
          return (e.sumMoney > e.receiveMoney&&e.receiveMoney!=0);
        });
        let ReciveData = res.data.filter((e) => {
          return e.sumMoney == e.receiveMoney;
        });
        let cancelData = res.data.filter((e) => {
          return e.billType == 2;
        });
        this.dl = {
          noReciveData: noReciveData,
          noReciveEnoughData: noReciveEnoughData,
          ReciveData: ReciveData,
          cancelData: cancelData,
        };
        console.log(this.dl);
      });
    },
    //开票登记
    add(data) {
      data = Object.assign(data, {
        createBy: this.currentUser.dinCode,
        createBy_name: this.currentUser.userName,
      });
      console.log(data);
      let pa = { jsondata: JSON.stringify(data) };
      addBill(pa).then((res) => {
        if (res.code == 200) {
          this.$message.success("数据添加成功");
          this.getAll();
        }
      });
    },
    //开票申请
    apply(data) {
      let flowJson = [
        { name: "申请时间", controlType: "input_sign", value: "" },
        { name: "申请组织", controlType: "input_sign", value: "" },
        { name: "申请人", controlType: "input_sign", value: "" },
        { name: "扫描件", controlType: "input_attachment", value: "" },
        { name: "开票信息", controlType: "input_attachment", value: "" },
      ];
      let dateNow = new Date();
      flowJson[0].value = dateNow.Format("yyyy-MM-dd");
      flowJson[1].value = "测试";
      flowJson[2].value = this.currentUser.userName;

      let attachmentValue = JSON.stringify(flowJson); //这里一定要转换成字符串
      let passa = {
        startPerson: this.currentUser.dinCode,
        versionID: "v_2020_cwgl_tksq",
        jsonData: attachmentValue,
      };

      startFlow(passa).then((res) => {
        if (res.success) {
          this.$message.success("开票申请发起成功");
          data = Object.assign(data, {
            billType: 0,
            instanceId: res.msg,
            createBy: this.currentUser.dinCode,
            createBy_name: this.currentUser.userName,
          });
           console.log(data);
        }
      });

     
    },
    //高级查询
    queryForm(data) {},
    //数据展示
    display(data) {},
  },
};
</script>
<style lang='less' scoped>
.head-button {
  height: 50px;
  line-height: 50px;
  padding: 10px 20px;
}
</style>
