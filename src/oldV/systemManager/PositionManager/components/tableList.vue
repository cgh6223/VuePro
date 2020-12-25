<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view" @click="onAdd()">添 加</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="onSearch()">高级查询</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="exportExcel()">导出EXCEL</el-button>
    </div>
    <el-table :data="mydata" style="width: 100%;font-size:10px;" align="center"
              :fit="true" :height="tableHeight" highlight-current-row :header-cell-style="{fontSize:'14px'}">
      <el-table-column prop="posName" label="岗位名称" align="center"></el-table-column>
      <el-table-column prop="orgName" label="所属组织" align="center"></el-table-column>

      <el-table-column label="操作" fixed="right" align="center" width="250">
        <template slot-scope="scope" style="margin-left:10px">
          <el-button @click="handleClick(scope.$index,'modify')" type="text" size="small">修 改</el-button>
          <el-button @click="handleClick(scope.$index,'del')" type="text" size="small">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
            :pageTotal="pageTotals"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
    ></pagination>

    <el-dialog
            title="高级查询"
            width="40%"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="searchDialogShow"
    >
      <el-form
              ref="searchform"
              :model="searchform"
              :label-width="dialog.formLabelWidth"
              style="margin:10px;width:auto;"
      >
        <el-form-item prop="positionName" label="岗位名称:">
          <el-input type="text" v-model="searchform.posName.value"></el-input>
        </el-form-item>
        <el-form-item prop="rankLevel" label="岗位等级:">
          <el-select v-model="searchform.level.value" placeholder="岗位等级">
            <el-option
                    v-for="item in mylevel"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="belongOrg" label="所属组织:">
          <el-select v-model="searchform.orgId.value" placeholder="所属组织">
            <el-option
                    v-for="item in orgs"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item prop="belongDept" label="所属部门:">
          <el-select v-model="searchform.belongDept" placeholder="所属部门">
            <el-option
              v-for="item in depts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>         -->
        <el-form-item class="text_right">
          <el-button @click="searchDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onSearchSubmit()">筛 选</el-button>
          <el-button @click="onSearchReset()">重 置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


    <mydialog :myform="addform" :optype="optype" v-if="addDialogShow"
              :isShow="addDialogShow" @closeDialog="closeD" @addSubmit="onAddSubmit"></mydialog>
    <!--添加dialog-->
    <!-- <el-dialog
      title="添加"
      width="40%"
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
        <el-form-item prop="positionName" label="岗位名称:">
          <el-input type="text" v-model="addform.positionName"></el-input>
        </el-form-item>
         <el-form-item prop="rankLevel" label="岗位等级:">

          <el-select v-model="addform.rankLevel" placeholder="岗位等级">
            <el-option
              v-for="item in levels"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

        </el-form-item>
        <el-form-item prop="belongOrg" label="所属组织:">
            <el-select v-model="addform.belongOrg" placeholder="所属组织">
            <el-option
              v-for="item in orgs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="belongDept" label="所属部门:">
            <el-select v-model="addform.belongDept" placeholder="所属部门">
            <el-option
              v-for="item in depts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button @click="addDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onAddSubmit()">确 定</el-button>

        </el-form-item>
      </el-form>
    </el-dialog> -->
    <!--材料查看dialog-->

    <el-table :data="totalRows"
              style="font-size:10px;"
              align="center"
              ref="mytab"
              :header-cell-style="{fontSize:'14px'}"
              id="out-table"
              v-show="false">
      <el-table-column prop="sortnum" label="序号" align="center"></el-table-column>
      <el-table-column prop="positionName" label="岗位名称" align="center"></el-table-column>
      <el-table-column prop="rankLevel" label="岗位等级" align="center"></el-table-column>
      <el-table-column prop="belongOrg" label="所属组织" align="center"></el-table-column>
      <el-table-column prop="belongDept" label="所属部门" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import pagination from "@c/pagination/index.vue";
  import XLSX from "xlsx";
  import FileSaver from "file-saver";
  //import { addPos,modifyPos } from "../../../../api/system";
  import mydialog from "./myDialogs.vue";
  import Mock from "mockjs";
  //import testdialog from "./mytestDialog.vue";
  export default {
    name: "customertableList",
    data() {
      return {
        tableHeight: "450px", //window.innerHeight - 180,
        tableData: this.mydata,
        pageTotal: this.pageTotals,
        resourceData: [],
        mystep: 0,
        pageShow: {
          page: 1,
          limit: 20,
          filter: {}
        },
        searchDialogShow: false,
        resourceDialogShow: false,
        addDialogShow: false,
        searchform: {
          orgId: {value: '', Type: 'equ'},
          posName: {value: '', Type: 'like'},
          level: {value: '', Type: 'equ'}
        },
        addform: {
          posName: '',
          orgId: '',
          orgName: '',
          level: ''
        },
        levels: {1: '一级', 2: '二级', 3: '三级', 4: '四级'},
        mylevel: [
          {label: "一级", value: "1"},
          {label: "二级", value: "2"},
          {label: "三级", value: "3"},
          {label: "四级", value: "4"}
        ],
        orgs: [
          {label: "总经办", value: "总经办"},
          {label: "经营管理中心", value: "经营管理中心"},
          {label: "造价中心", value: "造价中心"},
          {label: "招标中心", value: "招标中心"},
          {label: "监理中心", value: "监理中心"},
          {label: "咨询中心", value: "咨询中心"},
          {label: "财务部", value: "财务部"}
        ],
        depts: [
          {label: "总经办", value: "总经办"},
          {label: "经营管理中心", value: "经营管理中心"},
          {label: "造价中心", value: "造价中心"},
          {label: "招标中心", value: "招标中心"},
          {label: "监理中心", value: "监理中心"},
          {label: "咨询中心", value: "咨询中心"},
          {label: "财务部", value: "财务部"},
          {label: "毕节办事处", value: "毕节办事处"},
          {label: "陕西分公司", value: "陕西分公司"},
          {label: "河南分公司", value: "河南分公司"},
          {label: "日喀则分公司", value: "日喀则分公司"},
          {label: "广西分公司", value: "广西分公司"},
          {label: "招标贵阳部一部", value: "招标贵阳部一部"},
          {label: "云南分公司", value: "云南分公司"},
          {label: "新浦分公司", value: "新浦分公司"},
          {label: "陈晓辉项目团队", value: "陈晓辉项目团队"},
          {label: "袁秀项目团队", value: "袁秀项目团队"},
          {label: "海鹰项目团队", value: "海鹰项目团队"}
        ],
        dialog: {
          width: "400px",
          formLabelWidth: "120px"
        },
        optype: "add",
        opindex: 0
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
      // 'mytest':testdialog
      mydialog
    },
    mounted() {
    },
    methods: {
      showPDF() {
        let routeData = this.$router.resolve({
          path: "/pdfview",
          query: {src: "test.pdf"}
        });
        window.open(routeData.href, "_blank");
      },
      closeD() {
        this.addDialogShow = false;
      },
      formatLevel(row, columns) {
        const type = parseInt(row.level);
        return this.levels[type];
      },
      handleClick(index, types) {
        if (types == "modify") {
          this.addDialogShow = true;
          this.optype = "modify";
          this.opindex = index;
          this.addform = Object.assign({}, this.mydata[index]);//JSON.parse(JSON.stringify(this.mydata[index]));

          //  this.$nextTick(()=>{
          //   // console.log(this.$refs);
          //   this.$refs.mys2.init(ffs);
          //  })
          //   //this.$refs.mys.init(ffs);
        } else {
          this.$confirm("此操作将删除该内容, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            //this.mydata.splice(index,1);
            this.$emit("delsubmit", this.mydata[index]);
          })
        }
      },
      showResource(rows) {
        this.resourceDialogShow = true;
        getresourceList().then(res => {
          this.resourceData = res.rows;
        })
      },
      onAdd() {
        //this.$message("这是一条关于:" + row.budget);
        this.addform = {
          posName: '',
          orgId: '',
          orgName: '',
          level: ''
        };
        this.addDialogShow = true;
        this.optype = "add";
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
            filter: ""
          };
        }
        let mysql = [];
        for (var item in this.searchform) {
          let t = this.searchform[item].Type;
          let v = this.searchform[item].value;
          if (v == "") {
            continue;
          }
          switch (t) {
            case "equ":
              mysql.push(item + "=" + v);
              break;
            case "between":
              break;
            case "like":
              mysql.push(item + "like '%" + v + "%'");
              break;
            default:
              break;
          }
        }
        let filters = {filter: mysql.join('and')};

        this.pageShow = Object.assign({}, this.pageShow, filters);

        this.searchDialogShow = false;
        //this.getList();
        this.$emit("customerGetList", this.pageShow);
      },
      onSearchReset() {
        this.$refs["searchform"].resetFields();
        this.onSearchSubmit();
      },
      onAddSubmit(val) {
        this.addDialogShow = false;
        val.optype = this.optype;
        this.$emit("addSumbit", val);
//       if(this.optype=="add"){
// //this.mydata.splice(0,0,val);
//           let reg = new RegExp("-", "g"); //g代表全部
//           let guid = Mock.Random.guid().replace(reg, "");
//           val.keyid=guid;
//           let o={row:JSON.stringify(val)};
//         //   addPos(o).then(res=>{
//         //     if(res.sucess){
//         //        this.$message({
//         //   message: "数据添加成功！",
//         //   type: "success"
//         // });

//         //    }
//         //   })
//       }
//       else
//       {
//         //   let o={row:JSON.stringify(val)};
//         //   modifyPos(o).then(res=>{
//         //      if(res.sucess){
//         //        this.$message({
//         //   message: "数据修改成功！",
//         //   type: "success"
//         // });
//         //    }
//         //   })

//       }
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
    height: 620px;
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
