<template>
  <div class="body">
    <div class="button">
<el-button type="text" @click="btn_click">aaaaa</el-button>
<el-button type="text" @click="startss">bbbbbbb</el-button><el-input v-model="flowdatas"></el-input>
      <head-button @click="headBtnClick"></head-button>
      
    </div>
    <div class="table">
      <el-table
        :row-style="{ height: '75px' }"
        :data="myData"
        stripe
        style="width: 100%"
        align="center"
        height="7.5rem"
        highlight-current-row
        :header-cell-style="{ fontSize: '14px' }"
        ref="refTable"
      >
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          width="100px"
        ></el-table-column>
        <el-table-column
          prop="orgName"
          label="创建组织"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          prop="createBy_name"
          label="申请人"
          align="center"
          width="100px"
        >
        </el-table-column>
        <el-table-column
          prop="contractName"
          label="合同名称"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名称"
          align="center"
          width="250px"
        >
        </el-table-column>
        
         <el-table-column
          prop="deptName"
          label="部门归属"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          prop="typeClassId_Name"
          label="费用大类"
          align="center"
          width="250px"
        >
        </el-table-column>
      
        
        <el-table-column prop="child" label="费用明细" align="center" width="170">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <el-table
                    :data="scope.row.child"
                    style="width: 100%"
                    align="center"
                    height="230px"
                    highlight-current-row
                    :header-cell-style="{fontSize:'14px'}">
                    <el-table-column prop="typeClassId_A_Name" label="一级科目" align="center"></el-table-column>
              <el-table-column prop="typeClassId_B_Name" label="二级科目" align="center"></el-table-column>
              <el-table-column prop="expense" label="金额" align="center"></el-table-column>
              <el-table-column prop="bz" label="备注" align="center"></el-table-column>              
            </el-table>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

 <el-table-column
          prop="totalCost"
          label="总金额"
          align="center"
          width="250px"
        >
        </el-table-column>

       <el-table-column
          prop="endTime"
          label="审核完成时间"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          fixed="right"
          min-width="240px"
        >
          <template slot-scope="scope">
            <table-button
              :scope="scope.row"
              @click="tableBtnClick"
            ></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
        :pageTotal="total"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      >
      </pagination>
    </div>

    <div class="dialog">
      <!--报销申请-->
      <seal-apply-dialog
        ref="sealRef"
        title="报销申请"
        width="50%"
        @getFormData="sealApplyFormData"
      ></seal-apply-dialog>
      <!--高级查询-->
      <query-dialog
        ref="queryRef"        
        title="高级查询"
        width="25%"
        @getFormData="queryFormData"
      ></query-dialog>
      <!--发起钉钉-->
      <SubmitSealDialog
        ref="submitSealRef"        
        title="发起钉钉"
        width="35%" 
        @getFormData="submitFormData"       
      ></SubmitSealDialog>
      <!--附件查看-->
      <pre-view-dialog
        ref="previewRef" 
        :data="previewData.data"      
      ></pre-view-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import pagination from "../../../../components/pagination/index.vue";
import TableButton from "./button/TableButton.vue";
import SealApplyDialog from "./dialog/SealApplyDialog.vue";
import HeadButton from "./button/HeadButton.vue";
import QueryDialog from "./dialog/QueryDialog.vue";
import SubmitSealDialog from "./dialog/SubmitSealDialog.vue";
import preViewDialog from "../../../../components/flowControl/preView.vue";
import * as dd from "dingtalk-jsapi";
import {startFlow,preView} from "../../../../api/webapi-flow.js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    pagination,
    TableButton,
    SealApplyDialog,
    HeadButton,
    QueryDialog,
    SubmitSealDialog,
    preViewDialog
  },
  props: {
    myData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    pageTotal: {
      type: Number,
      default: 20
    }    
  },
  watch: {
    myData() {
      this.dataList = this.myData;
    },
    pageTotal() {
      this.total = this.pageTotal;
    }
  },
  //数据节点
  data() {
    return {
      //展示数据
      dataList: this.myData,
      //总条数
      total: this.pageTotal,
      flowdatas:'',
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      previewData: {
        title: "",
        insId: "",
        data: []
      },
      clickRow:{}
    };
  },
  computed: {
    ...mapState({
      //stampData: "shareManager/getStampData"
      currentUser: "currentUser"
    })
  },
  //生命周期函数节点
  created() {},
  mounted() {},
  //自定义函数节点
  methods: {
    ...mapMutations({
      updateAttachStr: "flowManager/updateAttachment"     
    }), 
    startss(){
      let arr=[{"name":"申请时间","controlType":"input_sign","value":"2020-12-12"},
      {"name":"申请组织","controlType":"input_sign","value":"测试过程组"},
      {"name":"申请人","controlType":"input_sign","value":"秦仕洪"},
      {"name":"转正申请表","controlType":"input_attachment","value":[{"fileId":"26797017554","fileName":"mytest.txt","fileSize":23,"fileType":"txt","spaceId":"4264636191"}]}];
      //{"fileId":"25580969136","fileName":"9-财务管理(5).pdf","fileSize":472962,"fileType":"pdf","spaceId":"3863211031"}
      //{"fileId":"26797017554","fileName":"mytest.txt","fileSize":23,"fileType":"txt","spaceId":"4264636191"}
      //{"fileId":"26755007573","fileName":"mytest.pdf","fileSize":472962,"fileType":"pdf","spaceId":"3863211031"}
      arr[3].value=JSON.parse(this.flowdatas);
       let attachmentValue = JSON.stringify(arr); //这里一定要转换成字符串
      let passa = {
        startPerson: this.currentUser.dinCode,
        versionID: "v_2020_rzgl_zz",
        jsonData: attachmentValue,
      };
      startFlow(passa).then(res=>{
         if (res.success) {
           this.$message.success("流程发起成功ID="+res.msg);
         }
      })
    },  
    btn_click(){
      //console.log(JSON.parse(this.flowdatas));
        dd.ready(function(){
        dd.runtime.permission.requestAuthCode({
                corpId: "ding8d97ce4fb3a3cc41bc961a6cb783455b", //你们企业钉钉的CORPID
                onSuccess: function (result) {
                    {
                        let code = result.code;
                        console.log(code);                                             
                    }
                },
                onFail: function (err) {
                    alert('出错了, ' + JSON.stringify(err));
                }

            });
    //     dd.biz.cspace.saveFile({
    //     corpId:"ding8d97ce4fb3a3cc41bc961a6cb783455b",
    //     url:"#iAEHAqRmaWxlA6h5dW5kaXNrMATOC7qLZAXNB6kGzT1_B85fyLfZCM0Bow",  // 文件在第三方服务器地址， 也可为通过服务端接口上传文件得到的media_id，详见参数说明
    //     name:"测试文件",
    //     onSuccess: function(data) {
    //       console.log(data);
    //              /* data结构
    //              {"data":
    //                 [
    //                 {
    //                 "spaceId": "" //空间id
    //                 "fileId": "", //文件id
    //                 "fileName": "", //文件名
    //                 "fileSize": 111111, //文件大小
    //                 "fileType": "", //文件类型
    //                 }
    //                 ]
    //              }
    //              */
    //             },
    //     onFail: function(err) {
    //                 alert(JSON.stringify(err));
    //     }
    // });
      })
    },
    handleCurrentChange(val) {
      this.pageShow.page = val;
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
    },
    //头部按钮
    headBtnClick(btn) {
      switch (btn) {
        case 1:
          this.$refs.sealRef.openDialog();
         // let obj = Object.assign({});
         // this.updateAttachStr(obj);
          break;
        case 2:
          this.$refs.queryRef.openDialog();
          break;
      }
    },
    //表格按钮
    tableBtnClick(btn, data) {
      switch (btn) {
        case 1:  
         preView(data.instanceid).then(res => {
            //console.log(res);
            this.previewData.data = res;
            this.$refs.previewRef.openDialog();
          });       
          break;
        case 2: 
        this.clickRow=data;                
          this.$refs.submitSealRef.openDialog();
          break;
      }
    },

    sealApplyFormData(data) {
      this.$emit("function", "sealApplyForm", data);
      this.$refs.sealRef.dialogClose();
    },
    queryFormData(data) {
      const where = this.$myfunction.sqlSplicing(data);
      this.$emit("function", "queryForm", where);
      this.$refs.queryRef.dialogClose();
    },
    submitFormData(data){
      //if(this.clickRow.instanceid)
       let mydata = Object.assign(data,{keyid:this.clickRow.keyid});
        this.$emit("function", "startFlowForm", mydata);
      this.$refs.submitSealRef.dialogClose();
    }
  }
};
</script>
<style lang='less' scoped>
.body {
  .button {
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
  }
}
</style>
