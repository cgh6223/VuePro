<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogADDVisible = true"
        >收款登记</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogSearchVisible = true"
        >高级查询</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogToExcelVisible = true"
        >导出EXCEL</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogAuthorizationVisible = true"
        >管理授权</el-button
      >
    </div>

    <el-dialog title="收款登记" :visible.sync="dialogADDVisible" width="45%">
      <el-form ref="form" :model="form" label-width="130px">
        <el-form-item label="收款月份">
          <el-date-picker type="month" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="付款人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收款金额（元）">
          <el-input-number
            :min="1"
            :max="900000000"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogADDVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogADDVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="高级查询" :visible.sync="dialogSearchVisible" width="45%">
      <el-form ref="form" label-width="100px">
        <el-form-item label="收款日期">
          <el-date-picker type="month" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="付款人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="付款类型">
          <el-select placeholder="请选择">
            <el-option label="公账" value="1"></el-option>
            <el-option label="现金" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款类型">
          <el-select placeholder="请选择">
            <el-option label="服务费" value="1"></el-option>
            <el-option label="文件费" value="2"></el-option>
            <el-option label="管理费" value="1"></el-option>
            <el-option label="其他" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目编号">
          <el-input prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-input prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="金额（元）">
          <el-input-number
            :min="1"
            :max="900000000"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="是否发生退款">
          <el-checkbox v-model="checked">退款</el-checkbox>
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
      title="导出电子表格"
      :visible.sync="dialogToExcelVisible"
      width="45%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogToExcelVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogToExcelVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="管理授权"
      :visible.sync="dialogAuthorizationVisible"
      width="60%"
    >
      <el-form ref="form" label-width="50px" :inline="true" size="mini">
        <el-form-item label="日期">
          <el-date-picker type="month" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="部门">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">增加</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="所属部门" width="180">
        </el-table-column>
        <el-table-column prop="person" label="负责人"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAuthorizationVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAuthorizationVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="收款明细项目分配"
      :visible.sync="dialogGatherListVisible"
      width="60%"
    >
      <el-form ref="form" label-width="100px">
        <el-form-item label="收款码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收款类型">
          <el-select placeholder="请选择">
            <el-option label="服务费" value="1"></el-option>
            <el-option label="文件图纸费" value="2"></el-option>
            <el-option label="收到的投标保证金" value="3"></el-option>
            <el-option label="退回的投标保证金" value="4"></el-option>
            <el-option label="收到的风险保证金" value="5"></el-option>
            <el-option label="退回的风险保证金" value="6"></el-option>
            <el-option label="收到的履约保证金" value="7"></el-option>
            <el-option label="管理费" value="8"></el-option>
            <el-option label="代缴款" value="9"></el-option>
            <el-option label="其他" value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="合同编号">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入查询"
          ></el-input>
        </el-form-item>
        <el-form-item label="合同名称">
          <el-input prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="项目编号">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入内容查询"
          ></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入内容查询"
          ></el-input>
        </el-form-item>
        <el-form-item label="收款金额（元）">
          <el-input-number
            :min="1"
            :max="900000000"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogGatherListVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogGatherListVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="退款申请"
      :visible.sync="dialogrefoundVisible"
      width="60%"
    >
      <el-form ref="form" label-width="140px">
        <el-form-item label="登记的金额选择">
          <el-select placeholder="请选择">
            <el-option label="服务费" value="1"></el-option>
            <el-option label="文件图纸费" value="2"></el-option>
            <el-option label="收到的投标保证金" value="3"></el-option>
            <el-option label="退回的投标保证金" value="4"></el-option>
            <el-option label="收到的风险保证金" value="5"></el-option>
            <el-option label="退回的风险保证金" value="6"></el-option>
            <el-option label="收到的履约保证金" value="7"></el-option>
            <el-option label="管理费" value="8"></el-option>
            <el-option label="代缴款" value="9"></el-option>
            <el-option label="其他" value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="退款申请说明">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="退回回执单上传">
          <el-upload class="upload-demo" action="" multiple :limit="3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogrefoundVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogrefoundVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="登记状态" :visible.sync="dialogstateVisible" width="30%">
      <el-steps :active="active" finish-status="success">
        <el-step title="未登记"></el-step>
        <el-step title="登记不完整"></el-step>
        <el-step title="已登记"></el-step>
      </el-steps>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogstateVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogstateVisible = false"
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
      <el-table-column prop="date" label="收款日期" width="100">
      </el-table-column>
      <el-table-column prop="date" label="付款人" width="100">
      </el-table-column>
      <el-table-column prop="date" label="收款金额" width="200">
      </el-table-column>
      <el-table-column prop="date" label="所属部门" width="200">
      </el-table-column>
      <el-table-column prop="date" label="收款类型" width="100">
      </el-table-column>
      <el-table-column prop="date" label="实际收款金额" width="200">
      </el-table-column>
      <el-table-column prop="date" label="退款金额" width="200">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="200">
        <template>
          <el-button
            size="small"
            type="text"
            @click="dialogGatherListVisible = true"
            >收款明细登记</el-button
          >
          <el-button size="small" type="text" @click="dialogstateVisible = true"
            >状态显示</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogrefoundVisible = true"
            >退款申请</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogupfileVisible = true"
            >上传附件</el-button
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
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "gatheringList",
  data() {
    return {
      tableHeight: "450px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      active: 2,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      dialogADDVisible: false,
      dialogToExcelVisible: false,
      dialogSearchVisible: false,
      dialogGatherListVisible: false,
      dialogAuthorizationVisible: false,
      dialogstateVisible: false,
      dialogrefoundVisible: false,
      dialogupfileVisible: false,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      mydata: [{}]
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
input {
  width: 100px;
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
