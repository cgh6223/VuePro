<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
			<el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-form-item label="开标时间">
					<rea-datepicker v-model="form.openingbidddateTime"></rea-datepicker>
				</el-form-item>
				<rea-divider title="入选单位"></rea-divider>
				<my-bidorg v-model="form.orgName"></my-bidorg>
				<rea-divider></rea-divider>

				<el-form-item label="通知书发出时间">
					<rea-datepicker v-model="form.disdateTime"></rea-datepicker>
				</el-form-item>
				<el-form-item label="盖章扫描件">
					<upload-button v-model="form.signNoticeFile"></upload-button>
				</el-form-item>

			</el-form>
			<dialog-button reset-btn="false" @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
		</el-dialog>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
  import MyBidorg from "../../acomponents/BidOrgTempalte.vue"
	export default {
		components: {
      MyBidorg
		},
		props: {
			title: '',
			width: '',
			labelWidth: {
				type: String,
				default: '130px'
			},
			data: {},
		},
		watch: {},
		//数据节点
		data() {
			return {
				dialogVisible: false,
				num: 1,
				form: {
          openingbidddateTime:'',
          orgName:[],
          disdateTime:'',
          signNoticeFile:'',
				},
				formRules: {},

			}
		},
		//生命周期函数节点
		created() {
		},
		//自定义函数节点
		methods: {
			openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          let ref=this.$myfunction.copyData(data)
					if (!this.$myfunction.isEmpty(data)) {
            ref.orgName = data.orgName.split(',')
          }
					this.form=ref
        }
				this.dialogVisible = true
			},
			dialogClose() {
				this.dialogVisible = false
        this.form=this.$options.data().form
			},
			submitForm() {
			  this.form.orgName=this.form.orgName.join(',')
				this.$emit('getFormData', this.$myfunction.copyData(this.form))
				this.dialogClose()
			},
		}
	}
</script>
<style lang='less' scoped>

</style>
