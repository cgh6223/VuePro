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
      <el-table-column prop="proName" fixed label="项目名称" align="center">
        <template slot-scope="scope">
         <router-link :to="{path:'/bidding/bidding_detail?ts=inviteList&ids='+scope.row.id}">
          <span>{{scope.row.proName}}</span></router-link>
        </template>
      </el-table-column>
      <el-table-column prop="signName" label="报名人" align="center" width="100"></el-table-column>
      <el-table-column prop="getWay" label="获取方式" align="center" width="100"></el-table-column>
      <el-table-column prop="getPlace" label="购买招标文件地点" align="center" width="100"></el-table-column>
      <el-table-column prop="getTime" label="购买招标文件时间" align="center" width="100"></el-table-column>
      <el-table-column prop="getMoney" label="招标文件费" align="center" width="100"></el-table-column>
      <el-table-column prop="inviteNo" label="招标编号" align="center" width="100"></el-table-column>
      <el-table-column prop="hasFile" label="是否有招标文件" align="center" width="100"></el-table-column>
      <el-table-column prop="endTime" label="投标截止时间" align="center" width="180" sortable></el-table-column>
      <el-table-column
        prop="dayDiff"
        :formatter="showTime"
        label="剩余时间"
        align="center"
        width="100"
      ></el-table-column>
      <el-table-column prop="tenderOpenTime" label="开标时间" align="center" width="180" sortable></el-table-column>
      <el-table-column prop="budget" label="项目预算" align="center" width="100"></el-table-column>
      <el-table-column prop="investment" label="投资额" align="center" width="100"></el-table-column>
      <el-table-column prop="fixMoney" label="建安投资" align="center" width="100"></el-table-column>
      <el-table-column prop="limitPrice" label="最高限价" align="center" width="100"></el-table-column>
      <el-table-column prop="securityPrice" label="投标保证金金额" align="center" width="100"></el-table-column>
      <el-table-column prop="securityTime" label="投标保证金缴纳截止时间" align="center" width="100"></el-table-column>
      <el-table-column prop="isAsk" label="是否需要答辩" align="center" width="100"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="250">
        <template slot-scope="scope" style="margin-left:10px">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button v-if="scope.row.hasFile==='是'" type="text" size="small" @click="showPDF()">查看附件</el-button>
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
      width="40%"
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
        <el-form-item prop="endTime" label="投标截止时间:">
          <el-col :span="11">
            <el-date-picker
              type="datetime"
              placeholder="选择开始日期"
              v-model="searchform.endTime.begin"
              style="width: 100%;"
              default-time="00:00:00"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="datetime"
              placeholder="选择结束日期"
              v-model="searchform.endTime.end"
              style="width: 100%;"
              default-time="23:59:59"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item prop="budget" label="项目预算:">
          <el-col :span="11">
            <el-input-number
              v-model="searchform.budget.begin"
              size="mini"
              :min="1"
              controls-position="right"
              label="预算最小值"
            ></el-input-number>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-input-number
              v-model="searchform.budget.end"
              size="mini"
              :min="1"
              controls-position="right"
              label="预算最大值"
            ></el-input-number>
          </el-col>
        </el-form-item>
        <!-- <el-form-item prop="classify" label="业务分类：">
          <el-select v-model="searchform.classify" placeholder="业务分类">
            <el-option
              v-for="item in payType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>-->
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
      <el-table-column prop="sortnum" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="proName" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="signName" label="报名人" align="center" width="100"></el-table-column>
      <el-table-column prop="getWay" label="获取方式" align="center" width="100"></el-table-column>
      <el-table-column prop="getPlace" label="购买招标文件地点" align="center" width="100"></el-table-column>
      <el-table-column prop="getTime" label="购买招标文件时间" align="center" width="100"></el-table-column>
      <el-table-column prop="getMoney" label="招标文件费" align="center" width="100"></el-table-column>
      <el-table-column prop="inviteNo" label="招标编号" align="center" width="100"></el-table-column>
      <el-table-column prop="hasFile" label="是否有招标文件" align="center" width="100"></el-table-column>
      <el-table-column prop="endTime" label="投标截止时间" align="center" sortable></el-table-column>
      <el-table-column prop="tenderOpenTime" label="开标时间" align="center" sortable></el-table-column>
      <el-table-column prop="budget" label="项目预算" align="center" width="100"></el-table-column>
      <el-table-column prop="investment" label="投资额" align="center" width="100"></el-table-column>
      <el-table-column prop="fixMoney" label="建安投资" align="center" width="100"></el-table-column>
      <el-table-column prop="limitPrice" label="最高限价" align="center" width="100"></el-table-column>
      <el-table-column prop="securityPrice" label="投标保证金金额" align="center" width="100"></el-table-column>
      <el-table-column prop="securityTime" label="投标保证金缴纳截止时间" align="center" width="100"></el-table-column>
      <el-table-column prop="isAsk" label="是否需要答辩" align="center" width="100"></el-table-column>
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
        endTime: { begin: "", end: "" },
        budget: { begin: "", end: "" }
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
    showPDF() {
      let routeData = this.$router.resolve({
        path: "/pdfview",
        query: { src: "test.pdf" }
      });
      window.open(routeData.href, "_blank");
    },
    showTime(row, col) {
      if (row.dayDiff < 0) {
        return "已过期";
      }
      return row.dayDiff + "天";
    },
    showTitle(row,col){
      this.$router.push({path:'/bidding/bidding_detail?ts=inviteList&ids='+row.id});
    },
    adds(row) {
      this.$message("这是一条关于:" + row.budget);
    },
    onSearch() {
      this.searchDialogShow = true;
    },
    onSearchSubmit() {
      let keys = Object.keys(this.searchform);
      keys = keys.filter(k => {
        return (
          typeof this.searchform[k] === "string" && this.searchform[k] !== ""
        );
      });
      if (
        this.searchform.proName !== ""
        // keys.every(k => {
        //   return this.searchform[k] !== "";
        // }) //只有有查询内容，就从page=1开始查询
      ) {
        this.pageShow = {
          page: 1,
          limit: 20,
          filter: {}
        };
      }
      // console.log("keys:" + JSON.stringify(keys));
      let filters = { filter:{'proName': this.searchform.proName} };
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
