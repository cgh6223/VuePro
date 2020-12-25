<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" width="30%" @close="dialogClose()">
			<el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">
				<el-form-item label="年检日期">
					<el-data-picker-template></el-data-picker-template>
				</el-form-item>
				<el-form-item label="年检经办人">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="年检有效期">
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
	import ElDataPickerTemplate from '../../../acomponents/ElDataPickerTemplate.vue'

	import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

	export default {
		components: {
			DialogButton,
			ElSelectTemplate,
      ElDataPickerTemplate,
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
