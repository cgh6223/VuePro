<template>
	<el-dialog :visible.sync="dialogVisible" width="40%" :title="title">
		<el-form :model="form" ref="formRef" :rules="formRules" label-width="20%" >
			

			<el-form-item label="公司类型">
				<el-select v-model="form.type">
					<el-option v-for="item in typeOptions" :key="item.id" :value="item.id" :label="item.name"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="公司名称">
				<el-input aria-placeholder="请输入" v-model="form.nickName"></el-input>
			</el-form-item>
		</el-form>
		<dialog-button resetBtn="false"  @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
		
	</el-dialog>
</template>

<script>
	import DialogButton from "../../../acomponents/DialogButton.vue"

	export default {
		components: {
			DialogButton
		},
		props: {
			title: {
				type: String,
				dealt: ''
			},
			action:'',
		},
		watch: {
			title(newValue) {
				this.title1 = newValue
			}
		},
		mounted() {
			//this.title=this.title1
		},
		data() {

			return {
				//父窗口传递的弹窗标题
				title1: '',
				//弹窗显示控制
				dialogVisible: false,
				//开票类型
				typeOptions:[
					//总公司、自营分公司、协议分公司、项目分公司
					{id:1,name:'总公司'},
					{id:2,name:'自营分公司'},
					{id:3,name:'协议分公司'},
					{id:4,name:'项目分公司'},
				],
				//表单对象
				form: {
					type: '',
					nickName:'',
				},
				//表单验证规则
				formRules: {
					
				}
			}
		},
		methods: {
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
	