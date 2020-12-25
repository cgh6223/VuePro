<template>
	<el-dialog :visible.sync="dialogVisible" :width="width" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">
			<el-form-item label="CA锁名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="CA锁类型">
				<el-select-template v-model="form.sealType" :data="sealType"></el-select-template>
			</el-form-item>
			<el-form-item label="CA锁管理人">
				<query-input></query-input>
			</el-form-item>
			<divider></divider>
			<span>CA锁使用网站</span>
			<el-form-item label="网站名称">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="链接">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="用户名">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="网站简要简介">
				<el-input></el-input>
			</el-form-item>
			<divider></divider>
			<span>手机绑定情况</span>
			<el-form-item label="机主">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input></el-input>
			</el-form-item>
			<divider></divider>
			<el-form-item label="CA锁启用时间">
				<el-data-picker-template></el-data-picker-template>
			</el-form-item>
			<el-form-item label="启用相关证明材料">
				<upload-button></upload-button>
			</el-form-item>
			<el-form-item label="CA锁停用时间">
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
			<el-form-item label="CA锁使用有效期">
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
	import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue"
	import Divider from "../../../acomponents/Divider.vue"

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
      ElNumber,
      ElTextareaTemplate,
      Divider
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
				sealType:[//、、、、
					{id:1,name:'法人锁'},
					{id:2,name:'公司锁'},
					{id:3,name:'个人锁'},
					{id:4,name:'软件锁'},
					{id:5,name:'其他锁'},
				],
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
