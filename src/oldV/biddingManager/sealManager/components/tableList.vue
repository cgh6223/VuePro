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
          <el-steps finish-status="success" :active="props.row.status">
            <el-step
              v-for="(item1,index) in mydata1"
              :key="index"
              :title="item1.title"
              :description="item1.desc"
            ></el-step>
          </el-steps>
        </template>
      </el-table-column>
      <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="nums" label="份数" align="center"></el-table-column>
      <el-table-column prop="sealRequirement" label="盖章要求" align="center"></el-table-column>
      <el-table-column prop="packRequirement" label="包封要求" align="center"></el-table-column>
      
      <!-- <el-table-column label="操作" fixed="right" align="center" width="280">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="goWork(scope.$index)">进入工作</el-button>        
        </template>
      </el-table-column> -->
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
        { title: "审核中", desc: "审核中" },
        { title: "已退回", desc: "已退回" },
        { title: "审核完成", desc: "审核完成" }      
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
    totalRows: {
      type: Array,
      default: () => {
        return [];
      }
    }  
   
  },
  components: {
 
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
  height: 570px;
  max-height: 570px;
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