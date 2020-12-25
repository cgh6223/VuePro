<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" width="50%" @close="dialogClose()">
			<el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">
				<el-row>
					<el-col :span="12">
						<el-form-item label="房东姓名" prop="userName" >
							<el-input v-model="form.userName" clearable></el-input>
						</el-form-item>
						<el-form-item label="房东身份中">
							附件上传
						</el-form-item>
						<el-form-item label="房屋用途">
							<el-select-template 
							:data="[{id:1,name:'食堂使用'},{id:2,name:'宿舍使用'},{id:3,name:'办公使用'},{id:4,name:'其他使用'}]">
							</el-select-template>
						</el-form-item>
						<el-form-item label="电费号">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="网络号">
							<multiple-input></multiple-input>
						</el-form-item>
						<el-form-item label="房屋租金付款类型">
							<el-select-template :data="[
								{id:1,name:'月'},
								{id:2,name:'季度'},
								{id:3,name:'半年'},
								{id:4,name:'1年'},
								{id:5,name:'2年'},
								{id:6,name:'3年'},
								{id:7,name:'其他'},
								]"></el-select-template>
						</el-form-item>

					</el-col>
					<el-col :span="12">
						<el-form-item label="房东电话">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="房屋落址">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="水费号">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="燃气号">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="座机号">
							<multiple-input></multiple-input>
						</el-form-item>
						<el-form-item label="租金">
							<el-input></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="24">
						<el-form-item label="租金支付信息登记">
							<el-form-item label="开户名称">
								<el-input></el-input>
							</el-form-item>
							<el-form-item label="开户银行">
								<el-input></el-input>
							</el-form-item>
							<el-form-item label="开户账号">
								<el-input></el-input>
							</el-form-item>
						</el-form-item>
					</el-col>
				</el-row>
				
				<el-form-item label="租赁合同扫描件">上传附件</el-form-item>
				<el-form-item label="租赁合同有效期">
					<date-picker-scope></date-picker-scope>
				</el-form-item>
			</el-form>
			<dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
		</el-dialog>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import DialogButton from '../../../acomponents/DialogButton.vue'
	import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
	import MultipleInput from '../../../acomponents/MultipleInput.vue'
	import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

	export default {
		components: {
			DialogButton,
			ElSelectTemplate,
			MultipleInput,
			DatePickerScope,
		},
		props: {
			title: '',
			station: {
				type: Object,
				default: () => {
					return {
						organize: [],
					}
				}
			}
		},
		watch: {},
		//数据节点
		data() {
			return {
				dialogVisible: false,
				//表单对象
				form: {

				},
				//表单验证规则
				formRules: {

				},
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			dialogClose() {
				this.dialogVisible = false
				this.$refs.formRef.resetFields()
			},
			submitFormData() {
				this.$refs.formRef.validate(valid => {
					if (!valid) return
					this.$emit('getFormData', this.$myfunction.copyData(this.form))
					this.dialogClose()
				})
			},
			openDialog() {
				this.dialogVisible = true
			}
		}
	}
</script>
<style lang='less' scoped>
	.btn-right {
		float: right;
		margin-right: 0 !important;
	}
</style>
