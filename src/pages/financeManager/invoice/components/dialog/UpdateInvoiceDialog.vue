<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%" >

			<el-form-item label="开票日期">
				<!-- <el-date-picker v-model="form.billTime" type="date" placeholder="请选择日期">					
				</el-date-picker> -->
				 <rea-datepicker v-model="form.billTime"></rea-datepicker>
			</el-form-item>
			<el-form-item label="发票号">
				<el-input v-model="form.billNo" placeholder="请输入"></el-input>
			</el-form-item>
			<el-form-item label="上传发票扫描件">
				<upload-button></upload-button>
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
				//弹窗显示控制
				dialogVisible: false,
				//开票类型

				//表单对象
				form: {
					date:{},
					number:'',

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
