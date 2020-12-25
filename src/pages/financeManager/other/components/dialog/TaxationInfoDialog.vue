<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">
			<el-form-item label="纳税人识别号">
				<el-input ></el-input>
			</el-form-item>

			<el-form-item label="开户行">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="账号">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="开票地址">
				<el-input ></el-input>
			</el-form-item>
			<el-form-item label="开票电话">
				<el-input ></el-input>
			</el-form-item>

			<el-form-item label="税务评级年份">
				<el-date-picker format="yyyy" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>

			<el-form-item label="税务信用等级">
				<el-input></el-input>
			</el-form-item>

			<el-form-item label="税务信用等级网页截图">
				<upload-button></upload-button>
			</el-form-item>

		</el-form>
		<dialog-button resetBtn="false"  @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>

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

		},
		mounted() {
			//this.title=this.title1
		},
		data() {

			return {
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
