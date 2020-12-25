<template>
	<el-dialog :visible.sync="dialogVisible" width="50%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="30%">

			<el-form-item label="荣誉名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="荣誉获得方式">
				 <el-select-template :data="typeOptions" v-model="form.type"></el-select-template>
			</el-form-item>
			<template v-if="form.type == 1">
				<el-form-item label="评选主办单位">
					 <el-input ></el-input>
				</el-form-item>
				<el-form-item label="评选标准">
					<upload-button></upload-button>
				</el-form-item>
				<el-form-item label="评选提交材料">
					<upload-button></upload-button>
				</el-form-item>
				<el-form-item label="评选结果">
					 <el-input ></el-input>
				</el-form-item>
			</template>
			<template v-if="form.type == 2">
				<el-form-item label="申报单位">
					 <el-input ></el-input>
				</el-form-item>
				<el-form-item label="申报要求">
					<upload-button></upload-button>
				</el-form-item>
				<el-form-item label="申报提交材料">
					<upload-button></upload-button>
				</el-form-item>
				<el-form-item label="申报结果">
					 <el-input ></el-input>
				</el-form-item>
			</template>

			<el-form-item label="荣誉等级">
				  <el-input ></el-input>
			</el-form-item>
			<divider></divider>
			<span>颁发单位<push-button v-model="num"></push-button></span>
			<template v-for="i in num">
				<el-form-item :label="i+'、单位名称'">
					<el-input></el-input>
				</el-form-item>
			</template>
			<divider></divider>
			<el-form-item label="荣誉获得日期">
				 <el-data-picker-template></el-data-picker-template>
			</el-form-item>
			<el-form-item label="荣誉扫描件">
				<upload-button></upload-button>
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
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
	import YesOrNoTemplate from "../../../acomponents/YesOrNoTemplate.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"
	import ElDataPickerTemplate from "../../../acomponents/ElDataPickerTemplate.vue"
	import PushButton from "../../../acomponents/PushButton.vue"
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
      PushButton,
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
