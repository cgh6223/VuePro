<template>
	<div class="body">
		<div class="table">
			<el-table :data="dataList" align="center" height="7.5rem" highlight-current-row :header-cell-style="{fontSize:'14px'}">
				<el-table-column prop="" label="车位停放点" align="center"></el-table-column>
				<el-table-column prop="" label="车位费用" align="center"></el-table-column>
				<el-table-column prop="" label="费用缴纳类型" align="center"></el-table-column>
				<el-table-column prop="" label="车位缴费时间" align="center"></el-table-column>
				<el-table-column prop="" label="车位缴费人" align="center"></el-table-column>

				<el-table-column prop="" label="车位使用人情况" align="center">
					<template slot-scope="scope">
						<el-popover trigger="click" placement="top">
							<el-table :data="[{}]">

								<el-table-column prop="" label="车位使用人" align="center"></el-table-column>
								<el-table-column prop="" label="车牌号" align="center"></el-table-column>

							</el-table>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">详细</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="操作" align="center" width="100px">
					<template slot-scope="scope">
						<table-button :scope="scope.row" @click="tableButtonClick"></table-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="dialog">
			<stop-vehicle-place-dialog title="修改" ref="updateRef"></stop-vehicle-place-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import TableButton from '../button/TableButton.vue'
	import StopVehiclePlaceDialog from '../dialog/StopVehiclePlaceDialog.vue'
	export default {
		components: {
      TableButton,
			StopVehiclePlaceDialog,
		},
		props: {
			dataList: {
				type: Array,
				default: () => {
					return [{
							type: '新增'
						},
						{
							type: '申请'
						}
					]
				}
			}
		},
		watch: {},
		//数据节点
		data() {
			return {}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			tableButtonClick(btn) {
				switch (btn) {
					case 1:
					  this.$refs.updateRef.openDialog()
						break
					case 2:
						break
					case 3:
						break
				}
			}
		}
	}
</script>
<style lang='less' scoped>
	.el-tag {
		cursor: pointer
	}
</style>
