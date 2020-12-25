<template>
	<el-dialog :visible.sync="dialogVisible" width="50%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="30%">

			<el-form-item label="公司名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="公司类型">
				 <el-select-template :data="typeOptions" v-model="form.type"></el-select-template>
			</el-form-item>
			<el-form-item label="统一社会信用代码">
				  <el-input ></el-input>
			</el-form-item>
			<el-form-item label="法定代表人/负责人">
				 <el-input ></el-input>
			</el-form-item>
			<el-form-item label="成立日期">
				 <el-date-picker></el-date-picker>
			</el-form-item>
			<el-form-item label="营业场所">
				 <el-input ></el-input>
			</el-form-item>
			<el-form-item label="营业场所相关图片">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="营业执照正本扫描件">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="营业执照副本扫描件">
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

			<el-form-item label="营业场所租赁合同">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="合同有效期">
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
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
	import ElNumber from "../../../acomponents/ElNumber.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"



	export default {
		components: {
			DialogButton,
			Station,
			DatePickerScope,
			ElSelectTemplate,
      ElNumber,
      UploadButton
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
        num2:1,
				//父窗口传递的弹窗标题
				//弹窗显示控制
				dialogVisible: false,
				//公司分类
				typeOptions:[
					//总公司、自营分公司、协议分公司、项目分公司、办事处
					{id:1,name:'总公司'},
					{id:2,name:'自营分公司'},
					{id:3,name:'协议分公司'},
					{id:3,name:'项目分公司'},
					{id:3,name:'办事处'},
				],


				//表单对象
				form: {
					type:'',
					term:false,
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
