<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view" @click="onAdd()">添 加</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="onSearch()">高级查询</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="exportExcel()">导出EXCEL</el-button>
    </div>
    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{fontSize:'14px'}"
    >
      <el-table-column prop="sortnum" fixed label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="proName" fixed label="项目名称" align="center"></el-table-column>
      <el-table-column prop="ways" label="招标方式" align="center" width="100"></el-table-column>
      <el-table-column prop="classify" label="业务分类" align="center" width="100">
      </el-table-column>
      <el-table-column prop="type" label="业务类型" align="center" width="100">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="150">
        <template slot-scope="scope">
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
      <el-form
        ref="searchform"
        :model="searchform"
        :label-width="dialog.formLabelWidth"
        style="margin:10px;width:auto;"
      >
        <el-form-item prop="proName" label="项目名称:">
          <el-input type="text" v-model="searchform.proName"></el-input>
        </el-form-item>
        <el-form-item prop="classify" label="业务分类：">
          <el-select v-model="searchform.classify" placeholder="业务分类">
            <el-option
              v-for="item in payType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button @click="searchDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onSearchSubmit()">筛 选</el-button>
          <el-button @click="onSearchReset()">重 置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--添加dialog-->
    <el-table
      :data="totalRows"
      style="font-size:10px;"
      align="center"
      :header-cell-style="{fontSize:'14px'}"
      id="out-table"
      v-show="false"
    >
    <el-table-column prop="sortnum"  label="序号" align="center"></el-table-column>
    <el-table-column prop="proName"  label="项目名称" align="center"></el-table-column>
    <el-table-column prop="ways" label="招标方式" align="center" width="100"></el-table-column>
    <el-table-column prop="classify" label="业务分类" align="center" width="100"></el-table-column>
    <el-table-column prop="type" label="业务类型" align="center" width="100"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
import XLSX from "xlsx";
import FileSaver from "file-saver";
export default {
  name: "customertableList",
  data() {
    return {
      tableHeight: "580px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      searchDialogShow: false,
      searchform: {
        proName: "",
        classify: ""
      },
      payType: [
        { label: "工程咨询", value: "工程咨询" },
        { label: "工程造价", value: "工程造价" },
        { label: "招标代理", value: "招标代理" },
        { label: "工程监理", value: "工程监理" },
        { label: "全过程工程咨询", value: "全过程工程咨询" }
      ],
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
        return [];
      }
    },
    pageTotals: {
      type: Number,
      default: 20
    },
    totalRows: {
      type:Array,
      default:()=>{
        return [];
      }
    }
  },
  components: {
    pagination
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
    },
    exportExcel() {
      /* 从表生成工作簿对象 */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: "application/octet-stream" }),
          //设置导出文件名称
          "sheetjs.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
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
