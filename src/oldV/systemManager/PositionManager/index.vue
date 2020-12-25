<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="order_list">
      <el-col :span="24">
        <customertable-list
          :mydata="tableData"
          @customerGetList="customerGetList"
          :pageTotals="pageTotal"
          @addSumbit="addss"
          @delsubmit="delmypos"
          :totalRows="totalRows"
        ></customertable-list>
      </el-col>
      <!-- <el-col :span="12">
        <lines-chart :tableData="lineData"></lines-chart>
      </el-col>-->
    </el-row>
  </section>
</template>
<script>
import customertableList from "./components/tableList.vue";
import { getPos,addPos,modifyPos,delPos } from "../../../api/old/system";
import Mock from "mockjs";
export default {
  name: "project_query_index",
  data() {
    return {
      pageShow: {
        page: 1,
        limit: 20,
        filter: ""
      },

      pageTotal: 20,
      tableData: [],
      totalRows: [],
      groupByData: [],
      lineData: []
    };
  },
  components: {
    customertableList
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let pa = Object.assign({}, this.pageShow);

      getPos(pa).then(res => {
        this.tableData = res.rows;
        this.pageTotal = res.total;
        //this.totalRows=res.totalRows;
      });
    },
    customerGetList(val) {
      this.pageShow = Object.assign({}, this.pageShow, val);
      this.getList();
    },
    delmypos(val){
       let o = { row: JSON.stringify(val) };

       delPos(o).then(res=>{
         if (res.sucess) {
            this.$message({
              message: "数据删除成功！",
              type: "success"
            });
            this.getList();
          }
       })
    },
    addss(val) {
      if (val.optype == "add") {
        let reg = new RegExp("-", "g"); //g代表全部
        let guid = Mock.Random.guid().replace(reg, "");
        val.keyid = guid;
        let o = { row: JSON.stringify(val) };
        addPos(o).then(res => {
          if (res.sucess) {
            this.$message({
              message: "数据添加成功！",
              type: "success"
            });
             this.getList();
          }
        });
      } else {
        let o = { row: JSON.stringify(val) };
        modifyPos(o).then(res => {
          if (res.sucess) {
            this.$message({
              message: "数据修改成功！",
              type: "success"
            });
             this.getList();
          }
        });
      }

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
