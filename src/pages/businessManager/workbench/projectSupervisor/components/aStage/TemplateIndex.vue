<template>
  <div class="column">
    <el-tabs v-model="activeName" tab-position="left" style="height: 600px;">
      <el-tab-pane label="组建工作组" name="1">
        <establish-work-group></establish-work-group>
      </el-tab-pane>
      <el-tab-pane label="拟定工作计划" name="2">
        <establish-work-plan></establish-work-plan>
      </el-tab-pane>
      <el-tab-pane label="准备工作" name="3">
        <preparation></preparation>
      </el-tab-pane>
			<el-tab-pane label="人员签发文件" name="4">
        <com-document code="TYPE-100"></com-document>
			</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import EstablishWorkGroup from './template/EstablishWorkGroup.vue'
  import EstablishWorkPlan from './template/EstablishWorkPlan.vue'
  import Preparation from './template/Preparation.vue'
  import MultipleTableTemplate from '../../../acomponents/MultipleTableTemplate.vue'
  export default {
    components: {
      EstablishWorkGroup,
      EstablishWorkPlan,
      Preparation,
			MultipleTableTemplate,
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName:'1',
				tableData: [
					{
						name:'项目监理机构人员构成表',
						fileList:{id:1,createTime:'2020/01/02'},
						more:false,//是否多文件
					},
					{
						name:'总监理工程师任命书',
						fileList:{id:2,createTime:'2020/01/02'},
						more:false,
					},{
						name:'总监理工程师工程质量终身责任承诺书',
						fileList:{id:3,createTime:'2020/01/02'},
						more:false,
					},{
						name:'总监理工程师代表授权书',
						fileList:{id:4,createTime:'2020/01/02'},
						more:false,
					},
					{
					name:'见证取样和见证送检人员备案书',
					more:true,
					fileList:[
						{id:10,createTime:'2020/01/02'},
						{id:10,createTime:'2020/01/02'},
					]
				},
				{
					name:'变更总监理工程师申请',
					more:true,
					fileList:[
						{id:10,createTime:'2020/01/02'},
						{id:10,createTime:'2020/01/02'},
					]
				},
				{
					name:'专业监理工程师变更通知书',
					more:true,
					fileList:[
						{id:10,createTime:'2020/01/02'},
						{id:10,createTime:'2020/01/02'},
					]
				},
				]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {}
  }
</script>
<style lang='less' scoped>

</style>
