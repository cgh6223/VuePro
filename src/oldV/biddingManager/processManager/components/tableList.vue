<template>
  <div class="logContainer">
    <el-table
      :data="mydata"
      style="width: 100%;font-size:9px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{fontSize:'14px'}">
      <el-table-column type="expand">
        <template slot-scope="props">
          <div v-show="props.row.tenderType!='报价函形式'">
          <el-steps finish-status="success" :active="props.row.status">
            <el-step
              v-for="(item1,index) in mydata1"
              :key="index"
              :title="item1.title"
              :description="item1.desc"
            ></el-step>
          </el-steps>
          </div>
          <div v-show="props.row.tenderType=='报价函形式'">
            <el-steps finish-status="success" :active="props.row.status">
            <el-step
              v-for="(item1,index) in mydata2"
              :key="index"
              :title="item1.title"
              :description="item1.desc"
            ></el-step>
          </el-steps>
          </div>
          <el-row :gutter="10" style="padding-top:15px">
            <el-col :span="2">
              <span style="color:#409EFF;font-size:12px;text-align:right">实际完成进度：</span>
            </el-col>
            <el-col :span="22">
              <el-progress :text-inside="true" :stroke-width="26" :percentage="props.row.bfb" :color="customColors"></el-progress>
            </el-col>
          </el-row>

        </template>
      </el-table-column>
      <el-table-column prop="mainBody" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="scopes" label="责任人" align="center"></el-table-column>
      <el-table-column prop="tenderType" label="投标形式" align="center"></el-table-column>
      <el-table-column prop="tenderOpenTime" label="开标时间" align="center"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="280">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="goWork(scope.$index)">进入工作</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--导出table-->
    <el-table
      :data="totalRows"
      :header-cell-style="{fontSize:'14px'}"
      id="out-table"
      v-show="false"
    >
      <el-table-column prop="commpanyName" fixed label="客户名称" align="center"></el-table-column>
      <el-table-column prop="visitTime" label="回访时间" align="center"></el-table-column>
      <el-table-column prop="visitType" label="回访方式" align="center"></el-table-column>
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
      tableHeight: "98%", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
       mydata1: [
        { title: "获取文件", desc: "获取文件" },
        { title: "文件制作", desc: "文件制作" },
        { title: "开标评标", desc: "开标评标" },
        { title: "结果跟踪", desc: "结果跟踪" },
        { title: "后期工作", desc: "后期工作" }
      ],
       mydata2: [
        { title: "报价函制作", desc: "报价函制作" },
        { title: "结果跟踪", desc: "结果跟踪" }
      ],
      customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
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
  mounted() {},
  methods: {
    goWork(index){
      this.$emit("goWork",index);
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
.mydialog {
  margin: 10px;
  width: auto;
  height: 500px;
  overflow: auto;
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
  height: 370px;
  max-height: 370px;
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
