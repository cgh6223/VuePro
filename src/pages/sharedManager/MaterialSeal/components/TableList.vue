<template>
  <div class="body">
    <div class="button">
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
          prop="createddateTime"
          label="申请时间"
          align="center"
          width="100px"
        ></el-table-column>
        <el-table-column
          prop="orgName"
          label="申请组织"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          prop="personName"
          label="申请人"
          align="center"
          width="100px"
        >
        </el-table-column>
        <el-table-column
          prop="documentName"
          label="资料名称"
          align="center"
          width="250px"
        >
        </el-table-column>
        <el-table-column
          prop="contentDesc"
          label="申请说明"
          align="center"
          width="150px"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.contentDesc }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          fixed="right"
          min-width="200px"
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
      <!--盖章申请-->
      <seal-apply-dialog
        ref="sealRef"
        title="盖章申请"
        width="30%"
        @getFormData="sealApplyFormData"
      ></seal-apply-dialog>
      <!--高级查询-->
      <query-dialog
        ref="queryRef"
        :load-data="loadData"
        title="高级查询"
        width="25%"
        @getFormData="queryFormData"
      ></query-dialog>
      <!--提交盖章-->
      <submit-seal-dialog
        ref="submitSealRef"
        title="提交盖章"
        width="30%"
      ></submit-seal-dialog>
      <!--附件查看-->
      <pre-view-dialog
        ref="previewRef"
        :title="previewData.title"
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

import { preView } from "../../../../api/webapi-flow.js";
import {startFlow} from "../../../../api/webapi-flow.js";
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
    },
    loadData: {
      type: Object,
      default: () => {
        return {};
      }
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
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      previewData: {
        title: "",
        insId: "",
        data: []
      }
    };
  },
  computed: {
    ...mapGetters({
      stampData: "shareManager/getStampData"
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
          let obj = Object.assign({});
          this.updateAttachStr(obj);
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
          this.previewData.insId = data.instanceId;
          this.previewData.data.title = data.documentName;
          preView(data.instanceId).then(res => {
            //console.log(res);
            this.previewData.data = res;
            this.$refs.previewRef.openDialog();
          });
          //console.log(data);
          break;
        case 2:
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
