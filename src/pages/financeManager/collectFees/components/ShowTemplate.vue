<template>
  <div class="body">
    <div class="head-button">
      <!-- <el-button type="text" @click="showts()">aabbcc</el-button> -->
      <head-button @click="headButtonClick"></head-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane name="1">
        <span slot="label">收款台账</span>
        <!-- <collection-table
          :data-list="dataList.collectionData"
        ></collection-table> -->
        <CollectionTablenew :dataList="dataList.collectionData">
        </CollectionTablenew>
      </el-tab-pane>
      <el-tab-pane name="2">
        <span slot="label">往来款台账</span>
        <current-account-table
          :dataList="dataList.account"
        ></current-account-table>
      </el-tab-pane>
      <el-tab-pane name="3" label="招标文件费/代理投标保证金台账">
        <bid-table :data-list="dataList.bid"></bid-table>
      </el-tab-pane>
      <el-tab-pane name="4" label="保证金缴纳台账">
        <deposit-payment-table
          :dataList="dataList.payment"
        ></deposit-payment-table>
      </el-tab-pane>
    </el-tabs>
    <div class="dialog">
      <insert-collection-dialog
        title="收款登记"
        ref="insertRef"
        @getFormData="insertColl"
      ></insert-collection-dialog>
      <query-collection-dialog
        title="高级查询"
        ref="queryRef"
        @getFormData="queryColl"
      ></query-collection-dialog>
      <show-collection-dialog
        title="数据展示"
        ref="showRef"
        @getFormData="showColl"
      ></show-collection-dialog>
      <grant-dialog
        title="授权管理"
        ref="grantRef"
        @getFormData="grantShow"
      ></grant-dialog>
      <deposit-application-dialog
        title="保证金缴纳申请"
        ref="depoRef"
        @getFormData="depApply"
      ></deposit-application-dialog>
      <deposit-register-dialog
        title="保证金缴纳登记"
        ref="depRegistRef"
        @getFormData="depReg"
      ></deposit-register-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import HeadButton from "./button/HeadButton.vue";
import CollectionTable from "./table/CollectionTable.vue";
import CollectionTablenew from "./table/CollectionTable_new.vue";
import CurrentAccountTable from "./table/CurrentAccountTable.vue";
import BidTable from "./table/BidTable.vue";
import DepositPaymentTable from "./table/DepositPaymentTable.vue";
import InsertCollectionDialog from "./dialog/InsertCollectionDialog.vue";
import QueryCollectionDialog from "./dialog/QueryCollectionDialog.vue";
import ShowCollectionDialog from "./dialog/ShowCollectionDialog.vue";
import GrantDialog from "./dialog/GrantDialog.vue";
import DepositApplicationDialog from "./dialog/DepositApplicationDialog.vue";
import DepositRegisterDialog from "./dialog/DepositRegisterDialog.vue";

import {
  getProject,
  getAll,
  addCollection,
  addCollectionList,
} from "../../../../api/webapi-fin.js";
import { mapState, mapActions } from "vuex";
import { startFlow } from "../../../../api/webapi-flow";

export default {
  components: {
    HeadButton,
    CollectionTable,
    CollectionTablenew,
    CurrentAccountTable,
    BidTable,
    DepositPaymentTable,
    InsertCollectionDialog,
    QueryCollectionDialog,
    ShowCollectionDialog,
    GrantDialog,
    DepositApplicationDialog,
    DepositRegisterDialog,
  },
  props: {},
  watch: {},
  //数据节点
  data() {
    return {
      activeName: "1",
      dataList: {},
    };
  },
  computed: {
    ...mapState({
      //dataList: (state) => state.fin.dataList,
      cu: "currentUser",
    }),
  },
  //生命周期函数节点
  created() {
    this.getall();
    this.networkGetOrgAndPost();
  },
  //自定义函数节点
  methods: {
    ...mapActions({
      networkAddCollection: "fin/networkAddCollection",
      networkDelCollection: "fin/networkDelCollection",
      networkGetOrgAndPost: "loadType/networkGetOrgAndPost",
        previewAttach:'flowManager/preViewAttach'
    }),
    parentTest() {
      this.$message.success("test");
    },
    showts(){
      let mydata ={"fileId":"25047942024","fileName":"SignHere(3).pdf","fileSize":49327,"fileType":"pdf","spaceId":"3863211031"};
this.previewAttach(mydata);
    },
    getall() {
      let pa = { page: 1, limit: 20, where: "" };
      pa = { jsondata: JSON.stringify(pa) };
      getAll(pa).then((res) => {
        //console.log(res);
        // let keys = Object.keys(this.dataList);
        // if (keys.length > 0) {
        //   console.log('------comiing-------');
        //   this.$set(this.dataList, "collectionData", res.collData);
        //   this.$set(this.dataList, "account", res.accountData);
        //   this.$set(this.dataList, "payment", res.paymentData);
        //   console.log(this.dataList);
        // } else {
          
        // }
        this.dataList = {
            collectionData: res.collData,
            account: res.accountData,
            payment: res.paymentData,
          };
          console.log(this.dataList);
        // this.dataList.collectionData = res.collData;
        // this.dataList.account = res.accountData;
        //this.dataList.payment = res.paymentData;
      });
    },
    headButtonClick(btn) {
      switch (btn) {
        case 1:
          // getProject({}).then(res=>{
          // 	console.log(res);
          // })

          this.$refs.insertRef.openDialog();
          break;
        case 2:
          this.$refs.queryRef.openDialog();
          break;
        case 3:
          this.$refs.showRef.openDialog();
          break;
        case 4:
          this.$refs.grantRef.openDialog();
          break;
        case 5: //保证金申请
          this.$refs.depoRef.openDialog();
          break;
        case 7: //保证金登记
          this.$refs.depRegistRef.openDialog();
          break;
      }
    },
    //收款添加
    insertColl(data) {
      let pa = { jsondata: JSON.stringify(data) };
      addCollection(pa).then((res) => {
        if (res.code == 200) {
          this.getall();
          this.$message.success("添加成功");
         //this.$router.push({path:'/fee/collect_fees'});
        }
      });
      console.log(data);
    },
    //高级查询
    queryColl(data) {
      console.log(data);
    },
    //数据显示
    showColl(data) {},
    //授权管理
    grantShow(data) {},
    //保证金缴纳申请
    depApply(data) {
      //console.log(data);
      let arr = [
        { name: "申请时间", controlType: "input_sign", value: "" },
        { name: "申请组织", controlType: "input_sign", value: "" },
        { name: "联系人", controlType: "input_sign", value: "" },
        { name: "缴纳类型", controlType: "input_sign", value: "" },
        { name: "备注", controlType: "input_muit", value: "" },
        { name: "代缴款支付证明", controlType: "input_attachment", value: "" },
        {
          name: "保证金缴纳申请表（PDF）",
          controlType: "input_attachment",
          value: "",
        },
      ];
      let dateNow = new Date();
      arr[0].value = dateNow.Format("yyyy-MM-dd");
      arr[1].value = "测试组织";
      arr[2].value = this.cu.userName;
      arr[3].value = "现金";
      arr[4].value = "测试";

      let attachmentValue = JSON.stringify(arr); //这里一定要转换成字符串
      let passa = {
        startPerson: this.currentUser.dinCode,
        versionID: "v_2020_cwgl_tksq",
        jsonData: attachmentValue,
      };
      startFlow(passa).then((res) => {
        if (res.success) {
          this.$message.success("流程发起成功");
          data = Object.assign(data, {
            applyId: res.msg,
            createBy: this.cu.dinCode,
            createBy_name: this.cu.userName,
          });
          let pa = { jsondata: JSON.stringify(data) };
          addCollectionList(pa).then((res) => {
            if (res.code == 200) {
              this.getall();
              this.$message.success("添加成功");
            }
          });
        }
      });
    },
    //保证金缴纳登记
    depReg(data) {
      console.log(data);
      data = Object.assign(data, {
        createBy: this.cu.dinCode,
        createBy_name: this.cu.userName,
      });
      let pa = { jsondata: JSON.stringify(data) };
      addCollectionList(pa).then((res) => {
        if (res.code == 200) {
          this.getall();
          this.$message.success("添加成功");
        }
      });
    },
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
