<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view" @click="onAdd()">添 加</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="onSearch()">高级查询</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="exportExcel()">导出EXCEL</el-button>
      <div class="btnRight">
        <el-button class="btn_color" size="mini" icon="view" @click="webManager()">网站管理</el-button>
      </div>
    </div>

    <el-table
            :data="mydata"
            style="width: 100%;font-size:9px;"
            align="center"
            :fit="true"
            :height="tableHeight"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-steps finish-status="success" :active="3">
            <el-step
                    v-for="(item1,index) in getStatus(props.row)"
                    :key="index"
                    :title="item1.title"
                    :description="item1.desc"
            ></el-step>
          </el-steps>
        </template>
      </el-table-column>
      <el-table-column prop="projectName" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="responseMan" label="责任人" align="center"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="280">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="handleDialogShow=true">工作安排</el-button>
          <el-button size="small" type="text" @click="checkIn(scope.row,scope.$index)">备案登记</el-button>
          <el-button size="small" type="text" @click="checkManager(scope.row,scope.$index)">是否投标</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination :pageTotal="pageTotals"
                @handleCurrentChange="handleCurrentChange"
                @handleSizeChange="handleSizeChange"></pagination>

    <el-dialog title="高级查询"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               :modal-append-to-body="false"
               :visible.sync="searchDialogShow">
      <el-form ref="searchform"
               :model="searchform"
               :label-width="dialog.formLabelWidth"
               style="margin:10px;width:auto;">
        <el-form-item prop="mainBody" label="投标主体:">
          <el-select v-model="searchform.visitType" placeholder="请选择">
            <el-option
                    v-for="item in mainBody"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="scopes" label="业务类型:">
          <el-select v-model="searchform.scopes" placeholder="请选择">
            <el-option
                    v-for="item in scopes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否需要答辩:">
          <el-radio-group v-model="searchform.isAnswer">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="responseMan" label="责任人:">
          <el-input type="text" v-model="searchform.responseMan"></el-input>
        </el-form-item>

        <el-form-item class="text_right">
          <el-button @click="searchDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onSearchSubmit()">筛 选</el-button>
          <el-button @click="onSearchReset()">重 置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--添加dialog-->
    <el-dialog
            title="添加"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="addDialogShow"
    >
      <el-form
              ref="addform"
              :model="addform"
              :label-width="dialog.formLabelWidth"
              style="margin:10px;width:auto;"
      >
        <el-form-item prop="projectName" label="项目名称:">
          <el-input type="text" v-model="addform.projectName" placeholder="请输入名称"/>
        </el-form-item>

        <el-form-item class="text_right">
          <el-button @click="addDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onAddSubmit()">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--回访处理-->
    <el-dialog
            title="工作安排"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="handleDialogShow"
    >
      <el-form
              ref="hfform"
              :model="handleform"
              :label-width="dialog.formLabelWidth"
              style="margin:10px;width:auto;"
      >
        <el-form-item prop="reason" label="工作内容:">
          <el-input type="textarea" :rows="2" v-model="handleform.reason"></el-input>
        </el-form-item>
        <el-form-item prop="reason" label="责任人:">
          <el-autocomplete
                  popper-class="my-autocomplete"
                  v-model="handleform.responseMan"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  @select="handleSelect"
          >
            <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button @click="handleDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="handleDialogShow=false">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!--工作提醒-->
    <el-dialog
            title="备案处理"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="txDialogShow"
    >
      <el-form
              ref="txform"
              :model="seeform"
              :label-width="dialog.formLabelWidth"
              class="mydialog el-scrollbar"
      >
        <el-form-item prop="projectName" label="项目名称:">
          <el-input type="text" v-model="seeform.projectName"></el-input>
        </el-form-item>
        <el-form-item prop="mainBody" label="投标主体:">
          <el-input type="text" v-model="seeform.mainBody"></el-input>
        </el-form-item>
        <el-form-item prop="scopes" label="业务类型:">
          <el-input type="text" v-model="seeform.scopes"></el-input>
        </el-form-item>

        <el-form-item prop="inviteMan" label="招标人:">
          <el-input type="text" v-model="seeform.inviteMan"></el-input>
        </el-form-item>
        <el-form-item prop="analyse" label="招标文件分析:">
          <el-input type="text" v-model="seeform.analyse"></el-input>
        </el-form-item>

        <el-form-item label="是否需要答辩:">
          <el-radio-group v-model="seeform.isAnswer">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="responseMan" label="责任人:">
          <el-input type="text" v-model="seeform.responseMan"></el-input>
        </el-form-item>

        <div v-show="seeDJShow">
          <el-form-item prop="isTender" label="是否投标:">
            <el-switch
                    v-model="seeform.isTender"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="是"
                    inactive-text="否"
                    active-value="是"
                    inactive-value="否"
            ></el-switch>
          </el-form-item>
        </div>
        <el-form-item prop="reason" label="放弃投票理由:" v-show="seeform.isTender=='否'">
          <el-input type="textarea" :rows="2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="txDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">保 存</el-button>
      </div>
    </el-dialog>
    <!--webDialog-->
    <web-dialog
            v-if="webDialogShow"
            :mydata="mywebData"
            :isShow="webDialogShow"
            @closeDialog="webDialogShow=false"
    ></web-dialog>
    <!--导出table-->
    <el-table
            :data="totalRows"
            :header-cell-style="{fontSize:'14px'}"
            id="out-table"
            v-show="false"
    >
      <el-table-column prop="commpanyName" fixed label="客户名称" align="center"></el-table-column>
      <el-table-column prop="visitTime" label="回访时间" align="center"></el-table-column>
      <el-table-column prop="visitType" label="回访方式" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import pagination from "@c/pagination/index.vue";
  import webDialog from "./webDialog.vue";
  import XLSX from "xlsx";
  import FileSaver from "file-saver";

  export default {
    name: "customertableList",
    data() {
      return {
        tableHeight: "550px", //window.innerHeight - 180,
        tableData: this.mydata,
        pageTotal: this.pageTotals,
        mywebData: [
          {
            webName: "百度",
            webResponseMan: "张三",
            addr: "http://www.baidu.com"
          },
          {
            webName: "新浪",
            webResponseMan: "李四",
            addr: "http://www.sina.com"
          },
          {webName: "网易", webResponseMan: "王五", addr: "http://www.163.com"},
          {
            webName: "贵阳招标投标网",
            webResponseMan: "小白",
            addr: "https://www.bidcenter.com.cn/zhaobiao/area_1041_3017_1/"
          }
        ],
        restaurants: [
          {
            id: 1,
            value: "张三",
            address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
          },
          {id: 2, value: "李四", address: "天山西路389号"},
          {id: 3, value: "王五", address: "上海市长宁区天山西路492号"},
          {
            id: 4,
            value: "周一",
            address: "上海市长宁区金钟路968号15楼15-105室"
          },
          {id: 5, value: "周二", address: "天山西路430号"},
          {id: 6, value: "周围三", address: "上海市普陀区老真北路160号"},
          {
            id: 7,
            value: "黄飞",
            address: "上海市长宁区天山西路567号1层R117号店铺"
          },
          {
            id: 8,
            value: "李兰亚",
            address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
          },
          {
            id: 9,
            value: "张小三",
            address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
          }
        ],
        mainBody: [
          {label: "经营部", value: "经营部"},
          {label: "遵义分公司", value: "遵义分公司"},
          {label: "都匀分公司", value: "都匀分公司"}
        ],
        scopes: [
          {label: "工程咨询", value: "工程咨询"},
          {label: "工程造价", value: "工程造价"},
          {label: "招标代理", value: "招标代理"},
          {label: "工程监理", value: "工程监理"},
          {label: "全过程工程咨询", value: "全过程工程咨询"}
        ],
        visitClass: [
          {label: "项目回访", value: "项目回访"},
          {label: "非项目回访", value: "非项目回访"}
        ],

        pageShow: {
          page: 1,
          limit: 20,
          filter: {}
        },
        searchDialogShow: false,
        searchform: {
          responseMan: "",
          commpanyName: "",
          scopes: "",
          complain: "",
          visiteType: "",
          visitClass: ""
        },
        seeform: {
          responseMan: "",
          commpanyName: "",
          scopes: "",
          complain: "",
          visiteType: "",
          visitClass: "",
          serLevels: "",
          visitTime: "",
          techLevels: ""
        },
        txDialogShow: false,
        seeDJShow: false,
        addDialogShow: false,
        addFormbodyshow: false,
        handleDialogShow: false,
        webDialogShow: false,
        rowIndex: 0,
        addform: {
          province: "",
          commpanyName: "",
          corpType: "",
          IstaxPayer: "",
          phoneNum: "",
          city: "",
          address: ""
        },
        handleform: {
          reason: "",
          result: "",
          option: ""
        },
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
      pagination,
      webDialog
    },
    mounted() {
    },
    methods: {
      getStatus(pa) {
        console.log(JSON.stringify(pa));
        let mydata1 = [
          {title: "已备案", desc: "已备案"},
          {title: "是否投标确认中", desc: "是否投标确认中"}
        ];
        if (pa.isTender == "是") {
          mydata1.push({title: "准备投标", desc: "准备投标"});
        } else {
          mydata1.push({title: "不投", desc: "不投"});
        }
        return mydata1;
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return restaurant => {
          return (
              restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
              0
          );
        };
      },
      handleIconClick(ev) {
      },
      changeStatus(eve, index) {

      },
      checkIn(rows) {
        this.seeform = Object.assign({}, this.seeform, rows);
        this.txDialogShow = true;
        this.seeDJShow = false;
      },
      checkManager(rows, index) {
        this.seeform = Object.assign({}, this.seeform, rows);
        this.rowIndex = index;
        this.txDialogShow = true;
        this.seeDJShow = true;
      },
      handleSelect(item) {
        //console.log(JSON.stringify(item));
        this.addform.address = item.address;
      },
      onSubmit(index) {
        this.txDialogShow = false;
        this.seeform = Object.assign({}, this.seeform);
        this.$set(this.mydata, this.rowIndex, this.seeform);
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
        let filters = {filter: this.searchform};
        this.pageShow = Object.assign({}, this.pageShow, filters);

        this.searchDialogShow = false;
        //this.getList();
        this.$emit("customerGetList", this.pageShow);
      },
      onSearchReset() {
        this.$refs["searchform"].resetFields();
        this.onSearchSubmit();
      },
      onAdd() {
        this.addDialogShow = true;
      },
      onAddSubmit() {
        this.addDialogShow = false;
        // this.addFormbodyshow=false;
        if (this.addFormbodyshow == true) {
          this.$set(this.mydata, this.rowIndex, this.addform);
        } else {
          this.mydata.splice(0, 0, this.addform);
          //console.log(JSON.stringify(this.addform));
        }
      },
      webManager() {
        this.webDialogShow = true;
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
              new Blob([wbout], {type: "application/octet-stream"}),
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
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .error-row {
    background: #edc0af;
  }
</style>
<style lang="less" scoped>
  .mydialog {
    margin: 10px;
    width: auto;
    height: 500px;
    overflow: auto;
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
    height: 670px;
    max-height: 670px;
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
