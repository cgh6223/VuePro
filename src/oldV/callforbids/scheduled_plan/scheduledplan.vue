<template>
  <div class="logContainer">
    <h1>招标进度计划管理</h1>
    <el-tabs :tab-position="tabPosition" style="height: 600px;">
      <el-tab-pane label="招标采购文档">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >招标采购文档录入</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目编号" prop="name"></el-table-column>
          <el-table-column label="项目名称" prop="name"></el-table-column>
          <el-table-column label="项目经理" prop="name"></el-table-column>
          <el-table-column label="文档说明" prop="name"></el-table-column>
          <el-table-column label="审核人" prop="name"></el-table-column>
          <el-table-column label="审核状态" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件上传</el-button>
              <el-button size="small" type="text">提交审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="拦标价论证">
         <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >拦标价论证录入</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="论证名称" prop="name"></el-table-column>
          <el-table-column label="论证时间" prop="name"></el-table-column>
          <el-table-column label="论证地点" prop="name"></el-table-column>
          <el-table-column label="申请金额" prop="name"></el-table-column>
          <el-table-column label="拦标价金额" prop="name"></el-table-column>
          <el-table-column label="论证状态" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件上传</el-button>
              <el-button size="small" type="text">费用申请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="需求公示">
         <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >发布需求公示</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目名称" prop="name"></el-table-column>
          <el-table-column label="项目编号" prop="name"></el-table-column>
          <el-table-column label="合同编号" prop="name"></el-table-column>
          <el-table-column label="发布时间" prop="name"></el-table-column>
          <el-table-column label="发布网站名" prop="name"></el-table-column>
          <el-table-column label="网站地址" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件图上传</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="招标公示">
         <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >发布招标公示</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目名称" prop="name"></el-table-column>
          <el-table-column label="项目编号" prop="name"></el-table-column>
          <el-table-column label="合同编号" prop="name"></el-table-column>
          <el-table-column label="发布时间" prop="name"></el-table-column>
          <el-table-column label="发布网站名" prop="name"></el-table-column>
          <el-table-column label="网站地址" prop="name"></el-table-column>
          <el-table-column label="状态" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件图上传</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="报名单位">
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目名称" prop="name"></el-table-column>
          <el-table-column label="项目编号" prop="name"></el-table-column>
          <el-table-column label="合同编号" prop="name"></el-table-column>
          <el-table-column label="报名单位名" prop="name"></el-table-column>
          <el-table-column label="文件费" prop="name"></el-table-column>
          <el-table-column label="报名时间" prop="name"></el-table-column>
          <el-table-column label="报名地址" prop="name"></el-table-column>
          <el-table-column
            label="投标保证金缴纳截止时间"
            prop="name"
          ></el-table-column>
          <el-table-column
            label="投标保证金缴纳金额"
            prop="name"
          ></el-table-column>
          <el-table-column
            label="投标保证金缴纳单位"
            prop="name"
          ></el-table-column>
          <el-table-column label="开标时间" prop="name"></el-table-column>
          <el-table-column label="开标地点" prop="name"></el-table-column>
          <el-table-column label="是否延期" prop="name"></el-table-column>
          <el-table-column label="延期时间" prop="name"></el-table-column>
          <el-table-column label="状态" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件图上传</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="开标评标">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >人员安排</el-button
          >
          <el-button class="btn_color" size="mini" icon="view"
            >费用申请</el-button
          >
          <el-button class="btn_color" size="mini" icon="view">公示</el-button>
          <el-button class="btn_color" size="mini" icon="view">复审</el-button>
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="中标人" prop="name"></el-table-column>
          <el-table-column label="中标金额" prop="name"></el-table-column>
          <el-table-column label="招标人人数" prop="name"></el-table-column>
          <el-table-column label="监督人人数" prop="name"></el-table-column>
          <el-table-column
            label="评标委员会成员及联系电话"
            prop="name"
          ></el-table-column>
          <el-table-column label="评审费" prop="name"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">附件图上传</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="中标通知书">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >中标通知书采集</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目编号"></el-table-column>
          <el-table-column label="项目名称"></el-table-column>
          <el-table-column label="业主名称"></el-table-column>
          <el-table-column label="备注"></el-table-column>
          <el-table-column label="中标通知书上开标时间"></el-table-column>
          <el-table-column label="是否为入库招标"></el-table-column>

          <el-table-column label="中标单位"></el-table-column>
          <el-table-column label="中标通知书上中标价类型"></el-table-column>
          <el-table-column label="有具体中标金额"></el-table-column>
          <el-table-column label="无具体中标金额"></el-table-column>
          <el-table-column label="评价意见函等级"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">提交审核</el-button>
              <el-button size="small" type="text">附件上传</el-button>
              <el-button size="small" type="text">保证金退还</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="质疑或投诉">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >质疑或投诉信息录入</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目编号"></el-table-column>
          <el-table-column label="项目名称"></el-table-column>
          <el-table-column label="项目经理"></el-table-column>
          <el-table-column label="申请类型"></el-table-column>
          <el-table-column label="质疑或投诉人名称"></el-table-column>
          <el-table-column label="质疑或投诉日期"></el-table-column>
          <el-table-column label="备注"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">投诉函</el-button>
              <el-button size="small" type="text">审核附件</el-button>
              <el-button size="small" type="text">提交审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="流标、废标申请">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >项目流标、废标信息录入</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目编号"></el-table-column>
          <el-table-column label="项目名称"></el-table-column>
          <el-table-column label="业主名称"></el-table-column>
          <el-table-column label="流标、废标原因"></el-table-column>

          <el-table-column label="备注"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">提交审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="项目终止">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >项目终止信息录入</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="项目编号"></el-table-column>
          <el-table-column label="项目名称"></el-table-column>
          <el-table-column label="业主名称"></el-table-column>
          <el-table-column label="终止原因"></el-table-column>

          <el-table-column label="备注"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">提交审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="费用申请">
        <div class="search_container searchArea">
          <el-button class="btn_color" size="mini" icon="view"
            >费用申请</el-button
          >
        </div>
        <el-table :data="mydata" stripe style="width: 100%">
          <el-table-column label="经办人"></el-table-column>
          <el-table-column label="项目编号"></el-table-column>
          <el-table-column label="项目名称"></el-table-column>
          <el-table-column label="费用类型"></el-table-column>
          <el-table-column label="金额"></el-table-column>
          <el-table-column label="申请事由"></el-table-column>
          <el-table-column label="备注"></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button size="small" type="text">提交审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
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
  name: "cfb_scheduledList",
  data() {
    return {
      tableHeight: "200px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      mydata1: [],
      mydata: [{ name: "" }],
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      tabPosition: "left",
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
