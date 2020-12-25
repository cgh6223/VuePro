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
import echartsTheme from "@c/echarts/theme/westeros.json";
export default {
  name: "barChat",
  data() {
    return {
      id: "LinebarChart",
      myChart: null
    };
  },
  mounted() {
    this.loadChart();
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
        this.myChart.on('click',function(param){
          //console.log(param);
        })
      });
    },
    initOption() {
      let option = {
        title: {
          text: "投标中标情况",
          subtext: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["中标数", "未中标数"]
        },
        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "经营部",
            "遵义分公司",
            "都匀分公司",
            "毕节分公司",
            "六盘水分公司",
            "铜仁分公司",
            "黔西南分公司"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "中标数",
            type: "bar",
            stack: "总量",
            smooth: true,
            label: {
              normal: {
                show: true,
                position: "insideTop",
                formatter: function(v) {
                  return v.value || "";
                }
              }
            },

            data: [150, 102, 130, 110, 89, 79, 50]
          },
          {
            name: "未中标数",
            type: "bar",
            stack: "总量",
            smooth: true,
            label: {
              normal: {
                show: true,
                position: "insideTop",
                formatter: function(v) {
                  return v.value || "";
                }
              }
            },
            data: [12, 13, 10, 13, 9, 23, 21]
          },
          {
            name: "总计",
            type: "bar",
            stack: "总计",
            barGap: "-100%",
            smooth: true,
            label: {
              normal: {
                show: false,
                position: "top",
                textStyle: { color: "#000" },
                formatter: function(v) {
                  return "总计：" + v.value;
                }
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(128, 128, 128, 0)",
                borderWidth: 0,
                borderColor: "#1FBCD2"
              }
            },
            data: [162, 115, 140, 123, 98, 102, 71]
          },
          {
            name: "中标率",
            type: "bar",
            stack: "总计",
            barGap: "-100%",
            smooth: true,
            label: {
              normal: {
                show: false,
                position: "top",
                textStyle: { color: "#000" },
                formatter: function(v) {
                  return "中标率：" + v.value;
                }
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(128, 128, 128, 0)",
                borderWidth: 0,
                borderColor: "#1FBCD2"
              }
            },           
            data: ['0.92', '0.88', '0.92', '0.89', '0.90', '0.77', '0.70']
          }          
        ]
      };
      return option;
    }
  },
  watch: {}
};
</script>

<style lang="less">
.R_lineContainer {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  height: 500px;
  max-height: 500px;
  overflow: hidden;
  border-radius: 6px;
  .logArea {
    //overflow: auto;
    height: 400px;
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
