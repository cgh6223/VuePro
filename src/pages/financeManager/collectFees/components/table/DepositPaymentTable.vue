<template>
  <!--招标文件费台账-->
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
          prop="createTime"
          label="申请时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="orgname"
          label="申请组织"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createBy_name"
          label="申请人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="applyId"
          label="类型"
          :formatter="showApply"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="collType"
          label="缴纳类型"
          align="center"
          :formatter="collTypeShow"
        ></el-table-column>
        <!-- <el-table-column
          prop=""
          label="所属组织"
          align="center"
        ></el-table-column> -->
        <el-table-column
          prop="contractId"
          label="合同编号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="contract_name"
          label="合同名称"
          align="center"
        ></el-table-column>
         <el-table-column
          prop="projectId"
          label="项目编号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="project_name"
          label="项目名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="collMoney"
          label="缴纳金额"
          align="center"
        ></el-table-column>
        <el-table-column prop="" label="缴纳信息" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" width="300" trigger="click">
              <table>
                <tr>
                  <td>保证金收款账户名：</td>
                  <td>{{ scope.row.bankAccout }}</td>
                </tr>

                <tr>
                  <td>保证金收款账户开户行：</td>
                  <td>{{ scope.row.bank }}</td>
                </tr>

                <tr>
                  <td>保证金收款账户号：</td>
                  <td>{{ scope.row.bankAccoutId }}</td>
                </tr>
              </table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="缴纳时间" align="center"></el-table-column> -->
        <el-table-column label="缴纳回执单" align="center">
          <el-button type="text">下载</el-button>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <el-button type="text" @click="tableButtonClick(scope.row)"
              >完善信息</el-button>
            <el-button type="text">下载申请表</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      
      <deposit-complate-dialog
        title="完善信息"
        ref="upRef"
        @getFormData="complateData"        
      ></deposit-complate-dialog>
    </div>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import DepositComplateDialog from "../dialog/DepositComplateDialog.vue";
import {updateCollectionList} from "../../../../../api/webapi-fin.js";
export default {
  components: {
    DepositComplateDialog,
  },
  props: {
     dataList:'' 
  },
  watch: {},
  //数据节点
  data() {
    return {
      currentRow:''
      // dataList: [
      //   {
      //     info: { name: "小张", username: "2654665884", userbank: "中国银行" },
      //   },
      // ],
    };
  },
  //生命周期函数节点
  created() {},
  //自定义函数节点
  methods: {
    showApply(row, col) {
     let result = "申请";
      if (!row.applyId) {
        result = "登记";
      }
      return result;
    },
    tableButtonClick(data){
      this.currentRow=data;
     this.$refs.upRef.openDialog(data);
    },
    complateData(data){
      //console.log(data);
      data = Object.assign(this.currentRow,data);
      let pa = {jsondata:JSON.stringify(data)};
      updateCollectionList(pa).then(res=>{
        if(res.code==200){
          this.$message.success("收款明细缴纳信息完善成功");
          this.$parent.$parent.$parent.getall();
        }
      })
    },
    collTypeShow(row,col){
      let result="风险（履约）保证金";
      if(row.collType==6){
        result="投标保证金";
      }
      return result;
    }
  },
};
</script>
<style lang='less' scoped>
</style>
