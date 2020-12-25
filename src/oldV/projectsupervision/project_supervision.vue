<template>
  <div class="logContainer">
    <h1>工程监理</h1>
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view" @click="onAdd()"
        >新增项目</el-button
      >
      <el-button class="btn_color" size="mini" icon="view" @click="onSearch()"
        >高级查询</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="exportExcel()"
        >工作指南</el-button
      >
    </div>
    <a-steps :current="current" @change="onChange">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content" v-html="steps[current].content"></div>
    <el-steps :active="elac" align-center>
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
        @click.native="elac = 1"
      ></el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
        @click.native="elac = 2"
      ></el-step>
      <el-step
        title="步骤3"
        description="这是一段很长很长很长的描述性文字"
        @click.native="elac = 3"
      ></el-step>
      <el-step
        title="步骤4"
        description="这是一段很长很长很长的描述性文字"
        @click.native="elac = 4"
      ></el-step>
    </el-steps>
    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column label="操作" fixed="right" align="center" width="150">
        <template slot-scope>
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :pageTotal="pageTotals"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>

    <el-dialog
      title="高级查询"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
      :visible.sync="searchDialogShow"
    >
    </el-dialog>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "supervisionList",
  data() {
    return {
      current: 0,
      elac: this.current + 1,
      tableHeight: "450px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      active: 0,
      searchDialogShow: false,
      searchform: {
        proName: "",
        classify: ""
      },
      mydata: [{}],
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      steps: [
        {
          title: "First",
          content: "<h1>First-content</h1>"
        },
        {
          title: "Second",
          content: "<h1>Second-content</h1>"
        },
        {
          title: "Last",
          content: "<h1>Last-content</h1>"
        }
      ]
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
    onChange(current) {
      console.log("onChange:", current);
      this.current = current;
    },
    renderContent: function(h, data) {
      return data.label;
    },
    onExpand: function(data) {
      if ("expand" in data) {
        data.expand = !data.expand;

        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    onNodeClick: function(e, data) {
      alert(data.label);
    },
    collapse: function(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    toggleExpand: function(data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function(item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    },
    handleCurrentChange(val) {
      this.pageShow.page = val;

      this.onSearchSubmit();
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
      this.onSearchSubmit();
    },
    next() {
      if (this.active++ > 2) this.active = 0;
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

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
