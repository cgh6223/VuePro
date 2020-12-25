<template>
	<el-dialog :visible.sync="dialogVisible" :width="width" :title="title1">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="30%">
			<el-form-item label="资质名称">
			</el-form-item>
			<el-form-item label="资质等级">
				 <el-input ></el-input>
			</el-form-item>
			<el-form-item label="技术负责人">
				 <el-input ></el-input>
			</el-form-item>
			<el-form-item>
				<span slot="label"><i class="el-icon-circle-plus-outline" @click="num++"></i>专业</span>
				<template v-for="i in num">
					<el-col :span="20">
						<el-form-item :label="'专业'+i" label-width="75px">
							<el-input ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="4"><i class="el-icon-remove-outline" @click="num--"></i></el-col>
				</template>
			</el-form-item>
			<el-form-item label="资质证书正本扫描件">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="资质证书副本扫描件">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="副本数量">
				<el-number></el-number>
			</el-form-item>
			<el-form-item label="管理人">
				<span slot="label"><i class="el-icon-circle-plus-outline" @click="num2++"></i>副本管理</span>
				<template v-for="i in num2">
					<el-row >
						<el-col :span="12">
							<el-form-item label="管理人" label-width="75px">
								<el-input></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="管理数量" label-width="75px">
								<el-number></el-number><span><i class="el-icon-remove-outline" @click="num2--"></i></span>
							</el-form-item>
						</el-col>
					</el-row>
				</template>

			</el-form-item>

			<el-form-item label="有效期">
				<date-picker-scope></date-picker-scope>
			</el-form-item>

		</el-form>

		<dialog-button :resetBtn="{show:false}" okBtn="确 定" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import Station from "../../../acomponents/Station.vue"
	import DatePickerScope from "../../../acomponents/DatePickerScope.vue"
	import ElNumber from "../../../acomponents/ElNumber.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"


	export default {
		components: {
			DialogButton,
			Station,
			DatePickerScope,
      ElNumber,
      UploadButton
		},
		props: {
			title: {
				type: String,
				dealt: ''
			},
			width:{
			  type:String,
				dealt: '50%'
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
        num:1,
        num2:1,
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
