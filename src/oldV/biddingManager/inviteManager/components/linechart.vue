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
      });
    },    
    initOption() {
      let op = groupBy(this.tableData, s => {
        return s["classify"]; //根据scope进行分组
      });
      let gp = [];
      for (let s in op) {
        gp.push({ name: s, value: op[s].length });
      }
      let xdata = gp.map(s => s.name);
      //let ydata = gp.map(s => s.value);
     let data = {
					  title : {
						text: '业务分类比例情况',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: xdata
					},
					series : [
						{
							name: '项目情况',
							type: 'pie',
							radius : '50%',
              center: ['50%', '60%'],
							data:gp,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				}
      return data;
    }
  },
  watch: {
    // id:()=>{
    //     this.initOption()
    // }
    tableData: {
      handler(newvalue, oldvalue) {
         this.myChart.setOption(this.initOption());  
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
