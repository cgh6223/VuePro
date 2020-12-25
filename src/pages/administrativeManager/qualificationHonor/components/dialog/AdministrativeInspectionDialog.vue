<template>
	<el-dialog :visible.sync="dialogVisible" width="50%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="30%">

			<el-form-item label="行政检查名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="检查单位">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="公司检查负责人">
				<multiple-input></multiple-input>
			</el-form-item>
			<span>协助人员<push-button v-model="num"></push-button></span>
			<template v-for="i in num">
				<el-row>
					<el-col :span="11">
						<el-form-item label="姓名">
							<el-input></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="11">
						<el-form-item label="负责事项">
							<el-input></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="2">
						<remove-button v-model="num"></remove-button>
					</el-col>
				</el-row>
			</template>


			<el-form-item label="检查要求">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="检查提交材料">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="检查结果">
				<el-radio-group v-model="form.isPassed ">
					<el-radio  :label="true">通过</el-radio>
					<el-radio  :label="false">不通过</el-radio>
				</el-radio-group>
			</el-form-item>
			<template v-if="form.isPassed===true">
				<el-form-item label="通过后相关证明材料">
					<upload-button></upload-button>
				</el-form-item>
			</template>
			<template v-if="form.isPassed===false">
				<el-form-item label="整改措施">
					<el-textarea-template></el-textarea-template>
				</el-form-item>
				<el-form-item label="整改相关材料">
					<upload-button></upload-button>
				</el-form-item>
				<el-form-item label="整改结果">
					<el-radio-group v-model="form.isPassed ">
						<el-radio  :label="true">通过</el-radio>
						<el-radio  :label="false">不通过</el-radio>
					</el-radio-group>
				</el-form-item>
			</template>
		</el-form>
		<dialog-button :resetBtn="{show:false}" okBtn="确 定" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import Station from "../../../acomponents/Station.vue"
	import DatePickerScope from "../../../acomponents/DatePickerScope.vue"
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
	import YesOrNoTemplate from "../../../acomponents/YesOrNoTemplate.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"
	import ElDataPickerTemplate from "../../../acomponents/ElDataPickerTemplate.vue"
	import MultipleInput from "../../../acomponents/MultipleInput.vue"
	import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue"
	import PushButton from "../../../acomponents/PushButton.vue"
	import RemoveButton from "../../../acomponents/RemoveButton.vue"
	import Divider from "../../../acomponents/Divider.vue"


	export default {
		components: {
			DialogButton,
			Station,
			DatePickerScope,
			ElSelectTemplate,
			YesOrNoTemplate,
      UploadButton,
      ElDataPickerTemplate,
      MultipleInput,
      ElTextareaTemplate,
      PushButton,
      RemoveButton,
      Divider
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
			  num:1,
				//弹窗显示控制
				dialogVisible: false,
				//获得方式
				typeOptions:[
					//评选、申报、其他
					{id:1,name:'评选'},
					{id:2,name:'申报'},
					{id:3,name:'其他'},
				],


				//表单对象
				form: {
					type:'',
					term:false,
          isPassed:'',
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
