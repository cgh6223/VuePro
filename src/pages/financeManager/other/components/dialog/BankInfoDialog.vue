<template>
	<el-dialog :visible.sync="dialogVisible" width="30%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">

			<el-form-item label="基本存款账户信息扫描件">
				<el-input v-model="form.type"></el-input>
			</el-form-item>

			<el-form-item label="一般结算账户信息扫描件">
				<upload-button></upload-button><!--多份-->
			</el-form-item>

		</el-form>
		<dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>

	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"

	export default {
		components: {
			DialogButton,
			UploadButton
		},
		props: {
			title: {
				type: String,
				dealt: ''
			},
			action: '',
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

				//表单对象
				form: {
					type: '',
					companyName: '',
					tel: '',
					bank: '',
					accountNumber: '',
					level: '',
					date: '',
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
