<template>
	<div class="body">
		<div class="table">
			<el-table ref="tableRef" :data="dataList" style="width: 100%" align="center" height="500px" highlight-current-row
			 :header-cell-style="{fontSize:'14px'}" :span-method="doMerge">

				<el-table-column prop="contractCode" label="合同编号" align="center" width="150"></el-table-column>
				<el-table-column prop="contractName" label="合同名称" align="center" width="150"></el-table-column>
				<el-table-column prop="custName" label="客户方名称" align="center" width="150"></el-table-column>
				<el-table-column prop="totalMoney" label="项目总投资" align="center" width="100"></el-table-column>
				<el-table-column prop="workGroup" label="工作组成员" align="center" width="100">
					<template slot-scope="scope">
						<el-popover-template :p-object="{show:true,labelPropList:workGroupTemplate,
				                         data:scope.row.workGroup}"></el-popover-template>
					</template>
				</el-table-column>
				<!-- <el-table-column prop="contactPerson" label="委托联系人" align="center" width="100">
					<template slot-scope="scope">
						<el-popover-template :table-object="{show:true,labelPropList:contactPersonTemplate,
				                         data:scope.row.contactPerson}"></el-popover-template>
					</template>
				</el-table-column> -->
				
					<el-table-column prop="business.businessType" label="业务类型" align="center" width="80"></el-table-column>
					<el-table-column prop="business.project.itemCode" label="项目编号" align="center" width="150"></el-table-column>
					<el-table-column prop="business.project.itemName" label="项目名称" align="center" width="150"></el-table-column>
					<el-table-column prop="createTime" label="创建时间" align="center" width="150"></el-table-column>
					<el-table-column prop="business.project.projectType" label="专业工程分类" align="center" width="120"></el-table-column>
					<el-table-column prop="business.project.type" label="类型" align="center" width="120"></el-table-column>
					<el-table-column label="工作组成员" align="center" width="100">
						<template slot-scope="scope">
							<el-popover-template :p-object="{
								show:true,
								labelPropList:scope.row.business.workGroupTemplate,
					      data:scope.row.business.project.workGroup}">
							</el-popover-template>
						</template>
					</el-table-column>
					<el-table-column prop="contactPerson" label="委托联系人" align="center" width="100">
						<template slot-scope="scope">
							<el-popover-template :table-object="{show:true,labelPropList:contactPersonTemplate,
					                         data:scope.row.contactPerson}"></el-popover-template>
						</template>
					</el-table-column>
					<el-table-column label="项目归属" align="center" width="80"></el-table-column>
					<el-table-column label="查看" align="center" width="80">
						<template slot-scope="scope">
							<el-button type="text">进入项目</el-button>
						</template>
					</el-table-column>
				

				<el-table-column label="操作" align="center" width="100" fixed="right">
					<template slot-scope="scope">
						<table-button :scope="scope.row" @click="tableBtnClick"></table-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="pagination">
			<!--分页-->
			<pagination :pageTotal="dataList.total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
		</div>

		<div class="dialog">
			<transfer-file-dialog ref="transferRef" title="原件移交"></transfer-file-dialog>
			<cancel-project-dialog ref="cacelRef" width="30%" title="项目取消登记"></cancel-project-dialog>
			<cacel-info-dialog ref="cacelInfoRef" width="30%" title="项目取消详情"></cacel-info-dialog>
			<contract-execute-dialog title="合同执行情况" width="90%" ref="contractRef"></contract-execute-dialog>
		</div>

	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import pagination from '../../../../../components/pagination/index.vue'
	import TableButton from '../button/TableButton.vue'
	import ContractExecuteDialog from '../../../acomponents/ContractExecuteDialog.vue'
	import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'
	import TransferFileDialog from '../dialog/TransferFileDialog.vue'
	import CancelProjectDialog from '../dialog/CancelProjectDialog.vue'
	import CacelInfoDialog from '../dialog/CacelInfoDialog.vue'
	export default {
		components: {
			TableButton,
			pagination,
			ContractExecuteDialog,
			ElPopoverTemplate,
			TransferFileDialog,
			CancelProjectDialog,
			CacelInfoDialog
		},
		props: {
			statusType: {
				type: String,
				default: '备案中'
			}
		},
		watch: {
			dataBase(newValue) {
				this.type = newValue.type
				let array = []
				newValue.dataList.forEach(val => {
					if (newValue.type === '综合业务') {
						if (val.businessType.indexOf(newValue.type) !== -1) {
							array.push(val)
						}
					} else if (val.businessType === newValue.type) {
						array.push(val)
					}

				})
				this.dataList = array
				this.total = array.length
			}
		},
		//数据节点
		data() {
			return {
				tagType: 'click',
				type: '',
				dataList: [{
						contractCode: 'HDQGC-2020-001',
						contractName: '合同一',
						workGroup: {
							chiefEngineer: '张三',
							consultResponsible: '王五',
							costResponsible: '赵六',
							biddingResponsible: '赵桥',
							supervisorResponsible: '王菲',
							itemResponsible: '王菲',
						},
						contactPerson: [{
								name: '张三',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目经理',
							},
							{
								name: '李四',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目总监',
							}
						],
						business: {
							businessType: '工程咨询',
							workGroupTemplate: [{
									label: '分管副总经理',
									prop: 'vicePresident'
								},
								{
									label: '技术负责人',
									prop: 'technicalDirector'
								},
								{
									label: '经理',
									prop: 'manager'
								},
								{
									label: '项目经理',
									prop: 'itemManager'
								},
								{
									label: '专员',
									prop: 'members'
								},
								{
									label: '其他人员',
									prop: 'others'
								},
							],
							project: {
								itemCode: 'HDQGC-2020-001-001',
								itemName: '项目一',
								projectType: '房屋建筑工程',
								type:'类型一',
								workGroup: {
									vicePresident: '张三',
									technicalDirector: '王五',
									manager: '李四',
									itemManager: '赵日天',
									members: '赵六、李天',
									others: '赵六、李天',
								},

							}
						},
						status: {
							status: 1,
							msg: '备案中'
						},
					},
					{
						contractCode: 'HDQGC-2020-001',
						contractName: '合同一',
						workGroup: {
							chiefEngineer: '张三',
							consultResponsible: '王五',
							costResponsible: '赵六',
							biddingResponsible: '赵桥',
							supervisorResponsible: '王菲',
							itemResponsible: '王菲',
						},
						contactPerson: [{
								name: '张三',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目经理',
							},
							{
								name: '李四',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目总监',
							}
						],
						business: {
							businessType: '造价咨询',
							workGroupTemplate: [{
									label: '分管副总经理',
									prop: 'vicePresident'
								},
								{
									label: '技术负责人',
									prop: 'technicalDirector'
								},
								{
									label: '经理',
									prop: 'manager'
								},
								{
									label: '项目经理',
									prop: 'itemManager'
								},
								{
									label: '专员',
									prop: 'members'
								},
								{
									label: '其他人员',
									prop: 'others'
								},
							],
							project: {
								itemCode: 'HDQGC-2020-001-001',
								itemName: '项目一',
								projectType: '房屋建筑工程',
								type:'类型一',
								workGroup: {
									vicePresident: '张三',
									technicalDirector: '王五',
									manager: '李四',
									itemManager: '赵日天',
									members: '赵六、李天',
									others: '赵六、李天',
								},

							}
						},
						status: {
							status: 1,
							msg: '备案中'
						},
					},
					{
						contractCode: 'HDQGC-2020-001',
						contractName: '合同一',
						workGroup: {
							chiefEngineer: '张三',
							consultResponsible: '王五',
							costResponsible: '赵六',
							biddingResponsible: '赵桥',
							supervisorResponsible: '王菲',
							itemResponsible: '王菲',
						},
						contactPerson: [{
								name: '张三',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目经理',
							},
							{
								name: '李四',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目总监',
							}
						],
						business: {
							businessType: '招标代理',
							workGroupTemplate: [{
									label: '分管副总经理',
									prop: 'vicePresident'
								},
								{
									label: '技术负责人',
									prop: 'technicalDirector'
								},
								{
									label: '经理',
									prop: 'manager'
								},
								{
									label: '项目经理',
									prop: 'itemManager'
								},
								{
									label: '专员',
									prop: 'members'
								},
								{
									label: '其他人员',
									prop: 'others'
								},
							],
							project: {
								itemCode: 'HDQGC-2020-001-001',
								itemName: '项目一',
								projectType: '房屋建筑工程',
								type:'类型一',
								workGroup: {
									vicePresident: '张三',
									technicalDirector: '王五',
									manager: '李四',
									itemManager: '赵日天',
									members: '赵六、李天',
									others: '赵六、李天',
								},

							}
						},
						status: {
							status: 1,
							msg: '备案中'
						},
					},
					{
						contractCode: 'HDQGC-2020-001',
						contractName: '合同一',
						workGroup: {
							chiefEngineer: '张三',
							consultResponsible: '王五',
							costResponsible: '赵六',
							biddingResponsible: '赵桥',
							supervisorResponsible: '王菲',
							itemResponsible: '王菲',
						},
						contactPerson: [{
								name: '张三',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目经理',
							},
							{
								name: '李四',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目总监',
							}
						],
						business: {
							businessType: '工程监理',
							workGroupTemplate: [{
									label: '分管副总经理',
									prop: 'vicePresident'
								},
								{
									label: '技术负责人',
									prop: 'technicalDirector'
								},
								{
									label: '经理',
									prop: 'manager'
								},
								{
									label: '项目经理',
									prop: 'itemManager'
								},
								{
									label: '专员',
									prop: 'members'
								},
								{
									label: '其他人员',
									prop: 'others'
								},
							],
							project: {
								itemCode: 'HDQGC-2020-001-001',
								itemName: '项目一',
								projectType: '房屋建筑工程',
								type:'类型一',
								workGroup: {
									vicePresident: '张三',
									technicalDirector: '王五',
									manager: '李四',
									itemManager: '赵日天',
									members: '赵六、李天',
									others: '赵六、李天',
								},
					
							}
						},
						status: {
							status: 1,
							msg: '备案中'
						},
					},
					{
						contractCode: 'HDQGC-2020-001',
						contractName: '合同一',
						workGroup: {
							chiefEngineer: '张三',
							consultResponsible: '王五',
							costResponsible: '赵六',
							biddingResponsible: '赵桥',
							supervisorResponsible: '王菲',
							itemResponsible: '王菲',
						},
						contactPerson: [{
								name: '张三',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目经理',
							},
							{
								name: '李四',
								phone: '18208798458',
								depName: '招标一部',
								posName: '项目总监',
							}
						],
						business: {
							businessType: '项目管理',
							workGroupTemplate: [{
									label: '分管副总经理',
									prop: 'vicePresident'
								},
								{
									label: '技术负责人',
									prop: 'technicalDirector'
								},
								{
									label: '经理',
									prop: 'manager'
								},
								{
									label: '项目经理',
									prop: 'itemManager'
								},
								{
									label: '专员',
									prop: 'members'
								},
								{
									label: '其他人员',
									prop: 'others'
								},
							],
							project: {
								itemCode: 'HDQGC-2020-001-001',
								itemName: '项目一',
								projectType: '房屋建筑工程',
								type:'类型一',
								workGroup: {
									vicePresident: '张三',
									technicalDirector: '王五',
									manager: '李四',
									itemManager: '赵日天',
									members: '赵六、李天',
									others: '赵六、李天',
								},
					
							}
						},
						status: {
							status: 1,
							msg: '备案中'
						},
					},
				],
				total: 0,
				pageShow: {
					page: 1,
					limit: 20,
					filter: '1=1'
				},
				workGroupTemplate: [{
						label: '总咨询师',
						prop: 'chiefEngineer'
					},
					{
						label: '工程咨询负责人',
						prop: 'consultResponsible'
					},
					{
						label: '造价咨询负责人',
						prop: 'costResponsible'
					},
					{
						label: '招标代理负责人',
						prop: 'biddingResponsible'
					},
					{
						label: '工程监理负责人',
						prop: 'supervisorResponsible'
					},
					{
						label: '项目管理负责人',
						prop: 'itemResponsible'
					},
				],
				contactPersonTemplate: [{
						label: '姓名',
						prop: 'name'
					},
					{
						label: '电话',
						prop: 'phone'
					},
					{
						label: '部门',
						prop: 'depName'
					},
					{
						label: '职务',
						prop: 'posName'
					},
				],
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
			tableBtnClick(btn, data) {
				switch (btn) {
					case 1:
						this.clickTable(data)
						break;
					case 2:
						this.$router.push({
							path: 'workbench',
							query: {
								type: '全过程咨询'
							}
						})
						break;
					case 3:
						this.$refs.transferRef.openDialog()
						break;
					case 4:
						this.$refs.cacelRef.openDialog()
						break;
					case 5:
						this.$refs.contractRef.openDialog()
						break;
					case 6:
						this.$refs.cacelInfoRef.openDialog()
						break;
				}
			},
			handleCurrentChange(val) {
				this.pageShow.page = val;

			},
			handleSizeChange(val) {
				this.pageShow.limit = val;

			},
			doMerge({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (columnIndex < 5 || columnIndex === 15 ) {
					if (rowIndex % 5 === 0) {
						return {
							rowspan: 5,
							colspan: 1
						};
					} else {
						return {
							rowspan: 0,
							colspan: 0
						};
					}
				}
			}
		}
	}
</script>
<style lang='less' scoped>
	.el-table {
		.el-tag {
			cursor: pointer;
		}
	}
</style>
