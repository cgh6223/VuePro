<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogAddVisible = true"
        >添 加</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogSearchVisible = true"
        >查询</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogShowVisible = true"
        >数据展示
      </el-button>
    </div>
    <el-dialog
      title="添 加"
      :visible.sync="dialogAddVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="添加类型">
          <el-select placeholder="请选择">
            <el-option label="物业管理" value="Property"></el-option>
            <el-option label="车辆管理" value="vehicle"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="房东名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="车牌号">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="查询"
      :visible.sync="dialogSearchVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="添加类型">
          <el-select placeholder="请选择">
            <el-option label="物业管理" value="Property"></el-option>
            <el-option label="车辆管理" value="vehicle"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="房东名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="车牌号">
          <el-input></el-input>
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
      title="数据展示"
      :visible.sync="dialogShowVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-form ref="form" label-width="80px">
        <el-form-item label="图表数据">
          <myChart01></myChart01>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogShowVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogShowVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="物业登记"
      :visible.sync="dialogPropertyrecordVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="房屋用途">
          <el-select placeholder="请选择">
            <el-option label="食堂使用" value="Property"></el-option>
            <el-option label="宿舍使用" value="vehicle"></el-option>
            <el-option label="办公使用" value="Property"></el-option>
            <el-option label="其他使用" value="vehicle"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="房东姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="房东电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="房东身份证">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="房屋落址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="房屋租金付款类型">
          <el-select placeholder="请选择">
            <el-option label="按月" value="month"></el-option>
            <el-option label="按季度" value="season"></el-option>
            <el-option label="按年" value="year"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="租金/月">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="开户银行">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="开户账号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="水费号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电费号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="燃气号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="网络号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="座机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="有效期">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="租赁合同">
          <el-upload class="upload-demo" action="" multiple :limit="3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogPropertyrecordVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogPropertyrecordVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="车辆登记"
      :visible.sync="dialogvehiclerecordVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="车辆型号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="车辆号牌">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="购买日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="车主">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="车身颜色">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="驾乘人数">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="轮胎型号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="排量">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="燃油型号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="发动机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="使用人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="年检日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="年检有效期">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="年检经办人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李四" value="2"></el-option>
            <el-option label="王五" value="3"></el-option>
            <el-option label="四子" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保险类型">
          <el-select v-model="Mvalue1" multiple placeholder="请选择">
            <el-option label="交强险" value="1"></el-option>
            <el-option label="第三者责任险" value="2"></el-option>
            <el-option label="车上司机责任险不计免赔率" value="3"></el-option>
            <el-option label="车上司机责任险" value="4"></el-option>
            <el-option label="车上乘客责任险不计免赔率" value="5"></el-option>
            <el-option label="车上乘客责任险" value="6"></el-option>
            <el-option label="三责不计免赔率" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保险公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="保险公司联系人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="保险公司联系人电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="保险金额">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="保险有效期">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="保险扫描件">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogvehiclerecordVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogvehiclerecordVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="物业管理" name="PropertyManagement">
        <el-table
          :data="mydata"
          style="width: 100%;font-size:10px;"
          align="left"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{ fontSize: '14px' }"
        >
          <el-table-column prop="date" label="房东姓名" width="100">
          </el-table-column>
          <el-table-column prop="date" label="房东电话" width="100">
          </el-table-column>
          <el-table-column prop="date" label="房东身份证" width="100">
          </el-table-column>
          <el-table-column prop="date" label="房屋落址" width="100">
          </el-table-column>
          <el-table-column prop="date" label="房屋用途" width="100">
          </el-table-column>
          <el-table-column prop="date" label="房屋租金付款类型" width="100">
          </el-table-column>
          <el-table-column prop="date" label="租金/月" width="100">
          </el-table-column>
          <el-table-column prop="date" label="开户名称" width="100">
          </el-table-column>
          <el-table-column prop="date" label="开户银行" width="100">
          </el-table-column>
          <el-table-column prop="date" label="开户账号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="水费号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="电费号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="燃气号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="网络号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="座机号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="有效期" width="100">
          </el-table-column>
          <el-table-column prop="date" label="租赁合同" width="100">
          </el-table-column>
          <el-table-column label="操作" fixed="right" align="left" width="150">
            <template slot-scope>
              <el-button
                size="small"
                type="text"
                @click="dialogPropertyrecordVisible = true"
                >登记</el-button
              >
              <el-button size="small" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination
          :pageTotal="pageTotals"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        ></pagination>
      </el-tab-pane>
      <el-tab-pane label="车辆管理" name="vehicleManagement"
        ><el-table
          :data="mydata"
          style="width: 100%;font-size:10px;"
          align="left"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{ fontSize: '14px' }"
        >
          <el-table-column prop="date" label="车辆型号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="车辆号牌" width="100">
          </el-table-column>
          <el-table-column prop="date" label="购买日期" width="100">
          </el-table-column>
          <el-table-column prop="date" label="车主" width="100">
          </el-table-column>
          <el-table-column prop="date" label="车身颜色" width="100">
          </el-table-column>
          <el-table-column prop="date" label="驾乘人数" width="100">
          </el-table-column>
          <el-table-column prop="date" label="轮胎型号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="排量" width="100">
          </el-table-column>
          <el-table-column prop="date" label="燃油型号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="发动机号" width="100">
          </el-table-column>
          <el-table-column prop="date" label="使用人" width="100">
          </el-table-column>
          <el-table-column prop="date" label="年检日期" width="100">
          </el-table-column>
          <el-table-column prop="date" label="年检经办人" width="100">
          </el-table-column>
          <el-table-column prop="date" label="车辆保险" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险公司名称" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险公司联系人" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险公司联系人电话" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险金额" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险有效期" width="100">
          </el-table-column>
          <el-table-column prop="date" label="保险扫描件" width="100">
          </el-table-column>
          <el-table-column label="操作" fixed="right" align="left" width="150">
            <template slot-scope>
              <el-button
                size="small"
                type="text"
                @click="dialogvehiclerecordVisible = true"
                >登记</el-button
              >
              <el-button size="small" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination
          :pageTotal="pageTotals"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        ></pagination
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
import myChart01 from "./Echarts.vue";
export default {
  name: "logisticsList",
  data() {
    return {
      dialogAddVisible: false,
      dialogSearchVisible: false,
      dialogShowVisible: false,
      dialogPropertyrecordVisible: false,
      dialogvehiclerecordVisible: false,
      activeName: "PropertyManagement",
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
      mydata: [{}],
      Mvalue1: [],
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
    pagination,
    myChart01
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {
      this.pageShow.page = val;
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
