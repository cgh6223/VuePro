<template>
  <div class="logContainer">
    <h1>招标项目管理</h1>
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

    <el-dialog
      title="项目计划"
      :visible.sync="dialogprojectplanVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-form :inline="true" ref="form" label-width="100px">
        <el-form-item label="进度名称">
          <el-input size="mini"></el-input>
        </el-form-item>
        <el-form-item label="计划完成时间">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
         <el-form-item label="执行人：">
          <el-select v-model="mmvalue1" placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李四" value="2"></el-option>
            <el-option label="王五" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="onSubmit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="进度名称"></el-table-column>
        <el-table-column label="计划完成时间"></el-table-column>
        <el-table-column label="实际完成"></el-table-column>
        <el-table-column label="执行人"></el-table-column>
        <el-table-column label="审核人"></el-table-column>
        <el-table-column label="备注说明"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogprojectplanVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogprojectplanVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="项目人员信息"
      :visible.sync="dialogprojectpersonVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="200px">
        <el-form-item label="项目经理">
          <el-select v-model="mmvalue1" placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李四" value="2"></el-option>
            <el-option label="王五" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目组成员">
          <el-select v-model="mmvalue" multiple placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李四" value="2"></el-option>
            <el-option label="王五" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业主方项目联系人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="业主方项目联系人电话">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogprojectpersonVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogprojectpersonVisible = false"
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
          <el-button
            size="small"
            type="text"
            @click="dialogprojectpersonVisible = true"
            >项目人员</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogprojectplanVisible = true"
            >项目计划</el-button
          >
          <el-button size="small" type="text">审核申请</el-button>
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
<style>
.el-table .warn-row {
  background: oldlace;
}
</style>
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "cfb_projectinfoList",
  data() {
    return {
      tableHeight: "450px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      mydata1: [],
      mydata: [{}],
      dialogSearchVisible: false,
      dialogprojectplanVisible: false,
      dialogprojectpersonVisible: false,
      mmvalue: [],
      mmvalue1: "",
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
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
