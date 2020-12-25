<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogaddVisible = true"
        >添加</el-button
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
        @click="dialogchangYZVisible = true"
        >印章刻制申请</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogchangCAVisible = true"
        >CA锁申请</el-button
      >
    </div>
    <el-dialog title="添加" :visible.sync="dialogaddVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select placeholder="请选择">
            <el-option label="印章" value="印章"></el-option>
            <el-option label="CA锁" value="CA锁"></el-option>
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
    <el-dialog title="高级查询" :visible.sync="dialogsearchVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select placeholder="请选择">
            <el-option label="印章" value="印章"></el-option>
            <el-option label="CA锁" value="CA锁"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="使用状态">
          <el-select placeholder="请选择">
            <el-option label="启用中" value="启用中"></el-option>
            <el-option label="已过期" value="已过期"></el-option>
            <el-option label="已停用" value="已停用"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="使用部门">
          <el-select placeholder="请选择">
            <el-option label="咨询" value="咨询"></el-option>
            <el-option label="工程" value="工程"></el-option>
            <el-option label="运营中心" value="运营中心"></el-option>
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
    <el-dialog title="CA" :visible.sync="dialogchangCAVisible" width="60%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="CA锁类型">
          <el-select placeholder="请选择">
            <el-option label="法人锁" value="法人锁"></el-option>
            <el-option label="公司锁" value="公司锁"></el-option>
            <el-option label="个人锁" value="个人锁"></el-option>
            <el-option label="软件锁" value="软件锁"></el-option>
            <el-option label="其他锁" value="其他锁"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="CA锁名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="CA锁使用网站">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="CA锁用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="CA锁密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="CA锁绑定手机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="CA锁启用时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="启用前相关材料">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="CA锁领用人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="CA锁管理人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="CA锁停用时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="年使用费">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="停用证明材料">
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
        <el-button @click="dialogchangCAVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogchangCAVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="印章" :visible.sync="dialogchangYZVisible" width="60%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="印章类型">
          <el-select placeholder="请选择">
            <el-option label="部门章" value="部门章"></el-option>
            <el-option label="业务专用章" value="业务专用章"></el-option>
            <el-option label="公章" value="公章"></el-option>
            <el-option label="法人章" value="法人章"></el-option>
            <el-option label="私章" value="私章"></el-option>
            <el-option label="签字章" value="签字章"></el-option>
            <el-option label="发票专用章" value="发票专用章"></el-option>
            <el-option label="执业章" value="执业章"></el-option>
            <el-option label="资质章" value="资质章"></el-option>
            <el-option label="其他章" value="其他章"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="印章名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="印章取样">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="印章启用时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="启用前相关材料">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="印章领用人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="印章管理人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="有效期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
          <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="印章停用时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="年使用费">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="停用证明材料">
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
        <el-button @click="dialogchangYZVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogchangYZVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-tabs v-model="activeName" activate-name="first">
      <el-tab-pane label="印章" name="first">
        <el-table
          :data="mydatayz"
          style="width: 100%;font-size:10px;"
          align="center"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{ fontSize: '14px' }"
        >
          <el-table-column
            prop="date"
            label="印章类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章取样"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章启用时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="启用前相关材料"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章领用人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章管理人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="有效期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="年使用费"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="印章停用时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="停用证明材料"
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
                @click="dialogchangYZVisible = true"
                >完善信息</el-button
              >
              <el-button size="small" type="text">查看信息</el-button>
              <el-button size="small" type="text">工作提醒</el-button>
              <el-button size="small" type="text">进度</el-button>
              <el-button size="small" type="text">状态</el-button>
            </template>
          </el-table-column> </el-table
        ><pagination
          :pageTotal="pageTotals"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        ></pagination>
      </el-tab-pane>
      <el-tab-pane label="CA锁" name="second">
        <el-table
          :data="mydataca"
          style="width: 100%;font-size:10px;"
          align="center"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{ fontSize: '14px' }"
        >
          <el-table-column
            prop="date"
            label="CA锁类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁使用网站"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁用户名"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁密码"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁绑定手机号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁启用时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="启用前相关材料"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁领用人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁管理人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="有效期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="年使用费"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="CA锁停用时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="停用证明材料"
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
                @click="dialogchangCAVisible = true"
                >完善信息</el-button
              >
              <el-button size="small" type="text">查看</el-button>
              <el-button size="small" type="text">工作提醒</el-button>
              <el-button size="small" type="text">进度</el-button>
              <el-button size="small" type="text">状态</el-button>
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
  name: "stampingList",
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
      dialogchangYZVisible: false,
      dialogchangCAVisible: false,
      dialogSQYZVisible: false,
      dialogSQCAVisible: false,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      mydatayz: [{}],
      mydataca: [{}]
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
