<template>
	<el-dialog :visible.sync="dialogVisible" width="30%" :title="title1">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">

			<el-form-item label="退款时间">
				 <rea-datepicker v-model="form.creatTime"></rea-datepicker>
				<!-- <el-date-picker v-model="form.date" format="yyyy/MM/dd" value-format="yyyy-MM-dd"></el-date-picker> -->
			</el-form-item>

		
		</el-form>

		<dialog-button :resetBtn="{show:false}" okBtn="确 定" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import Station from "../../../acomponents/Station.vue"

	export default {
		components: {
			DialogButton,
			Station
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
	
				//表单对象
				form: {					
				},
				//表单验证规则
				formRules: {}
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
