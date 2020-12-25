<template>
	<!-- 合同执行情况弹窗 -->
	<div>
		<el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
			<div>
				<table>
					<tr>
						<th colspan="12">
							<span>合同编号：HDZX-2020-1</span>
							<span style="margin-left: 50px">合同名称：工程建设</span>
							<span style="margin-left: 50px">客户名称：高通房地产有限公司</span>
						</th>
					</tr>
					<tr>
						<th colspan="7">项目情况</th>
						<th colspan="2">项目收入情况</th>
						<th colspan="3">项目支出情况</th>
					</tr>
					<tr>
						<th>项目编号</th>
						<th>项目名称</th>
						<th>计划天数</th>
						<th>工作进度</th>
						<th>工作延期天数</th>
						<th>归档延期天数</th>
						<th>档案情况</th>
						<th>服务费收入</th>
						<th>文件费收入</th>
						<th>项目支出</th>
						<th>税金支出</th>
					</tr>
					<template class="table-main" v-for="item in dataList">
						<tr>
							<td>{{item.itemCode}}</td>
							<td>{{item.itemName}}</td>
							<td>{{item.planDays}}</td>
							<td>{{item.workSchedule}}</td>
							<td>{{item.workDelayDays}}</td>
							<td>{{item.filedDelayDays}}</td>
							<td>{{item.filedInfo}}</td>
							<td>{{item.serviceMoneyIncome}}</td>
							<td>{{item.fileMoneyIncome}}</td>
							<td>{{item.workTravelMoneyExpend}}</td>
							<td>{{item.taxesExpend}}</td>
						</tr>
					</template>

					<tr>
						<td colspan="7">按合同收入</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="7" rowspan="2">全合同收支合计</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2"></td>
						<td colspan="3"></td>
					</tr>
				</table>
			</div>
			<div >
				<table>
					<tr>
						<th colspan="3">其他情况</th>
					</tr>
					<tr>
						<th>开票金额</th>
						<th>开票已收</th>
						<th>应收账款</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<th colspan="3">风险（履约）保证金情况</th>
					</tr>
					<tr>
						<th>缴纳金额</th>
						<th>缴纳时间</th>
						<th>退回时间</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
				</div>
		</el-dialog>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import DialogButton from './DialogButton.vue'
	// import CarryOutTable from '../table/CarryOutTable.vue'
	export default {
		components: {
			DialogButton,
			// CarryOutTable
		},
		props: {
			title: '',
			width: {
				type: String,
				default: '50%'
			}
		},
		watch: {},
		//数据节点
		data() {
			return {
				dialogVisible: false,
				dataList: [{
						itemCode: 'HDZX-2020-1-1',
						itemName: '土建咨询',
						planDays: '10',
						workSchedule: '90%',
						workDelayDays: '2',
						filedDelayDays: '2',
						filedInfo: '已归档',
						serviceMoneyIncome: '30000',
						fileMoneyIncome: '500',
						workTravelMoneyExpend: '750',
						otherExpend: '300',
						taxesExpend: '1200',
					},
					{
						itemCode: 'HDZX-2020-1-2',
						itemName: '房屋建设咨询',
						planDays: '10',
						workSchedule: '40%',
						workDelayDays: '0',
						workDelayReason: '无',
						filedDelayDays: '0',
						filedDelayReason: '无',
						filedInfo: '未归档',
						serviceMoneyIncome: '30000',
						fileMoneyIncome: '500',
						workTravelMoneyExpend: '750',
						otherExpend: '300',
						taxesExpend: '1200',
					}
				],

			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			openDialog(data) {
				this.dialogVisible = true
			},
			dialogClose() {
				this.dialogVisible = false
				this.resetForm()
			},
		}
	}
</script>
<style lang='less' scoped>
	div{
		display: inline-block;
		vertical-align: top;
	}
	table {
		border: 1px solid #bfcbd9;

		tr {
			height: 45px;

			th {
				border: 1px solid #bfcbd9;
				background: rgba(165, 231, 240, 0.2);
				font-size: 16px;
				text-align: center;

				&:nth-child(1) {
					width: 150px;
				}

				&:nth-child(2) {
					width: 150px;
				}
			}

			td {
				border: 1px solid #bfcbd9;
				font-size: 14px;
				text-align: center;
			}
		}
	}
</style>
