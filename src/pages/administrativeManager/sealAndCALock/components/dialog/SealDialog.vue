<template>
	<el-dialog :visible.sync="dialogVisible" :width="width" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">
			<el-form-item label="印章名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="印章类型">
				<el-select-template v-model="form.sealType" :data="sealType"></el-select-template>
			</el-form-item>
			<template v-if="form.sealType===9">
				<el-form-item label="">
					<el-select-template :data="practiceType"></el-select-template>
				</el-form-item>
				<el-form-item label="工程师名字">
					<el-input></el-input>
				</el-form-item>
			</template>
			<el-form-item label="印章取样">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="印章管理人">
				<query-input></query-input>
			</el-form-item>
			<el-form-item label="印章启用时间">
				<el-data-picker-template></el-data-picker-template>
			</el-form-item>
			<el-form-item label="启用相关证明材料">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="印章停用时间">
				<el-data-picker-template></el-data-picker-template>
			</el-form-item>
			<el-form-item label="停用相关证明材料">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="是否产生使用费">
				<yes-or-no-template v-model="form.isMoney"></yes-or-no-template>
			</el-form-item>
			<el-form-item v-if="form.isMoney==='是'" label="使用费">
				<el-number></el-number>
			</el-form-item>
			<el-form-item label="印章使用有效期">
				<date-picker-scope></date-picker-scope>
			</el-form-item>
		</el-form>

		<dialog-button :resetBtn="{show:false}" okBtn="确 定" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"

	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
	import ElCascaderTemplate from "../../../acomponents/ElCascaderTemplate.vue"
	import UploadButton from "../../../acomponents/UploadButton.vue"
	import ElDataPickerTemplate from "../../../acomponents/ElDataPickerTemplate.vue"
	import DatePickerScope from "../../../acomponents/DatePickerScope.vue"
	import QueryInput from "../../../acomponents/QueryInput.vue"
	import YesOrNoTemplate from "../../../acomponents/YesOrNoTemplate.vue"
	import ElNumber from "../../../acomponents/ElNumber.vue"

	export default {
		components: {
			DialogButton,
      ElSelectTemplate,
      ElCascaderTemplate,
      UploadButton,
      ElDataPickerTemplate,
      DatePickerScope,
      QueryInput,
      YesOrNoTemplate,
      ElNumber
		},
		props: {
      width:{
        type: String,
        dealt: '50%'
			},
			title: {
				type: String,
				dealt: ''
			}
		},
		watch: {
		},
		mounted() {},
		data: function() {

			return {
				//弹窗显示控制
				dialogVisible: false,

				//表单对象
				form: {
          sealType:'',
          isMoney:'',
				},
				//表单验证规则
				formRules: {},
				sealType:[
					{id:1,name:'部门章'},
					{id:2,name:'业务专用章'},
					{id:3,name:'公章'},
					{id:4,name:'法人章'},
					{id:5,name:'签字章'},
					{id:6,name:'合同专用章'},
					{id:7,name:'财务专用章'},
					{id:8,name:'发票专用章'},
					{id:9,name:'执业章',},
					{id:10,name:'资质章'},
					{id:11,name:'其他印章'},
				],
        practiceType:[
          {id:1,name:'监理工程师'},
          {id:2,name:'造价工程师'},
          {id:3,name:'咨询工程师'},
        ]
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
