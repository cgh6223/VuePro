<template>
  <section class="data_section" ref="data_section">
    <el-row :gutter="10" class="order_list">
      <el-col :span="8">
        <!-- <el-button type="text" @click="showStr()">test</el-button> -->
        <taskList taskName="待办任务" :taskData="td"></taskList>
      </el-col>
      <el-col :span="8">
        <flowList :flowData="fd" flowName="abc"></flowList>
        <!-- <taskList taskName="已办任务" :taskData="td1"></taskList> -->
      </el-col>
      <el-col :span="8">
        <calendarList :things="ts"></calendarList>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="order_list">
      <el-col :span="16">
        <barChat></barChat>
      </el-col>
      <el-col :span="8">
        <pieChart type="ordertype"></pieChart>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row_list order_list">
      <el-col :span="8">
        <radarChart></radarChart>
      </el-col>
      <el-col :span="16">
        <lineChart></lineChart>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import logList from "@c/logList.vue";
import calendarList from "@c/calendarList.vue";
import taskList from "@c/taskList.vue";
// import { getCalendar,getTaskList } from "../api/old/page";
import lineChart from "../components/echarts/lineChart.vue";
import pieChart from "../components/echarts/pieChart.vue";
import radarChart from "@c/echarts/radarChart.vue";
import barChat from "@c/echarts/barChart.vue";
import $ from "jquery";
import flowList from "@c/flowList.vue";
import { GetHttp } from "../utils/http";

export default {
  name: "home-index",
  data() {
    return {
      ts: [],
      td: {},
      td1: {},
      fd: []
    };
  },
  components: {
    logList,
    calendarList,
    taskList,
    lineChart,
    pieChart,
    radarChart,
    barChat,
    flowList
  },
  computed: {
    isok() {
      let list = [
        { date: "2019-11-10", thing: "this is test" },
        { date: "2019-11-11", thing: "this is test" },
        { date: "2019-11-12", thing: "this is test" }
      ];
      return list;
    }
  },
  mounted() {
    this.getshow();
  },
  methods: {
    getshow() {
      let that = this;
      // getCalendar().then(res => {
      //   that.ts = res;
      // });
      // getTaskList().then(res => {
      //   that.td = res;
      // });
      // getTaskList().then(res => {
      //   that.td1 = res;
      // });
      let myps = { InstanceID: "1049", exeman: "shiya" };

      // $.ajax({
      //   url: "/capi/doget/getExecute",
      //   method: "POST",
      //   type: "json",
      //   data: myps,
      //   success: function(data) {
      //     let myb = JSON.parse(data);
      //     if(myb.sucess){
      //       // console.log(this);
      //       // console.log("-------------------");
      //       // console.log(that);
      //       that.fd=JSON.parse(myb.msg);

      //     }
      //   }
      // });
    },
    showStr() {
      GetHttp("back","/sendTest","POST",{exeman:"chengguanghe"}).then(res=>console.log(res));
      //$("#sdiv").append(`<el-button type="primary" icon="el-icon-edit" circle>123</el-button>`);
      //  $.ajax({
      //     url: "/api/sendmsg",
      //     method: "GET",
      //     type: "json",
      //     success: function(data) {
      //            console.log("bbs");
      //           console.log(data);
      //       }
      //   });
      //$.getJSON('http://localhost:9090/main/sendTest',function(d){console.log(d)});
      // aix.defaults.baseURL="http://localhost:9090/main/";
      // aix.get('/sendTest').then(res=>console.log(res.data));
      // req({
      //   url:'/sendTest',
      //   method:"GET"
      // })
    }
  }
};
</script>
<style lang="less" scoped>
.contexts {
  background-color: #f4f5f4;
}
.el-col {
  margin-bottom: 20px;
}

.data_section {
  //margin: 20px;

  border-radius: 2px;
  background-color: #f4f5f4;
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
}
</style>
