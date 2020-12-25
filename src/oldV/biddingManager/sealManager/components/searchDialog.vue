<template>
  <el-dialog
    :visible.sync="isVisible"
    title="高级查询"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <el-form
        ref="searchform"
        :model="searchform"
        :label-width="dialog.formLabelWidth"
        style="margin:10px;width:auto;"
      >        
        <el-form-item prop="mainBody" label="投标主体:">
          <el-select v-model="searchform.mainBody" placeholder="请选择">
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
 <el-form-item prop="tenderType" label="投标形式:">
          <el-select v-model="searchform.tenderType" placeholder="请选择">
            <el-option
              v-for="item in tenderType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>             
      </el-form>
    <div slot="footer" class="dialog-footer">     
       <el-button @click="isVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">筛 选</el-button>
          <el-button @click="onSearchReset()">重 置</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "searchDialog",
  data() {
    return {
      isVisible: this.isShow,
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      },
      tableHeight:"98%",
       mainBody: [
        { label: "经营部", value: "经营部" },
        { label: "遵义分公司", value: "遵义分公司" },
        { label: "都匀分公司", value: "都匀分公司" },
         { label: "毕节分公司", value: "毕节分公司" },
          { label: "六盘水分公司", value: "六盘水分公司" },
           { label: "铜仁分公司", value: "铜仁分公司" }
      ],
      scopes: [
        { label: "工程咨询", value: "工程咨询" },
        { label: "工程造价", value: "工程造价" },
        { label: "招标代理", value: "招标代理" },
        { label: "工程监理", value: "工程监理" },
        { label: "全过程工程咨询", value: "全过程工程咨询" }
      ],
      visitClass: [
        { label: "项目回访", value: "项目回访" },
        { label: "非项目回访", value: "非项目回访" }
      ], 
      tenderType:[ 
          { label: "报价函形式", value: "报价函形式" },
        { label: "招标形式", value: "招标形式" },
         { label: "比选形式", value: "比选形式" }],
         searchform: {
           businessOwner:"",
           IsTrading:"", 
           isAnswer:"", 
           tenderType:"",
           scopes:"",
           mainBody:""
         }    
    };
    
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => {
        return false;
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
      let obj = Object.assign({},this.searchform);
      let filters= {page:1,limit:20,filter:obj};
      this.isVisible=false;
      this.$emit("searchSubmit", filters);
    },
    onSearchReset(){
      this.$refs["searchform"].resetFields();
      this.onSubmit();
    }
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