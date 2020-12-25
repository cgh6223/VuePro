<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" width="50%" @close="dialogClose()">
			<el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-row>
					<el-col :span="12">
						<el-form-item label="保险类型">
							<el-select-template :data="[
									{id:1,name:'交强险'},
									{id:2,name:'第三者责任险'},
									{id:3,name:'车上司机责任险不计免赔率'},
									{id:4,name:'车上司机责任险'},
									{id:5,name:'车上乘客责任险不计免赔率'},
									{id:6,name:'车上乘客责任险'},
									{id:7,name:'三责不计免赔率'},
								]"></el-select-template>
						</el-form-item>
						<el-form-item label="保险公司名称">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="保险公司联系人">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="保险有效期">
							<date-picker-scope></date-picker-scope>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="保险公司联系人电话">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="保险金额">
							<el-input></el-input>
						</el-form-item>
						<el-form-item label="保险扫描件">
							<upload-button></upload-button>
						</el-form-item>
					</el-col>
				</el-row>

			</el-form>
			<dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
		</el-dialog>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import DialogButton from '../../../acomponents/DialogButton.vue'
	import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
	import ElDataPickerTemplate from '../../../acomponents/ElDataPickerTemplate.vue'
	import UploadButton from '../../../acomponents/UploadButton.vue'

	import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

	export default {
		components: {
			DialogButton,
			ElSelectTemplate,
      ElDataPickerTemplate,
			DatePickerScope,
      UploadButton
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
			openDialog(data) {
			  if (data !== undefined) {
			    this.form=data
				}
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
