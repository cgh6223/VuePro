<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialoggdzcVisible = true"
        >固定资产采购申请</el-button
      >
      <el-dialog
        title="固定资产采购申请"
        :visible.sync="dialoggdzcVisible"
        width="45%"
      >
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="申请部门">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="申请日期"
            ><el-date-picker type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="采购申请理由">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="用途说明">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="固定资产类型">
            <el-select placeholder="请选择">
              <el-option label="办公家具" value="1"></el-option>
              <el-option label="电子设备" value="2"></el-option>
              <el-option label="交通运输设备" value="3"></el-option>
              <el-option label="项目物品" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="采购数量">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="采购预估总金额">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialoggdzcVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialoggdzcVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogcommancgVisible = true"
        >一般采购申请</el-button
      >
      <el-dialog
        title="一般采购申请"
        :visible.sync="dialogcommancgVisible"
        width="45%"
      >
        <el-form ref="form" :model="form" label-width="130px">
          <el-form-item label="申请部门">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="采购人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="申请日期"
            ><el-date-picker type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="一般采购类型">
            <el-select placeholder="请选择">
              <el-option label="弘典酒" value="1"></el-option>
              <el-option label="茅台酒" value="2"></el-option>
              <el-option label="飞天迎宾酒" value="3"></el-option>
              <el-option label="A4纸" value="4"></el-option>
              <el-option label="A3纸" value="4"></el-option>
              <el-option label="安全帽" value="4"></el-option>
              <el-option label="工作服" value="4"></el-option>
              <el-option label="生活用品" value="4"></el-option>
              <el-option label="绿卉" value="4"></el-option>
              <el-option label="办公用品" value="4"></el-option>
              <el-option label="纸杯" value="4"></el-option>
              <el-option label="手提袋" value="4"></el-option>
              <el-option label="宣传册" value="4"></el-option>
              <el-option label="烟灰缸" value="4"></el-option>
              <el-option label="名片" value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="采购数量">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="采购单价">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="采购总价">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="供应商名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="供应商联系人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="是否产生其他费用">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogcommancgVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogcommancgVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogwplyVisible = true"
        >物品领用申请</el-button
      >
      <el-dialog
        title="物品领用申请"
        :visible.sync="dialogwplyVisible"
        width="45%"
      >
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="领用部门">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="领用人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="领用日期"
            ><el-date-picker type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="领用物品类型">
            <el-select placeholder="请选择">
              <el-option label="弘典酒" value="1"></el-option>
              <el-option label="茅台酒" value="2"></el-option>
              <el-option label="飞天迎宾酒" value="3"></el-option>
              <el-option label="A4纸" value="4"></el-option>
              <el-option label="A3纸" value="4"></el-option>
              <el-option label="安全帽" value="4"></el-option>
              <el-option label="工作服" value="4"></el-option>
              <el-option label="生活用品" value="4"></el-option>
              <el-option label="绿卉" value="4"></el-option>
              <el-option label="办公用品" value="4"></el-option>
              <el-option label="纸杯" value="4"></el-option>
              <el-option label="手提袋" value="4"></el-option>
              <el-option label="宣传册" value="4"></el-option>
              <el-option label="烟灰缸" value="4"></el-option>
              <el-option label="名片" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="领用数量">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogwplyVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogwplyVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogdatashowVisible = true"
        >数据展示</el-button
      >
      <el-dialog
        title="数据展示"
        :visible.sync="dialogdatashowVisible"
        width="30%"
      >
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogdatashowVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogdatashowVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogsearchVisible = true"
        >高级查询</el-button
      >
      <el-dialog
        title="高级查询"
        :visible.sync="dialogsearchVisible"
        width="30%"
      >
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogsearchVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogsearchVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="固定资产" name="first">
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
            label="申请部门"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="申请日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购申请理由"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="用途说明"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="固定资产类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购数量"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购预估总金额"
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
                @click="dialoggdzcVisible = true"
                >查看</el-button
              >
              <el-button size="small" type="text">状态显示</el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination
          :pageTotal="pageTotals"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        ></pagination>
      </el-tab-pane>
      <el-tab-pane label="一般采购" name="second">
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
            label="申请部门"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="一般采购类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购数量"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购单价"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="采购总价"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="供应商名称"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="供应商联系人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="联系电话"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="是否产生其他费用"
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
                @click="dialogcommancgVisible = true"
                >查看</el-button
              >
              <el-button size="small" type="text">状态显示</el-button>
            </template>
          </el-table-column>
        </el-table>

        <pagination
          :pageTotal="pageTotals"
          @handleCurrentChange="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        ></pagination>
      </el-tab-pane>
      <el-tab-pane label="物品领用" name="secondAA">
        <el-table
          :data="mydata"
          style="width: 100%;font-size:10px;"
          align="left"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{ fontSize: '14px' }"
        >
          <el-table-column
            prop="date"
            label="领用部门"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="领用人"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="领用日期"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="领用物品类型"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="领用数量"
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
                @click="dialogwplyVisible = true"
                >查看</el-button
              >
              <el-button size="small" type="text">状态显示</el-button>
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
  name: "purchaseList",
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
      dialoggdzcVisible: false,
      dialogsearchVisible: false,
      dialogdatashowVisible: false,
      dialogcommancgVisible: false,
      dialogwplyVisible: false,
      searchform: {
        proName: "",
        classify: ""
      },
      mydata: [{}],
      form: { delivery: false },
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
