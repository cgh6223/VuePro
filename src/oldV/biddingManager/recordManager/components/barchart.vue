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
    import echarts from 'echarts'
    import echartsTheme from "@c/echarts/theme/westeros.json";
    export default {
        name:'barChat',
        data(){
            return {
                 id:'barChart',
                 myChart:null,
            }
        },
        mounted(){
            this.loadChart();
        },
        beforeDestroy() {
			if (!this.myChart) {
				return
			}
			this.myChart.dispose();
			this.myChart = null;
        },
        methods: {
            loadChart(){
                this.$nextTick(() => {
                    echarts.registerTheme('westeros', echartsTheme)
                    this.myChart = echarts.init(document.getElementById(this.id),'westeros');
                    this.myChart.setOption(this.initOption());
                })
            },
         	initOption(){
                let option = {
                   title:{
                       text:"2020年客户回访情况表 单位（个）"
                   },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['优','良','中','差']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['技术评价','服务评价']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                            // axisLabel:{
							// 	formatter:'{value} (个)'
							// }
                        }
                    ],
                    series : [
                        {
                            name:'优',
                            type:'bar',
                            data:[12, 13]
                            // markPoint : {
                            //     data : [
                            //         {type : 'max', name: '最大值'},
                            //         {type : 'min', name: '最小值'}
                            //     ]
                            // }
                        },
                        {
                            name:'良',
                            type:'bar',
                            data:[10, 15],
                            // markPoint : {
                            //     data : [
                            //          {type : 'max', name: '最大值'},
                            //         {type : 'min', name: '最小值'}
                            //         // {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            //         // {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            //     ]
                            // }
                        },
                         {
                            name:'中',
                            type:'bar',
                            data:[2, 1],
                            // markPoint : {
                            //     data : [
                            //         {type : 'max', name: '最大值'},
                            //         {type : 'min', name: '最小值'}
                            //     ]
                            // }
                        },
                         {
                            name:'差',
                            type:'bar',
                            data:[1, 0],
                            // markPoint : {
                            //     data : [
                            //         {type : 'max', name: '最大值'},
                            //         {type : 'min', name: '最小值'}
                            //     ]
                            // }
                        },
                    ]
                };
				return option;
			},
        },
        watch: {
        }
    }
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
