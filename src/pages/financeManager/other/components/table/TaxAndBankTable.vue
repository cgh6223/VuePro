<template>
	<!--审计及完税信息台账-->
	<div class="body">
		<div class="table">
			<el-table :data="dataList" align="center" height="7.5rem" highlight-current-row :header-cell-style="{fontSize:'14px'}">
				<el-table-column prop="" label="公司类型" align="center"></el-table-column>
				<el-table-column prop="" label="公司名称" align="center"></el-table-column>
				<el-table-column prop="" label="开票信息" align="center">
					<template slot-scope="scope">
						<el-popover placement="right" width="300" trigger="click">
							<table>
								<tr><td>纳税人识别号：</td><td>{{scope.row.invoice.username}}</td></tr>
								<tr><td>开户行：</td><td>{{scope.row.invoice.bank}}</td></tr>
								<tr><td>账号：</td><td>{{scope.row.invoice.account}}</td></tr>
								<tr><td>开票电话：</td><td>{{scope.row.invoice.tel}}</td></tr>
								<tr><td>开票地址：</td><td>{{scope.row.invoice.address}}</td></tr>
							</table>
							<el-button slot="reference" type="text">详细</el-button>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="税务评级年份" align="center"></el-table-column>
				<el-table-column prop="" label="税务信用等级" align="center"></el-table-column>
				<el-table-column prop="" label="信用等级截图" align="center">
					<template slot-scope="scope">
						<el-button type="text">下载</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="" label="基本存款信息扫描件" align="center" width="170">
					<template slot-scope="scope">
						<el-button type="text">下载</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="" label="一般结算账户信息扫描件" align="center" width="170">
					<template slot-scope="scope">
						<el-popover placement="right" width="300" trigger="click">
							<el-table :data="scope.row.DepositInfo">
								<el-table-column label="名称" prop="name"></el-table-column>
								<el-table-column label="操作" >
									<template slot-scope="socpe2">
										<el-button type="text">下载</el-button>
									</template>
								</el-table-column>
							</el-table>
							<el-button slot="reference" type="text">详细</el-button>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="操作" align="center" width="200" fixed="right">
					<template slot-scope="scope">
						<table-button :scope="scope.row" @click="tableButtonClick"></table-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="dialog">
			<add-taxation-dialog title="修改" ref="updateTaxaRef"></add-taxation-dialog>
			<taxation-info-dialog title="完善税务信息" ref="TaxaRef"></taxation-info-dialog>
			<bank-info-dialog title="完善银行信息" ref="bankRef"></bank-info-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import TableButton from '../button/TableButton.vue'
	import addTaxationDialog from '../dialog/addTaxationDialog.vue'
	import TaxationInfoDialog from '../dialog/TaxationInfoDialog.vue'
	import BankInfoDialog from '../dialog/BankInfoDialog.vue'

	export default {
		components: {
			TableButton,
			addTaxationDialog,
			TaxationInfoDialog,
			BankInfoDialog,
		},
		props: {
		/* 	dataList: {
				type: Array,
				default: () => {
					return [{
						type: '审计'
					}, ]
				}
			} */
		},
		watch: {},
		//数据节点
		data() {
			return {
				dataList:[
					{
						invoice:{usname:'166669626',bank:'中国银行',account:'6513345944613',tel:'7789554',address:'贵阳...'},
						DepositInfo:[],
					}
				]
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			tableButtonClick(btn) {
				switch(btn){
					case 1 :
						this.$refs.updateTaxaRef.openDialog();
						break;
						case 2 :
						this.$refs.TaxaRef.openDialog();
						break;
						case 3 :
						this.$refs.bankRef.openDialog();
						break;
				}

			}
		}
	}
</script>
<style lang='less' scoped>

</style>
