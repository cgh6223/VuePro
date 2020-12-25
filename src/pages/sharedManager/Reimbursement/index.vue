<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="20">
      <el-col>
        <tablelist
          :page-total="total"
          :my-data="dataList"
          @function="submitForm"
        ></tablelist>
      </el-col>
    </el-row>
  </section>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import tablelist from "./components/TableList.vue";
import {
  getShareReimubursement,
  addShareReimebursement,
  updateShareReimebursement
} from "../../../api/webapi-share.js";
import { startFlow } from "../../../api/webapi-flow.js";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    tablelist
  },
  //数据节点
  data() {
    return {
      dataList: [],
      total: 0,
      loadData: [],
      pageShow: {
        page: 1,
        limit: 20,
        where: "1=1"
      }
    };
  },
  //生命周期函数节点
  created() {
    this.showList();
    this.loadTypes();
    // let url = location.href;
    // this.getsign(url);
  },
  computed: {
    ...mapGetters({
      attachpath: "flowManager/attachmentUploadStr"
    }),
    ...mapState({
      currentUser: "currentUser"
      //abc: state => state.loadType.nonBusConType.list
    })
  },
  mounted() {},
  //自定义函数节点
  methods: {
    ...mapActions({
      //getsign: "flowManager/newworkGetSign",
      loadTypes: "loadType/networkGetCascaderLoadData"
      //startFlow: "flowManager/startFlow",
      //getStamp: "shareManager/getAllData"
    }),
    showList() {
      let pa = { page: 1, limit: 20, where: "1=1" };
      getShareReimubursement(pa).then(res => {
        this.dataList = res.rows;
        this.total = res.total;
      });
    },
    submitForm(formName, data) {
      switch (formName) {
        case "sealApplyForm":
          data.tables.detail.forEach(item => {
            let it_label = [];
            item.typeClassName.forEach(it => {
              this.$myfunction.findStr(data.typeClassId_Options, it);
              it_label.push(localStorage.getItem("findStr"));
            });
            item.typeClassId_A = item.typeClassName[0];
            item.typeClassId_B = item.typeClassName[1];
            item.typeClassId_A_Name = it_label[0];
            item.typeClassId_B_Name = it_label[1];
            // item.typeClassName_A=it_label;
          });
          data.tables.createBy = this.currentUser.loginName;
          data.tables.createBy_name = this.currentUser.userName;
          let pa = { rows: JSON.stringify(data.tables) };
          addShareReimebursement(pa).then(res => {
            if (res.success) {
              this.showList();
            }
          });
          //console.log(data);
          break;
        case "queryForm":
          // console.log(data);
          break;
        case "startFlowForm":
          let jsondata = [
            { name: "申请时间", controlType: "input_sign", value: "" },
            { name: "申请组织", controlType: "input_sign", value: "" },
            { name: "申请人", controlType: "input_sign", value: "" },
            {
              name: "报销申请表（PDF）",
              controlType: "input_attachment",
              value: ""
            },
            { name: "备注", controlType: "input_muit", value: "" }
          ];
          let dateNow = new Date();
          jsondata[0].value = dateNow.Format("yyyy-MM-dd");
          jsondata[1].value = this.currentUser.orgName;
          jsondata[2].value = this.currentUser.userName;
          jsondata[3].value = this.attachpath.data;
          jsondata[4].value = data.bz;

          let attachmentValue = JSON.stringify(jsondata); //这里一定要转换成字符串
          let passa = {
            startPerson: this.currentUser.dinCode,
            versionID: "v_2020_gxgl_bxsq",
            jsonData: attachmentValue
          };
         
          startFlow(passa).then(res => {
            if (res.success) {
              let filepath = this.attachpath.data;
              let mydata = Object.assign(data, {
                filePath: filepath,
                instanceId: res.msg
              });
              let mypa = {                  
                jsonData: JSON.stringify(mydata)
              };
              
              updateShareReimebursement(mypa).then(res => {
                console.log(res);
                if (res.success) {
                  this.$message.info("流程发起成功");
                  this.showList();
                }
              });
            }
          });

          break;
      }
    }
    //获得加载数据
    // ...mapActions({
    //   getsign: "flowManager/newworkGetSign"
    // }),
    // async getTableList() {
    //   let pa = {
    //     page: 1,
    //     limit: 20,
    //     filter: {}
    //   };
    //   const res = await getAll(pa);
    //   this.dataList = res.data;
    //   //console.log(res);
    // },
  }
};
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

.row_list {
  margin-bottom: 20px;
  .row_base {
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    height: 1.618rem;
  }
}

.order_list {
  .orderArea {
    width: 100%;
    height: 4.989rem;
    background: #fff !important;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 10px;
    padding-top: 40px;
    overflow: hidden;
  }
  .orderbarArea {
    height: 4.989rem;
  }
}

.data_list {
  text-align: center;
  font-size: 14px;
  border-radius: 6px;
  padding: 10px;
  color: #fff;
  height: 1.079rem;
  .leftItem {
    align-items: start;
    justify-content: space-between;
    text-align: left;
  }
  .rightItem {
    width: 0.836rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg-icon {
      font-size: 30px;
    }
  }
  .number {
    font-size: 0.297rem;
    font-weight: bold;
    .perTitle {
      font-size: 0.175rem;
      margin-left: 5px;
    }
  }
}

.pay {
  .leftItem {
    justify-content: space-around;
  }
}
</style>
