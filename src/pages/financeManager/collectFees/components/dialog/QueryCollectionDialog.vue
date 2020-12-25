<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title1">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">

			<el-row>
				<el-col :span="24">
					<el-form-item label="收款时间">
						<rea-datescope v-model="form.date" value-type="ary"></rea-datescope>
					</el-form-item>
					<el-form-item label="退款时间">
						<rea-datescope v-model="form.date2" value-type="ary"></rea-datescope>
						
						</date-picker-scope>
					</el-form-item>
					<el-form-item label="收款金额">
						<number-scope></number-scope>
					</el-form-item>
				</el-col>
			</el-row>

			<el-row>
				<el-col :span="12">
					<el-form-item label="付款类型">
						<el-select v-model="form.payType" placeholder="请选择">
							<el-option label="公账" value="company"></el-option>
							<el-option label="现金" value="cash"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属组织">
						<el-select-template></el-select-template>
					</el-form-item>
					<el-form-item label="往来款类型">
						<el-select-template v-model="form.paymentType" :data="paymentTypeOptions">
						</el-select-template>
					</el-form-item>
					<el-form-item label="合同编号">
						<query-input></query-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="付款人">
						<query-input v-model="form.customer"></query-input>
					</el-form-item>
					<el-form-item label="收款类型">
						<el-select-template v-model="form.collType" :data="CollTypeOptions">
						</el-select-template>
					</el-form-item>
					<el-form-item label="合同（项目）名称">
						<query-input v-model="form.projectName"></query-input>
					</el-form-item>
					<el-form-item label="是否发生退款">
						<yes-or-no-template></yes-or-no-template>
					</el-form-item>
				</el-col>
			</el-row>

		</el-form>

		<dialog-button reset-btn="true" okBtn="筛 选" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import Station from "../../../acomponents/Station.vue"
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
	import DatePickerScope from "../../../acomponents/DatePickerScope.vue"
	import YesOrNoTemplate from "../../../acomponents/YesOrNoTemplate.vue"
	import NumberScope from "../../../acomponents/NumberScope.vue"
	import QueryInput from "../../../acomponents/QueryInput.vue"

	export default {
		components: {
			DialogButton,
			Station,
			ElSelectTemplate,
			DatePickerScope,
			YesOrNoTemplate,
			NumberScope,
			QueryInput,
		},
		props: {
			title: {
				type: String,
				dealt: ''
			}
		},
		watch: {
			title(newValue) {
				this.title = newValue
			}
		},
		mounted() {},
		data: function() {

			return {

				//父窗口传递的弹窗标题
				title1: this.title,
				//弹窗显示控制
				dialogVisible: false,
				//收款类型
				CollTypeOptions: [
					//服务费、文件费、管理费、其他收款
					{
						id: 1,
						name: '服务费'
					},
					{
						id: 2,
						name: '文件费'
					},
					{
						id: 3,
						name: '管理费'
					},
					{
						id: 4,
						name: '其他收款'
					}
				],
				//缴纳类型
				paymentTypeOptions: [
					//风险（履约）保证金、投标保证金、其他往来款
					{
						id: 1,
						name: '风险（履约）保证金'
					},
					{
						id: 2,
						name: '投标保证金'
					},
					{
						id: 3,
						name: '代理投标保证金'
					},
					{
						id: 4,
						name: '其他往来款'
					},
				],

				//表单对象
				form: {
					date: '',
					date2: '',
					payType: '',
					customer: '',
					moneyMin: '',
					moneyMax: '',
					collType: '',
					zuzhi: '',
					paymentType: '',
					projectTYpe: '',
					method: '',
					projectName: '',
					refund: false,
				},
				//表单验证规则
				formRules: {
					date: [{
						required: true,
						message: "请选择日期",
						tigger: 'blur'
					}],
					payType: [{
						required: true,
						message: '请选择付款类型',
						tigger: 'blur'
					}],
					customer: [{
						required: true,
						message: '请输入付款人姓名',
						tigger: 'blur'
					}],
					moneyMin: [{
						required: true,
						message: '请输入金额',
						tigger: 'blur'
					}],
					moneyMax: [{
						required: true,
						message: "请输入查询最大值",
						tigger: 'blue'
					}],
					collType: [{
						required: true,
						message: '请选择收款类型',
						tigger: 'blur'
					}],
					zuzhi: [],
					paymentType: [],
					projectTYpe: [],
					method: [],
					projectName: [],
					refund: []
				}
			}
		},

		methods: {
			//设置弹窗显示
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
