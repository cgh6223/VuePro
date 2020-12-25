<template>
  <div class="logContainer">
    <h1>招标备案机构管理</h1>
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogaddVisible = true"
        >添 加</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogsearchVisible = true"
        >高级查询</el-button
      >
    </div>

    <el-dialog
      title="添 加"
      :visible.sync="dialogaddVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="备案机构名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogaddVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogaddVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="高级查询"
      :visible.sync="dialogsearchVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="备案机构名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogsearchVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogsearchVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="编辑"
      :visible.sync="dialogeditVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="备案机构名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogeditVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogeditVisible = false"
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
      <el-table-column prop="date" label="备案机构名称" style="width: 30%;">
      </el-table-column>
      <el-table-column prop="date" label="地址" style="width: 25%;">
      </el-table-column>
      <el-table-column prop="date" label="联系人" style="width: 25%;">
      </el-table-column>
      <el-table-column prop="date" label="联系电话" style="width: 20%;">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="left" width="150">
        <template slot-scope>
          <el-button size="small" type="text" @click="dialogeditVisible = true"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogremoveVisible = true"
            >删除</el-button
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
<style>
.el-table .warn-row {
  background: oldlace;
}
</style>
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "cfb_recordkeepList",
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
      dialogsearchVisible: false,
      dialogaddVisible: false,
      dialogeditVisible: false,
      dialogremoveVisible: false,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      form: {}
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
