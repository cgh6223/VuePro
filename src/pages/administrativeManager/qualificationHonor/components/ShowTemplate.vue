<template>
	<div class="body">
		<div class="head-button">
			<head-button @click="headButtonClick"></head-button>
		</div>
		<div class="table">
			<el-tabs v-model="activeName">
				<el-tab-pane name="1">
					<span slot="label">资质</span>
					<qualification-table></qualification-table>
				</el-tab-pane>
				<el-tab-pane name="2">
					<span slot="label">荣誉</span>
					<honor-table></honor-table>
				</el-tab-pane>
				<el-tab-pane name="3">
					<span slot="label">公司</span>
					<company-table></company-table>
				</el-tab-pane>
				<el-tab-pane name="4">
					<span slot="label">行政检查</span>
					<administrative-inspection-table></administrative-inspection-table>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="dialog">
			<add-qualifications-dialog title="新增资质" ref="addQualiRef"></add-qualifications-dialog>
			<add-honor-dialog title="新增荣誉" ref="addHonorRef"></add-honor-dialog>
			<add-company-dialog title="新增公司" ref="addCompanyRef"></add-company-dialog>
			<add-check-dialog title="行政检查名称" ref="addCheckRef"></add-check-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import HeadButton from './button/HeadButton.vue'
	import CompanyTable from './table/CompanyTable.vue'
	import HonorTable from './table/HonorTable.vue'
	import QualificationTable from './table/QualificationTable.vue'
	import AdministrativeInspectionTable from './table/AdministrativeInspectionTable.vue'
	import addQualificationsDialog from './dialog/AddQualificationsDialog.vue'
	import addHonorDialog from './dialog/AddHonorDialog.vue'
	import addCompanyDialog from './dialog/AddCompanyDialog.vue'
	import addCheckDialog from './dialog/AddCheckDialog.vue'


	export default {
		components: {
			HeadButton,
			CompanyTable,
			HonorTable,
			QualificationTable,
			AdministrativeInspectionTable,
			addQualificationsDialog,
			addHonorDialog,
			addCompanyDialog,
			addCheckDialog,
		},
		props: {},
		watch: {},
		//数据节点
		data() {
			return {
				activeName: '1',
				dataList: [{}, {}],
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			headButtonClick(btn) {
				switch (btn) {
					case 1:
						this.$refs.addQualiRef.openDialog();
						break;
					case 2:
						this.$refs.addHonorRef.openDialog();
						break;
					case 3:
						this.$refs.addCompanyRef.openDialog();
						break;
					case 4:
						this.$refs.addCheckRef.openDialog();
						break;
						case 5:
						this.$refs.socialRef.openDialog();
						break;
				}
			}
		}
	}
</script>
<style lang='less' scoped>
	.head-button {
		height: 50px;
		line-height: 50px;
		padding: 10px 20px;
	}
</style>
