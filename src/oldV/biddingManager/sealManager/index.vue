<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="order_list">
      <el-col :span="24">
        <toolbarss @onSearch="searchDialogShow=true" @onAdd="addDialogShow=true"></toolbarss>
        <customertable-list
          :mydata="tableData"
          :totalRows="totalRows"
        ></customertable-list>
         <pagination
      :pageTotal="pageTotal"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>
      </el-col>
    </el-row>
      <search-dialog v-if="searchDialogShow" :isShow="searchDialogShow" @closeDialog="searchDialogShow=false" @searchSubmit="searchSubmit"></search-dialog>
      <add-dialog v-if="addDialogShow" :isShow="addDialogShow" @closeDialog="addDialogShow=false" @onSubmit="addSubmit"></add-dialog>
  </section>
</template>
<script>
import customertableList from "./components/tableList.vue";
import toolbarss from "./components/toolbar.vue";
import searchDialog from "./components/searchDialog.vue";
import addDialog from "./components/addDialog.vue";
import pagination from "@c/pagination/index.vue";
import { getSealList } from "../../../api/old/bidding.js";
export default {
  name: "customerInfoIndex",
  data() {
    return {
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },

      pageTotal: 20,
      tableData: [],
      groupByData: [],
      lineData: [],
      totalRows:[],
      statsShow:true,
      addDialogShow:false,
      searchDialogShow:false,
      viewData:{},
      rowIndex:0
    };
  },
  components: {
    customertableList,
    toolbarss,
    pagination,
    searchDialog,
    addDialog

  },
  onSearch(){
    this.searchDialogShow=true;
  },
  mounted(){
      this.getList();
  },
  methods: {
    getList() {
      let pa = Object.assign({}, this.pageShow);
      // console.log("getlist:"+JSON.stringify(pa));
      getSealList(pa).then(res => {
        this.tableData = res.rows;
        this.pageTotal = res.total;
        this.totalRows=res.totalRows;

      });
    },
     handleCurrentChange(val) {
      this.pageShow.page = val;
      this.getList();
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
      this.getList();
    },
    searchSubmit(val){
      this.pageShow=Object.assign({},this.pageShow,val);
      this.getList();
    },
    addSubmit(val){

      this.tableData.splice(0,0,val);
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


  .row_list {
    margin-bottom: 20px;
    .row_base {
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 6px;
      height: 120px;
    }
  }
  .order_list {
    .orderArea {
      width: 100%;
      height: 370px;
      background: #fff !important;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 10px;
      padding-top: 40px;
      overflow: hidden;
    }
    .orderbarArea {
      height: 370px;
    }
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    height: 80px;
    .leftItem {
      align-items: start;
      justify-content: space-between;
      text-align: left;
    }
    .rightItem {
      width: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        font-size: 30px;
      }
    }
    .number {
      font-size: 22px;
      font-weight: bold;
      .perTitle {
        font-size: 13px;
        margin-left: 5px;
      }
    }
  }
  .pay {
    .leftItem {
      justify-content: space-around;
    }
  }

</style>
