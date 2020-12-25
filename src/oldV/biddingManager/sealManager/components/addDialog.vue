<template>
  <el-dialog
    :visible.sync="isVisible"
    title="添加"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <el-form
        ref="addform"
        :model="addform"
        :label-width="dialog.formLabelWidth"
        style="margin:10px;width:auto;"
      >        
        
            <el-form-item prop="projectName" label="投标项目:">
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="addform.projectName"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"           
          >
            <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.address }}</span>
            </template>
          </el-autocomplete>
        </el-form-item>
       
       <el-form-item prop="nums" label="份数:">
          <el-input-number v-model="addform.nums" controls-position="right" :min="1" :max="100"></el-input-number>
        </el-form-item>  
        
        <el-form-item prop="sealRequirement" label="盖章要求:">
          <el-input type="textarea" :rows="3" v-model="addform.businessOwner"></el-input>
        </el-form-item> 
          <el-form-item prop="packRequirement" label="包封要求:">
          <el-input type="textarea" :rows="3" v-model="addform.packRequirement"></el-input>
        </el-form-item>       
      </el-form>
    <div slot="footer" class="dialog-footer">     
       <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">保 存</el-button>
         
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
      restaurants: [
        {
          id: 1,
          value: "张三",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        },
        { id: 2, value: "李四", address: "天山西路389号" },
        { id: 3, value: "王五", address: "上海市长宁区天山西路492号" },
        {
          id: 4,
          value: "周一",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { id: 5, value: "周二", address: "天山西路430号" },
        { id: 6, value: "周围三", address: "上海市普陀区老真北路160号" },
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
      tableHeight:"98%",
      addform:{}         
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
    closeDialog() {
      this.$emit("closeDialog");
    },
    handleIconClick(va){},
    //表单提交
    onSubmit() {      
      let obj = Object.assign({},this.addform);
      let filters= {page:1,limit:20,filter:obj};
      this.isVisible=false;
      this.$emit("onSubmit", obj);
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