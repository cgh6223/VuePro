<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%" >


			<el-form-item label="开票类型">
				<el-select v-model="form.type">
					<el-option v-for="item in typeOptions" :key="item.id" :value="item.id" :label="item.name"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="合同名称">
				<el-input v-model="form.contractName"></el-input>
			</el-form-item>

			<el-form-item label="开票日期">
				<el-date-picker v-model="form.date" type="date" placeholder="请选择日期">
				</el-date-picker>
			</el-form-item>

			<el-form-item label="付款单位全称">
				<el-input placeholder="请输入" v-model="form.customer"></el-input>
			</el-form-item>


			<el-form-item label="开票金额">
				<el-input aria-placeholder="请输入整数" v-model="form.moneyMin" style="width: 30%;"></el-input>-
				<el-input aria-placeholder="请输入整数" v-model="form.moneyMin" style="width: 30%;"></el-input>
			</el-form-item>

			<el-form-item label="所属组织">
				<el-select v-model="form.organization1" placeholder="请选择"></el-select>
			</el-form-item>

			<el-form-item label="申请组织">
				<el-select v-model="form.organization2" placeholder="请选择"></el-select>
			</el-form-item>

			<el-form-item label="申请人">
				<el-input v-model="form.customer" placeholder="请输入"></el-input>
			</el-form-item>


		</el-form>

		<dialog-button resetBtn="true" ok-btn="筛选" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>

	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"

	export default {
		components: {
			DialogButton
		},
		props: {
			title: {
				type: String,
				dealt: ''
			},
			action:'',
		},
		watch: {
			title(newValue) {
				this.title1 = newValue
			}
		},
		mounted() {
			//this.title=this.title1
		},
		data() {

			return {
				//父窗口传递的弹窗标题
				title1: '',
				//弹窗显示控制
				dialogVisible: false,
				//开票类型
				typeOptions:[
					//服务费、中标服务费、文件费、管理费、其他收款
					{id:1,name:'服务费'},
					{id:3,name:'文件费'},
					{id:4,name:'管理费'},
					{id:5,name:'其他收款'},
				],
				//表单对象
				form: {
					date: {},
					type: '',
					customer: '',
					moneyMin: '',
					moneyMax: '',
					organization1:'',
					organization2:'',

				},
				//表单验证规则
				formRules: {

				}
			}
		},
		methods: {
			openDialog() {
				this.dialogVisible = true
			},
			dialogClose() {
				this.dialogVisible = false
				this.resetForm()
			},
			submitFormData() {
				this.$emit('getFormData', this.$myfunction.copyData(this.form))
				this.dialogClose()
			},
			resetForm() {
				this.$refs.formRef.resetFields()
			}
		}
	}
</script>

<style scoped>

</style>
