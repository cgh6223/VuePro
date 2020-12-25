<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogApplyForVisible = true"
        >申请开票</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogSearchVisible = true"
        >高级查询</el-button
      >
    </div>

    <el-dialog
      title="申请开票"
      :visible.sync="dialogApplyForVisible"
      width="70%"
    >
      <invmodel></invmodel>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogApplyForVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogApplyForVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="高级查询" :visible.sync="dialogSearchVisible" width="45%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogSearchVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSearchVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="发票回款登记"
      :visible.sync="dialogRetRecordVisible"
      width="45%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRetRecordVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogRetRecordVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="状态显示" :visible.sync="dialogStateVisible" width="45%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogStateVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogStateVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="作废重开"
      :visible.sync="dialogRebeginVisible"
      width="45%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRebeginVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogRebeginVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="开票处理" :visible.sync="dialogmanageVisible" width="45%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogmanageVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogmanageVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
      class="tableBox"
    >
      <el-table-column prop="date" label="开票日期" width="100">
      </el-table-column>
      <el-table-column prop="date" label="申请部门" width="100">
      </el-table-column>
      <el-table-column prop="date" label="申请人" width="100">
      </el-table-column>
      <el-table-column prop="date" label="类型" width="100"> </el-table-column>
      <el-table-column prop="date" label="付款单位全称" width="150">
      </el-table-column>
      <el-table-column prop="date" label="收款金额" width="100">
      </el-table-column>
      <el-table-column prop="date" label="服务名称" width="200">
      </el-table-column>
      <el-table-column prop="date" label="开票金额" width="200">
      </el-table-column>
      <el-table-column prop="date" label="回款金额" width="200">
      </el-table-column>
      <el-table-column prop="date" label="未回款金额" width="200">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="left" width="200">
        <template slot-scope>
          <el-button
            size="mini"
            type="text"
            @click="dialogRetRecordVisible = true"
            >回款</el-button
          >
          <el-button size="mini" type="text" @click="dialogStateVisible = true"
            >状态</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="dialogRebeginVisible = true"
            >重开</el-button
          >
          <el-button size="mini" type="text" @click="dialogmanageVisible = true"
            >处理</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :pageTotal="pageTotals"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
import invmodel from "./InvoiceModel.vue";
export default {
  name: "invoiceList",
  data() {
    return {
      tableHeight: "400px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      dialogApplyForVisible: false,
      dialogSearchVisible: false,
      dialogRetRecordVisible: false,
      dialogStateVisible: false,
      dialogRebeginVisible: false,
      dialogmanageVisible: false,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      }
    };
  },
  props: {
    mydata: {
      type: Array,
      default: () => {
        return [{}];
      }
    },
    pageTotals: {
      type: Number,
      default: 20
    },
    totalRows: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    pagination,
    invmodel
  },
  mounted() {},
  methods: {
    onSearch() {
      this.searchDialogShow = true;
    },
    onSearchSubmit() {
      let keys = Object.keys(this.searchform);
      if (
        keys.every(k => {
          return this.searchform[k] !== "";
        }) //只有有查询内容，就从page=1开始查询
      ) {
        this.pageShow = {
          page: 1,
          limit: 20,
          filter: {}
        };
      }
      let filters = { filter: this.searchform };
      this.pageShow = Object.assign({}, this.pageShow, filters);

      this.searchDialogShow = false;
      //this.getList();
      this.$emit("customerGetList", this.pageShow);
    },
    onSearchReset() {
      this.$refs["searchform"].resetFields();
      this.onSearchSubmit();
    },
    onAddSubmit() {
      this.addDialogShow = false;
    },
    handleCurrentChange(val) {
      this.pageShow.page = val;

      this.onSearchSubmit();
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
      this.onSearchSubmit();
    }
  }
};
</script>
<style lang="less" scoped>
.tableBox {
  th {
    padding: 0 !important;
    height: 30px;
    line-height: 30px;
  }
  td {
    padding: 0 !important;
    height: 30px;
    line-height: 30px;
  }
}
.search_container {
  margin-bottom: 20px;
}
.btnRight {
  float: right;
  margin-right: 0px !important;
}
.searchArea {
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  padding: 18px 18px 0;
}

.logContainer {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  height: 700px;
  max-height: 700px;
  overflow: hidden;
  border-radius: 6px;
  .logArea {
    overflow: auto;
    height: 100%;
  }
  .item {
    .title {
      font-size: 13px;
    }
    .time {
      color: #87de75;
    }
    .logContent {
      .logUl {
        padding-left: 30px;
        li {
          font-size: 12px;
          list-style: disc;
          line-height: 20px;
        }
      }
    }
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
