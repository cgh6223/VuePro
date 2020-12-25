<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
			<el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">

				<el-row>
					<el-col :span="12">
						<el-form-item label="项目名称" prop="">
							<query-input></query-input>
						</el-form-item>
						<el-form-item label="客户名称" prop="">
							<query-input></query-input>
						</el-form-item>
						<el-form-item label="专业工程分类" prop="" label-width="100px">
							<el-select-template :data="projectType" v-model="form.projectType"></el-select-template>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="项目编号" prop="">
							<query-input></query-input>
						</el-form-item>
						<el-form-item label="合同编号" prop="">
							<query-input></query-input>
						</el-form-item>
						<el-form-item label="项目总投资" prop="">
							<number-scope></number-scope>
						</el-form-item>
					</el-col>
				</el-row>

			</el-form>
			<dialog-button reset-btn="true" okBtn="筛 选" @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
		</el-dialog>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import DialogButton from '../../../acomponents/DialogButton.vue'
	import ContractSelectTemplate from '../../../acomponents/ContractSelectTemplate.vue'
	import ElCascaderTemplate from '../../../acomponents/ElCascaderTemplate.vue'
	import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
	import QueryInput from '../../../acomponents/QueryInput.vue'
	import NumberScope from '../../../acomponents/NumberScope.vue'
	import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

	export default {
		components: {
			DialogButton,
			ContractSelectTemplate,
			ElCascaderTemplate,
			ElSelectTemplate,
			QueryInput,
			NumberScope,
			DatePickerScope
		},
		props: {
			title: '',
			width: '',
			labelWidth: {
				type: String,
				default: '130px'
			}
		},
		watch: {},
		//数据节点
		data() {
			return {
				dialogVisible: false,
				form: {projectType:''},
				formRules: {},
				itemManager: [{
						id: 1,
						name: '张三'
					},
					{
						id: 2,
						name: '李四'
					},
					{
						id: 3,
						name: '王五'
					},
					{
						id: 4,
						name: '赵六'
					}
				],
				projectType:[
				  {id:1,name:'房屋建筑工程'},
				  {id:2,name:'市政公用工程'},
				  {id:3,name:'化工石油工程'},
				  {id:4,name:'水利水电工程'},
				  {id:5,name:'公路工程'},
				  {id:6,name:'铁路工程'},
				  {id:7,name:'电力工程'},
				  {id:8,name:'农林工程'},
				  {id:9,name:'通信工程'},
				  {id:10,name:'机电安装工程'},
				  {id:11,name:'港口与航道工程'},
				  {id:12,name:'航天航空工程'},
				  {id:13,name:'冶炼工程'},
				  {id:14,name:'矿山工程'},
				  {id:15,name:'其他'},
				],
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			openDialog() {
				this.dialogVisible = true
			},
			dialogClose() {
				this.dialogVisible = false
			},
			submitForm() {
				this.$emit('getFormData', this.$myfunction.copyData(this.form))
				this.dialogClose()
			},
		}
	}
</script>
<style lang='less' scoped>

</style>
