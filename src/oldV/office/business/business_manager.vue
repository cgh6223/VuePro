<template>
  <div class="logContainer">
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
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogexcelVisible = true"
        >导出EXCEL</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogdatashowVisible = true"
        >数据展示</el-button
      >
    </div>
    <el-dialog title="添加" :visible.sync="dialogaddVisible" width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="公司类型">
          <el-select placeholder="请选择">
            <el-option label="总公司" value="总公司"></el-option>
            <el-option label="自营分公司" value="自营分公司"></el-option>
            <el-option label="协议分公司" value="协议分公司"></el-option>
            <el-option label="项目分公司" value="项目分公司"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogaddVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogaddVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="高级查询" :visible.sync="dialogsearchVisible" width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="公司类型">
          <el-select placeholder="请选择">
            <el-option label="总公司" value="总公司"></el-option>
            <el-option label="自营分公司" value="自营分公司"></el-option>
            <el-option label="协议分公司" value="协议分公司"></el-option>
            <el-option label="项目分公司" value="项目分公司"></el-option>
          </el-select>
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
      title="数据展示"
      :visible.sync="dialogdatashowVisible"
      width="60%"
    >
      <el-tabs v-model="activeName">
        <el-tab-pane label="协议分公司" name="first">
          <el-table
            :data="mydata"
            style="width: 100%;font-size:10px;"
            align="center"
            :fit="true"
            :height="tableHeight"
            highlight-current-row
            :header-cell-style="{ fontSize: '14px' }"
          >
            <el-table-column
              prop="name"
              label="公司名称"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="公司类型"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="cardno"
              label="统一社会信用代码"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="date"
              label="负责人"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="营业场所"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="credate"
              label="成立日期"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="areadate"
              label="营业期限"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="recodeorg"
              label="登记机关"
              width="180"
            ></el-table-column>
            <el-table-column
              label="操作"
              fixed="right"
              align="center"
              width="150"
            >
              <template slot-scope>
                <el-button size="small" type="text">编辑</el-button>
                <el-button size="small" type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="自营分公司" name="second">
          <el-table
            :data="mydata"
            style="width: 100%;font-size:10px;"
            align="center"
            :fit="true"
            :height="tableHeight"
            highlight-current-row
            :header-cell-style="{ fontSize: '14px' }"
          >
            <el-table-column
              prop="name"
              label="公司名称"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="公司类型"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="cardno"
              label="统一社会信用代码"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="date"
              label="负责人"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="营业场所"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="credate"
              label="成立日期"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="areadate"
              label="营业期限"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="recodeorg"
              label="登记机关"
              width="180"
            ></el-table-column>
            <el-table-column
              label="操作"
              fixed="right"
              align="center"
              width="150"
            >
              <template slot-scope>
                <el-button size="small" type="text">编辑</el-button>
                <el-button size="small" type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="项目分公司" name="third">
          <el-table
            :data="mydata"
            style="width: 100%;font-size:10px;"
            align="center"
            :fit="true"
            :height="tableHeight"
            highlight-current-row
            :header-cell-style="{ fontSize: '14px' }"
          >
            <el-table-column
              prop="name"
              label="公司名称"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="公司类型"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="cardno"
              label="统一社会信用代码"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="date"
              label="负责人"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="营业场所"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="credate"
              label="成立日期"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="areadate"
              label="营业期限"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="recodeorg"
              label="登记机关"
              width="180"
            ></el-table-column>
            <el-table-column
              label="操作"
              fixed="right"
              align="center"
              width="150"
            >
              <template slot-scope>
                <el-button size="small" type="text">编辑</el-button>
                <el-button size="small" type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogdatashowVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogdatashowVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column
        prop="name"
        label="公司名称"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="公司类型"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="cardno"
        label="统一社会信用代码"
        width="180"
      ></el-table-column>
      <el-table-column label="负责人" width="180"></el-table-column>
      <el-table-column label="营业场所" width="180"></el-table-column>
      <el-table-column label="成立日期" width="180"></el-table-column>
      <el-table-column label="营业期限" width="180"></el-table-column>
      <el-table-column label="登记机关" width="180"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="150">
        <template slot-scope>
          <el-button size="small" type="text" @click="dialogfirstVisible = true"
            >首次登记</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="dialogchangeVisible = true"
            >变更登记</el-button
          >
          <el-button size="small" type="text" @click="dialoglookVisible = true"
            >查看信息</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :pageTotal="pageTotals"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>
    <el-dialog title="首次登记" :visible.sync="dialogfirstVisible" width="30%">
      <el-form ref="form" label-width="150px">
        <el-form-item label="公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="公司类型">
          <el-select placeholder="请选择">
            <el-option label="总公司" value="总公司"></el-option>
            <el-option label="自营分公司" value="自营分公司"></el-option>
            <el-option label="协议分公司" value="协议分公司"></el-option>
            <el-option label="项目分公司" value="项目分公司"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="统一社会信用代码"
          ><el-input></el-input
        ></el-form-item>
        <el-form-item label="法定代表人"><el-input></el-input></el-form-item>
        <el-form-item label="注册资本"><el-input></el-input></el-form-item>
        <el-form-item label="营业场所"><el-input></el-input></el-form-item>
        <el-form-item label="成立日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="营业期限"><el-input></el-input></el-form-item>
        <el-form-item label="营业范围"><el-input></el-input></el-form-item>
        <el-form-item label="登记机关"><el-input></el-input></el-form-item>
        <el-form-item label="登记日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="营业执照正本">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="营业执照副本">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="管理人员"><el-input></el-input></el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogfirstVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogfirstVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="变更登记" :visible.sync="dialogchangeVisible" width="30%">
      <el-form ref="form" label-width="150px">
        <el-form-item label="公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="公司类型">
          <el-select placeholder="请选择">
            <el-option label="总公司" value="总公司"></el-option>
            <el-option label="自营分公司" value="自营分公司"></el-option>
            <el-option label="协议分公司" value="协议分公司"></el-option>
            <el-option label="项目分公司" value="项目分公司"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="统一社会信用代码"
          ><el-input></el-input
        ></el-form-item>
        <el-form-item label="法定代表人"><el-input></el-input></el-form-item>
        <el-form-item label="注册资本"><el-input></el-input></el-form-item>
        <el-form-item label="营业场所"><el-input></el-input></el-form-item>
        <el-form-item label="成立日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="营业期限"><el-input></el-input></el-form-item>
        <el-form-item label="营业范围"><el-input></el-input></el-form-item>
        <el-form-item label="登记机关"><el-input></el-input></el-form-item>
        <el-form-item label="登记日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="营业执照正本">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="营业执照副本">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="管理人员"><el-input></el-input></el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogchangeVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogchangeVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="查看信息" :visible.sync="dialoglookVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialoglookVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialoglookVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "businessList",
  data() {
    return {
      tableHeight: "450px", //window.innerHeight - 180,
      tableData: this.mydata,
      pageTotal: this.pageTotals,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      dialogaddVisible: false,
      dialogsearchVisible: false,
      dialogexcelVisible: false,
      dialogdatashowVisible: false,
      dialogfirstVisible: false,
      dialogchangeVisible: false,
      dialoglookVisible: false,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      mydata: [{ name: "test", type: "自营分公司", cardno: "15646IeurieM9343" }]
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
