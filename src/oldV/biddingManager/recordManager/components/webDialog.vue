<template>
  <el-dialog
    :visible.sync="isVisible"
    title="网站管理"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <el-card>
      <div slot="header" class="clearfix">
        <span class="btnRight">
          <el-button type="text">添 加</el-button>
        </span>
      </div>
      <div class="logArea">
        <el-table
          :data="mydata"
          style="width: 100%;font-size:9px;"
          align="center"
          :fit="true"
          :height="tableHeight"
          highlight-current-row
          :header-cell-style="{fontSize:'12px'}"
        >
          <el-table-column prop="webName" label="网站名称" align="center">
            <template slot-scope="sp">
              <a :href="sp.row.addr"  target="_blank"><el-button type="text">{{sp.row.webName}}</el-button></a>
            </template>
          </el-table-column>
          <el-table-column prop="webResponseMan" label="浏览负责人" align="center"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isVisible = false">取 消</el-button>
      <!-- <el-button type="primary" @click="onSubmit()">提 交</el-button> -->
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "myDialog",
  data() {
    return {
      isVisible: this.isShow,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      tableHeight:"98%"      
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    myform: {
      type: Object,
      default: () => {
        return {
          belongOrg: "",
          positionName: "",
          rankLevel: "",
          belongDept: ""
        };
      }
    },
    mydata:{
      type:Array,
      default:()=>{
        return [];
      }
    }   
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    //表单提交
    onSubmit() {
      //let filters = { filter: this.form };
      //let obj = JSON.parse(JSON.stringify(this.myform));
      //  this.myform={
      //      belongOrg: "",
      //   positionName:"",
      //   rankLevel:"",
      //   belongDept:""
      //   }
      this.$emit("addSubmit", obj);
    },
    showTime() {}
  }
};
</script>
<style scoped>
.myForm {
  margin: 10px;
  width: auto;
  overflow: auto;
  height: 400px;
}
.logArea {
  margin: 10px;
  width: auto;
  height: 300px;
  overflow: auto;
}
.btnRight {
  float: right;
  margin-right: 0px !important;
}
</style>