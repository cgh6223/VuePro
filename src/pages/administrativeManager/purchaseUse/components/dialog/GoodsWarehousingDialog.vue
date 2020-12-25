<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title1">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">
			<el-form-item label="类型">
				<el-select-template :data="typeOptions" v-model="form.type"></el-select-template>
			</el-form-item>
			<el-form-item label="采购数量">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="采购单价">
				<el-input></el-input>
			</el-form-item>
			<el-form-item label="采购总价">
				<el-input></el-input>
			</el-form-item>
		</el-form>

		<dialog-button :resetBtn="{show:false}" okBtn="提 交" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"
	import Station from "../../../acomponents/Station.vue"
	import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"

	export default {
		components: {
			DialogButton,
			Station,
			ElSelectTemplate
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
				//类型
				typeOptions:[
					//弘典酒、茅台酒、飞天迎宾酒、A4纸、A3纸、安全帽、工作服
					{id:1,name:'弘典酒'},
					{id:2,name:'茅台酒'},
					{id:3,name:'飞天迎宾酒'},
					{id:3,name:'A4纸'},
					{id:3,name:'A3纸'},
					{id:3,name:'安全帽'},
					{id:3,name:'工作服'},
				],

				//表单对象
				form: {
					type:'',
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
