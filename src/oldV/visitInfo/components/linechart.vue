<template>
  <div class="R_lineContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span></span>
      </div>
      <div class="logArea">
        <div :id="id" style="width:100%;height:100%"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
import { groupBy } from "../../../../utils/auth";
import echartsTheme from "@c/echarts/theme/westeros.json";
export default {
  name: "linesChart",
  data() {
    return {
      id: "lineChart",
      myChart: null,
      gpData: this.tableData
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    //console.log(JSON.stringify(this.title));
    //this.loadChart();
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    loadChart() {
      this.$nextTick(() => {
        echarts.registerTheme("westeros", echartsTheme);
        this.myChart = echarts.init(
          document.getElementById(this.id),
          "westeros"
        );
        this.myChart.setOption(this.initOption());
        // window.addEventListener("resize",function(){
        // 	this.myChart.resize();
        // })
      });
    },
    initOption() {
      let op = groupBy(this.tableData, s => {
        return s["department"]; //根据department进行分组
      });
      let gp = [];
      for (let s in op) {
        gp.push({ name: s, value: op[s].length });
      }
      let xdata = gp.map(s => s.name);
      let ydata = gp.map(s => s.value);
      let data = {
        title: {
          text: "联系人-部门分布图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: xdata
        },
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   bottom: "3%",
        //   containLabel: true
        // },
        xAxis: [
          {
            type: "category",
            data: xdata
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "数量",
            type: "line",
            areaStyle: {
              normal: {
                color: {
                  type: "linear", //设置线性渐变

                  x: 0,

                  y: 0,

                  x2: 0,

                  y2: 1,

                  colorStops: [
                    {
                      offset: 0,
                      color: "green" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "white" // 100% 处的颜色
                    }
                  ],

                  globalCoord: false // 缺省为 false
                }
              }
            },
            data: ydata,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      };
      return data;
    }
  },
  watch: {
    // id:()=>{
    //     this.initOption()
    // }
    tableData: {
      handler(newvalue, oldvalue) {
        this.loadChart();
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
.R_lineContainer {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  height: 700px;
  max-height: 700px;
  overflow: hidden;
  border-radius: 6px;
  .logArea {
    //overflow: auto;
    height: 600px;
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
