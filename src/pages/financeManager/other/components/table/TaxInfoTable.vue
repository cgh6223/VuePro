<template>
	<!--银行信息台账-->
	<div class="body">
		<el-tabs v-model="activeName" tab-position="left">
			<template v-for="(item,index) in companyList">
				<el-tab-pane :name="index">
					<span slot="label">{{item.name}}</span>
					<div class="table">
						<head-right-button title="新增" @click="openDialog"></head-right-button>
						<el-table :data="dataList" align="center" height="7.5rem" highlight-current-row :header-cell-style="{fontSize:'14px'}">
							<el-table-column prop="" label="时间" align="center"></el-table-column>
							<el-table-column prop="" label="附件" align="center">
								<template slot-scope="scope">
									<el-button type="text">下载</el-button>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" align="center" width="300px">
								<template slot-scope="scope">
									<el-button type="text" @click="$refs.addReportRef.openDialog()">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-tab-pane>
			</template>

		</el-tabs>
		<div class="dialog">
			<add-report-dialog title="新增审计报告信息" ref="addReportRef"></add-report-dialog>
			<add-payment-dialog title="新增审完税信息" ref="addPayRef"></add-payment-dialog>
			<add-security-dialog title="新增社保缴纳信息" ref="addSecRef"></add-security-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import TableButton from '../button/TableButton.vue'
	import HeadRightButton from '../button/HeadRightButton.vue'
	import TaxationInfoDialog from '../dialog/TaxationInfoDialog.vue'
	import addReportDialog from '../dialog/addReportDialog.vue'
	import AddPaymentDialog from '../dialog/AddPaymentDialog.vue'
	import AddSecurityDialog from '../dialog/AddSecurityDialog.vue'
	export default {
		components: {
			TableButton,
			TaxationInfoDialog,
			addReportDialog,
			AddPaymentDialog,
			AddSecurityDialog,
      HeadRightButton
		},
		props: {
			type:'',
		},
		watch: {},
		//数据节点
		data() {
			return {
				dataList:[{}],
        activeName:'0',
        companyList:[
					{name:'重庆分公司',dataList:[]},
					{name:'广西分公司',dataList:[]},
					{name:'北京分公司',dataList:[]},
					{name:'上海分公司',dataList:[]},
					{name:'广州分公司',dataList:[]},
				]
			}
		},
		//生命周期函数节点
		created() {},
		//自定义函数节点
		methods: {
      openDialog(){
        console.log(this.type)
        switch (this.type) {
					case '1':
					  this.$refs.addReportRef.openDialog()
					  break
          case '2':
            this.$refs.addPayRef.openDialog()
            break
          case '3':
            this.$refs.addSecRef.openDialog()
            break
        }
			}
		}
	}
</script>
<style lang='less' scoped>

</style>
