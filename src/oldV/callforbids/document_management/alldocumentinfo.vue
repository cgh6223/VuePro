<template>
  <div class="logContainer">
    <h1>招标文档管理</h1>
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogSearchVisible = true"
        >项目查询</el-button
      >
    </div>

    <el-dialog
      title="项目查询"
      :visible.sync="dialogSearchVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="100px">
        <el-form-item label="合同编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="合同名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select v-model="mmvalue" multiple placeholder="请选择">
            <el-option label="招标代理" value="1"></el-option>
            <el-option label="工程监理" value="2"></el-option>
            <el-option label="工程造价" value="3"></el-option>
            <el-option label="工程咨询" value="4"></el-option>
            <el-option label="项目管理" value="5"></el-option>
            <el-option label="全过程工程咨询" value="6"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogSearchVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSearchVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="left"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column prop="date" label="合同编号" width="100">
      </el-table-column>
      <el-table-column prop="date" label="合同名称" width="100">
      </el-table-column>
      <el-table-column prop="date" label="业主名称" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目编号" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目名称" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目归属" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目总投资" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目规模" width="100">
      </el-table-column>
      <el-table-column prop="date" label="招标方式" width="100">
      </el-table-column>
      <el-table-column prop="date" label="项目所在地" width="200">
      </el-table-column>
      <el-table-column prop="date" label="招标代理服务费" width="200">
      </el-table-column>
      <el-table-column prop="date" label="收费对象" width="100">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="200">
        <template slot-scope>
          <el-button size="small" type="text" @click="dialogfirstVisible = true"
            >前期资料</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogsecondVisible = true"
            >中期资料</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogsecondVisible = true"
            >后期资料</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pageTotal="pageTotals"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>
    <el-dialog
      title="前期资料"
      :visible.sync="dialogfirstVisible"
      width="85%"
      :before-close="handleClose"
    >
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="资料名称"></el-table-column>
        <el-table-column label="资料路径"></el-table-column>
        <el-table-column label="上传时间"></el-table-column>
        <el-table-column label="上传人"></el-table-column>
        <el-table-column label="审核人"></el-table-column>
        <el-table-column label="备注说明"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogfirstVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogfirstVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="中期资料"
      :visible.sync="dialogsecondVisible"
      width="85%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogsecondVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogsecondVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="后期资料"
      :visible.sync="dialogthirdVisible"
      width="85%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogthirdVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogthirdVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "cfb_alldocumentinfoList",
  data() {
    return {
      tableHeight: "450px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      mydata1: [],
      mydata: [{}],
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      dialogSearchVisible: false,
      dialogfirstVisible: false,
      dialogsecondVisible: false,
      dialogthirdVisible: false,
      mmvalue: [],
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      }
    };
  },
  props: {
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
    pagination
  },
  mounted() {},
  methods: {
    showRow({ row, rowIndex }) {
      if (row.techLevels === "差") {
        return "warn-row";
      }
      return "";
    },
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
.search_container {
  margin-bottom: 20px;
}
.el-table .warn-row {
  background: oldlace;
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
