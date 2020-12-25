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
    </div>

    <el-dialog title="添 加" :visible.sync="dialogaddVisible" width="40%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select placeholder="请选择">
            <el-option label="资质证书" value="1"></el-option>
            <el-option label="荣誉评选" value="2"></el-option>
            <el-option label="行政检查" value="3"></el-option>
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
    <el-dialog title="高级查询" :visible.sync="dialogsearchVisible" width="40%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select placeholder="请选择">
            <el-option label="资质证书" value="1"></el-option>
            <el-option label="荣誉评选" value="2"></el-option>
            <el-option label="行政检查" value="3"></el-option>
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
      title="荣誉登记"
      :visible.sync="dialogfirstRYVisible"
      width="45%"
    >
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="荣誉评选名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="评选主办单位">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="评选申报依据">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="评选申报材料">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="获评结果">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="获奖日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>

        <el-form-item label="荣誉名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="颁发单位">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="荣誉有效期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期"> </el-date-picker
          ></el-col>
          <el-col :span="11"
            ><el-date-picker type="date" placeholder="选择日期">
            </el-date-picker
          ></el-col>
        </el-form-item>

        <el-form-item label="荣誉扫描件">
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
        <el-button @click="dialogfirstRYVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogfirstRYVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="行政检查"
      :visible.sync="dialogfirstXZVisible"
      width="45%"
    >
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="行政检查名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="协助人员">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责事项">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="检查事项依据">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="行政检查相关材料">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item label="检查开始时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="检查完成时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="检查结果">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="通过后相关证明材料">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="整改措施">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="整改相关资料">
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
        <el-button @click="dialogfirstXZVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogfirstXZVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="资质登记"
      :visible.sync="dialogfirstZZVisible"
      width="40%"
    >
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="资质名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="资质等级">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="公司名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="法定代表人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="技术负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="营业场所">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="有效期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="资质证书正本扫描件">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="资质证书副本扫描件">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="副本数量">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="副本">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="管理人">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogfirstZZVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogfirstZZVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="变更" :visible.sync="dialogchangeVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogchangeVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogchangeVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="查看" :visible.sync="dialoglookVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialoglookVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialoglookVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资质证书" name="first">
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
            prop="date"
            label="资质名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="资质等级"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="公司名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="法定代表人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="技术负责人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="营业场所"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="专业"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="有效期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="资质证书正本扫描件"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="资质证书副本扫描件"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="副本数量"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="副本"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="管理人"
            width="180"
          ></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button
                size="small"
                type="text"
                @click="dialogfirstZZVisible = true"
                >信息登记</el-button
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
      <el-tab-pane label="荣誉评选" name="second">
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
            prop="date"
            label="荣誉评选名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="评选主办单位"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="评选申报依据"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="评选申报材料"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="获评结果"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="获奖日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="荣誉名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="颁发单位"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="荣誉有效期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="荣誉扫描件"
            width="180"
          ></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button
                size="small"
                type="text"
                @click="dialogfirstRYVisible = true"
                >信息登记</el-button
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
      <el-tab-pane label="行政检查" name="thrid">
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
            prop="date"
            label="行政检查名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="主办单位"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="检查负责人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="协助人员"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="负责事项"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="检查事项依据"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="行政检查相关材料"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="检查开始时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="检查完成时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="检查结果"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="通过后相关证明材料"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="整改措施"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="整改相关资料"
            width="180"
          ></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            align="center"
            width="150"
          >
            <template slot-scope>
              <el-button
                size="small"
                type="text"
                @click="dialogfirstXZVisible = true"
                >信息登记</el-button
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
    </el-tabs>
  </div>
</template>
<script>
import pagination from "@c/pagination/index.vue";
import XLSX from "xlsx";
import FileSaver from "file-saver";
export default {
  name: "certificateList",
  data() {
    return {
      tableHeight: "400px", //window.innerHeight - 180,
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
      dialogfirstRYVisible: false,
      dialogfirstXZVisible: false,
      dialogfirstZZVisible: false,
      dialogchangeVisible: false,
      dialoglookVisible: false,
      searchform: {
        proName: "",
        classify: ""
      },
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      mydata: [{}],
      form: { delivery: false }
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
