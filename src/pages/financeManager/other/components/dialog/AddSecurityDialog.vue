<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%" >
			
			<el-form-item label="缴纳时间">
				<el-date-picker format="yyyy/MM/dd" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="社保缴纳凭证">
				附件上传
			</el-form-item>
		</el-form>
		<dialog-button resetBtn="false"  @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
		
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"

	export default {
		components: {
			DialogButton,
			ElSelectTemplate
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
					//总公司、自营分公司、协议分公司、项目分公司
					{id:1,name:'总公司'},
					{id:2,name:'自营分公司'},
					{id:3,name:'协议分公司'},
					{id:4,name:'项目分公司'},
				],
				//表单对象
				form: {
					type: '',
					nickName:'',
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
	