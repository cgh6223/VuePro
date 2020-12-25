<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view">添 加</el-button>
      <el-button class="btn_color" size="mini" icon="view">高级查询</el-button>
      <el-button class="btn_color" size="mini" icon="view">导出EXCEL</el-button>
    </div>
    <el-table
            :data="mydata"
            style="width: 100%;font-size:10px;"
            align="center"
            :fit="true"
            :height="tableHeight"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}"
            @expand-change="expandRow">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
                  :data="props.row.steps"
                  style="width: 100%;font-size:10px;"
                  align="center"
                  :fit="true"
                  :height="tableHeight"
                  highlight-current-row
                  :header-cell-style="{fontSize:'12px'}"
          >

            <el-table-column prop="borrowMan" label="借阅人" align="center"></el-table-column>
            <el-table-column prop="createTime" label="借阅时间" align="center"></el-table-column>
            <el-table-column prop="reason" label="借阅原因" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" align="center"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="sortnum" label="序号" align="center"></el-table-column>
      <el-table-column prop="archiveName" label="档案名称" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="archiveOwner" label="归档人" align="center"></el-table-column>
      <el-table-column prop="resourceType" label="档案类型" align="center"></el-table-column>
      <!-- <el-table-column label="操作" fixed="right" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>

    <pagination
            :pageTotal="pageTotals"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"></pagination>

    <el-dialog
            title="高级查询"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="searchDialogShow">
      <el-form
              ref="searchform"
              :model="searchform"
              :label-width="dialog.formLabelWidth"
              style="margin:10px;width:auto;">
        <el-form-item prop="commpanyName" label="客户名称:">
          <el-input type="text" v-model="searchform.commpanyName"></el-input>
        </el-form-item>

        <el-form-item prop="userName" label="联系人名称：">
          <el-input v-model="searchform.userName"></el-input>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button @click="searchDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onSearchSubmit()">筛 选</el-button>
          <el-button @click="onSearchReset()">重 置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--添加dialog-->
    <el-table :data="totalRows" id="out-table">
      <el-table-column prop="sortnum" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="commpanyName" label="客户名称" align="center"></el-table-column>
      <el-table-column prop="department" label="联系人部门" align="center" width="220"></el-table-column>
      <el-table-column prop="duty" label="联系人职务" align="center" width="100"></el-table-column>
      <el-table-column prop="userName" label="联系人姓名" align="center" width="100"></el-table-column>
      <el-table-column prop="phone" label="联系人电话" align="center" width="100"></el-table-column>
    </el-table>
  </div>
</template>
<style>
  .el-table .warn-row {
    background: oldlace;
  }
</style>
<script>
  import pagination from "@c/pagination/index.vue";
  import XLSX from "xlsx";
  import FileSaver from "file-saver";
  import {getRowDetail} from "../../../../api/old/customer.js";

  export default {
    name: "customertableList",
    data() {
      return {
        tableHeight: "580px", //window.innerHeight - 180,
        tableData: this.mydata,
        pageTotal: this.pageTotals,
        mydata1: [],
        pageShow: {
          page: 1,
          limit: 20,
          filter: {}
        },
        searchDialogShow: false,
        searchform: {
          commpanyName: "",
          userName: ""
        },
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
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    components: {
      pagination
    },
    mounted() {
    },
    methods: {
      expandRow(rows) {
        getRowDetail().then(res => {
          this.mydata1 = res.rows;
        });
      },
      showRow({row, rowIndex}) {
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
        let filters = {filter: this.searchform};
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
        var xlsxParam = {raw: true}; // 导出的内容只做解析，不进行格式转换
        var wb = XLSX.utils.table_to_book(
            document.querySelector("#out-table"),
            xlsxParam
        );
        var wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        });
        try {
          FileSaver.saveAs(
              new Blob([wbout], {type: "application/octet-stream"}),
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
