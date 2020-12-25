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
    <el-dialog title="添 加" :visible.sync="dialogaddVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文件名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文件类型">
          <el-select placeholder="请选择">
            <el-option label="红头文件" value="1"></el-option>
            <el-option label="普通文件" value="2"></el-option>
            <el-option label="会议纪要" value="3"></el-option>
            <el-option label="规章制度" value="3"></el-option>
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

    <el-dialog title="高级查询" :visible.sync="dialogsearchVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文件名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogsearchVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogsearchVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="导出EXCEL" :visible.sync="dialogexcelVisible" width="30%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogexcelVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogexcelVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="红头文件"
      :visible.sync="dialogeredheadVisible"
      width="60%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文件编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文件名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="文件类型">
          <el-select placeholder="请选择">
            <el-option label="任命书" value="1"></el-option>
            <el-option label="规章制度" value="2"></el-option>
            <el-option label="节假日通知" value="3"></el-option>
            <el-option label="活动通知" value="3"></el-option>
            <el-option label="培训通知" value="3"></el-option>
            <el-option label="奖励通知" value="3"></el-option>
            <el-option label="其他文件" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="签发人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="签发日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="文件扫描件">
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
        <el-button @click="dialogeredheadVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogeredheadVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="普通文件"
      :visible.sync="dialogecommanVisible"
      width="60%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文件编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="文件名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="文件类型">
          <el-select placeholder="请选择">
            <el-option label="规章制度" value="1"></el-option>
            <el-option label="培训通知" value="2"></el-option>
            <el-option label="其他文件" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="签发人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="签发日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="文件扫描件">
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
        <el-button @click="dialogecommanVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogecommanVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="会议记要"
      :visible.sync="dialogemeetingVisible"
      width="60%"
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="会议编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="会议类型">
          <el-select placeholder="请选择">
            <el-option label="全体大会" value="1"></el-option>
            <el-option label="研讨会" value="2"></el-option>
            <el-option label="论坛" value="3"></el-option>
            <el-option label="座谈会" value="3"></el-option>
            <el-option label="专题讨论会" value="3"></el-option>
            <el-option label="座谈小组" value="3"></el-option>
            <el-option label="讲座" value="3"></el-option>
            <el-option label="学术讨论会" value="3"></el-option>
            <el-option label="辩论会" value="3"></el-option>
            <el-option label="网络会议" value="3"></el-option>
            <el-option label="其他会议" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会议主题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="参会人员">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="缺勤人员">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="发启人">
          <el-select placeholder="请选择">
            <el-option label="张三" value="1"></el-option>
            <el-option label="李" value="2"></el-option>
            <el-option label="王" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会议日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="签到表扫描件">
          <el-input></el-input>
          <el-upload class="upload-demo" action="" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="会议纪要扫描件">
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
        <el-button @click="dialogemeetingVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogemeetingVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="规章制度"
      :visible.sync="dialogelayercardVisible"
      width="60%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="制度类型">
          <el-select placeholder="请选择">
            <el-option label="公司制度" value="1"></el-option>
            <el-option label="部门制度" value="2"></el-option>
            <el-option label="其他制度" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="制度名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="制度发布日期"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="制度执行时间"
          ><el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="制度电子版">
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
        <el-button @click="dialogelayercardVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogelayercardVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="红头文件" name="first"
        ><el-table
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
            label="文件编号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="内容摘要"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签发人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签发日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件扫描件"
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
                @click="dialogeredheadVisible = true"
                >文件存档登记</el-button
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
      <el-tab-pane label="普通文件" name="second"
        ><el-table
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
            label="文件编号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="内容摘要"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签发人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签发日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="文件扫描件"
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
                @click="dialogecommanVisible = true"
                >文件存档登记</el-button
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
      <el-tab-pane label="会议纪要" name="meetingcard"
        ><el-table
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
            label="会议编号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="会议类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="会议主题"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="内容摘要"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="参会人员"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="缺勤人员"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签到表扫描件"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="会议纪要扫描件"
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
                @click="dialogemeetingVisible = true"
                >文件存档登记</el-button
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
      <el-tab-pane label="规章制度" name="layercard"
        ><el-table
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
            label="制度类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="制度名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="内容摘要"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="制度发布日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="制度执行时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="制度电子版"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="签到表扫描件"
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
                @click="dialogelayercardVisible = true"
                >文件存档登记></el-button
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

    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column prop="type" label="业务类型" align="center" width="100">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="150">
        <template slot-scope>
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
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
import XLSX from "xlsx";
import FileSaver from "file-saver";
export default {
  name: "institutionaliztionfileList",
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
      dialogaddVisible: false,
      dialogsearchVisible: false,
      dialogexcelVisible: false,
      dialogeredheadVisible: false,
      dialogecommanVisible: false,
      dialogemeetingVisible: false,
      dialogelayercardVisible: false,
      searchform: {
        proName: "",
        classify: ""
      },
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
