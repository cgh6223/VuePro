<template>
	<div class="body">
		<div class="table">
			<el-table :data="dataList" align="center" height="7.5rem" highlight-current-row :header-cell-style="{fontSize:'14px'}">
				<el-table-column prop="" label="申请日期" align="center"></el-table-column>
				<el-table-column prop="" label="申请组织" align="center"></el-table-column>
				<el-table-column prop="" label="申请人" align="center"></el-table-column>
				<el-table-column prop="" label="类型" align="center"></el-table-column>
				<el-table-column prop="" label="用途说明" align="center"></el-table-column>
				<el-table-column prop="" label="采购申请理由" align="center"></el-table-column>
				<el-table-column prop="" label="申请采购数量" align="center"></el-table-column>
				<el-table-column prop="" label="申请采购预估总金额" align="center"></el-table-column>
				<el-table-column prop="" label="固定资产备注" align="center"></el-table-column>
				<el-table-column prop="" label="采购情况" align="center">
					<template slot-scope="scope">
						<el-popover trigger="click" placement="top">
							<p>采购数量：10</p>
							<p>采购单价：3000</p>
							<p>采购总价：30000</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">详细</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="供应商情况" align="center">
					<template slot-scope="scope">
						<el-popover trigger="click" placement="top">
							<p>供应商名称：李四电脑城</p>
							<p>供应商联系人：李四</p>
							<p>联系电话：18208972200</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">详细</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="采购总价" align="center">
					<!--<template slot-scope="scope">
						<el-popover trigger="click" placement="top">
							<p>采购总价：30000</p>
							<p>发票金额：30000</p>
							<p>欠票金额：0</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">详细</el-tag>
							</div>
						</el-popover>
					</template>-->
				</el-table-column>
				<el-table-column prop="" label="操作" align="center" width="300px">
					<template slot-scope="scope">
						<table-button :scope="scope.row" @click="tableButtonClick"></table-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="dialog">
			<fixed-assets-request-info-dialog ref="upRef" title="完善信息"></fixed-assets-request-info-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import TableButton from '../button/TableButton.vue'
	import FixedAssetsRequestInfoDialog from '../dialog/FixedAssetsRequestInfoDialog.vue'

	export default {
		components: {
			TableButton,
      FixedAssetsRequestInfoDialog,
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
						break;
					case 2:
						this.$refs.upRef.openDialog();
						break;
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
