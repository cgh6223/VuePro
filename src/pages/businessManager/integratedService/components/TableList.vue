<template>
	<div class="logContainer">
		<div class="search_container searchArea">
			<head-button @click="headBtnClick"></head-button>
		</div>
		<div class="table">
			
			<table-template ></table-template>
			<!-- <el-tabs :tab-position="tabPosition">
				<template v-for="item in statusOptions">
					<el-tab-pane :label="item.status">
						<table-template :statusType="item.status"></table-template>
					</el-tab-pane>
				</template>
			</el-tabs> -->
		</div>
		<div class="dialog">
			<add-item-dialog ref="addItemRef"></add-item-dialog>
			<query-item-dialog ref="queryItemRef"></query-item-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import HeadButton from './button/HeadButton.vue'
	import TableButton from './button/TableButton.vue'
	import AddItemDialog from './dialog/AddItemDialog.vue'
	import AddWordTemplateDialog from './dialog/AddWordTemplateDialog.vue'
	import QueryItemDialog from './dialog/QueryItemDialog.vue'
	import TableTemplate from './table/TableTemplate.vue'
	export default {
		components: {
			HeadButton,
			TableButton,
			AddItemDialog,
			AddWordTemplateDialog,
			QueryItemDialog,
			TableTemplate,
		},
		props: {},
		watch: {},
		//数据节点
		data() {
			return {
				statusOptions: [{
						id: 1,
						status: '备案中'
					},
					{
						id: 2,
						status: '进行中'
					},
					{
						id: 3,
						status: '完成申报中'
					},
					{
						id: 4,
						status: '未归档'
					},
					{
						id: 5,
						status: '归档审核中'
					},
					{
						id: 6,
						status: '已归档'
					},
					{
						id: 7,
						status: '项目已取消'
					},
				]
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			headBtnClick(btn, data) {
				switch (btn) {
					case 2:
						this.$refs.queryItemRef.openDialog()
						break
				}
			},
			
			handleCurrentChange(val) {
				this.pageShow.page = val;

			},
			handleSizeChange(val) {
				this.pageShow.limit = val;

			},
			clickTable(row, index, e) {
				this.$refs.tableRef.toggleRowExpansion(row)
			},
		}
	}
</script>
<style lang='less' scoped>

</style>
