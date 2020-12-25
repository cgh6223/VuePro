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
        @click="dialogxxfbptVisible = true"
        >信息发布平台管理</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogdgsjVisible = true"
        >对公手机号管理</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogdrtxlVisible = true"
        >导入通讯录</el-button
      >
    </div>
    <el-dialog title="添加" :visible.sync="dialogaddVisible" width="30%">
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="发布平台">
          <el-select placeholder="请选择">
            <el-option label="微信公众号" value="微信公众号"></el-option>
            <el-option label="公司官网" value="公司官网"></el-option>
            <el-option label="公司邮箱" value="公司邮箱"></el-option>
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

    <el-dialog title="查询" :visible.sync="dialogsearchVisible" width="30%">
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="发布平台">
          <el-select placeholder="请选择">
            <el-option label="微信公众号" value="微信公众号"></el-option>
            <el-option label="公司官网" value="公司官网"></el-option>
            <el-option label="公司邮箱" value="公司邮箱"></el-option>
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
    <el-dialog title="电子表格" :visible.sync="dialogexcelVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogexcelVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogexcelVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="信息平台管理"
      :visible.sync="dialogxxfbptVisible"
      width="60%"
    >
      <el-tabs type="border-card">
        <el-tab-pane label="微信公众号">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="管理员">
              <el-select placeholder="请选择">
                <el-option label="张三" value="1"></el-option>
                <el-option label="李" value="2"></el-option>
                <el-option label="王" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="绑定的手机号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="合同协议扫描件" :inline="true">
              <el-input></el-input>
              <el-upload class="upload-demo" action="" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司官网">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="管理员">
              <el-select placeholder="请选择">
                <el-option label="张三" value="1"></el-option>
                <el-option label="李" value="2"></el-option>
                <el-option label="王" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="绑定的手机号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input show-password></el-input>
            </el-form-item>
            <el-form-item label="前台网址">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="后台网址">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="合同协议扫描件">
              <el-input></el-input>
              <el-upload class="upload-demo" action="" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司邮箱">
          <el-form ref="form" label-width="150px">
            <el-form-item label="管理员">
              <el-select placeholder="请选择">
                <el-option label="张三" value="1"></el-option>
                <el-option label="李" value="2"></el-option>
                <el-option label="王" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="绑定的手机号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input show-password></el-input>
            </el-form-item>
            <el-form-item label="合同协议扫描件">
              <el-input></el-input>
              <el-upload class="upload-demo" action="" list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogxxfbptVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogxxfbptVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="对公手机管理"
      :visible.sync="dialogdgsjVisible"
      width="30%"
    >
      <el-form ref="form" label-width="150px">
        <el-form-item label="机主">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机使用人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="对公使用范围">
          <el-input type="textarea" :rows="2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogdgsjVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogdgsjVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="导入通讯录"
      :visible.sync="dialogdrtxlVisible"
      width="30%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogdrtxlVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogdrtxlVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="信息发布登记"
      :visible.sync="dialogxxfbdjVisible"
      width="60%"
    >
      <el-form ref="form" label-width="150px">
        <el-form-item label="文章标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="发布平台">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文章来源">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文章发布日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="公司发布日期">
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="文章图片保存">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章内容保存">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogxxfbdjVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogxxfbdjVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-table
      :data="mydata"
      style="font-size:10px;"
      align="left"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column prop="a1" label="文章标题" width="200"></el-table-column>
      <el-table-column
        prop="a2"
        label="文章发布日期"
        width="200"
      ></el-table-column>
      <el-table-column prop="a3" label="发布平台" width="200"></el-table-column>
      <el-table-column
        prop="a4"
        label="公司发布日期"
        width="200"
      ></el-table-column>
      <el-table-column prop="a5" label="文章来源" width="150"></el-table-column>
      <el-table-column label="操作" fixed="right" align="left" width="200">
        <template slot-scope>
          <el-button
            size="small"
            type="text"
            @click="dialogxxfbdjVisible = true"
            >信息发布登记</el-button
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
  name: "informtionList",
  data() {
    return {
      dialogaddVisible: false,
      dialogsearchVisible: false,
      dialogexcelVisible: false,
      dialogxxfbptVisible: false,
      dialogdgsjVisible: false,
      dialogdrtxlVisible: false,
      dialogxxfbdjVisible: false,
      tableHeight: "450px", //window.innerHeight - 180,
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
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      mydata: [
        {
          a1: "tewt",
          a2: "20190112",
          a3: "微信公众号",
          a4: "20190305",
          a5: "外网"
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
  margin-bottom: 10px;
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
  height: 1000px;
  max-height: 1200px;
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
