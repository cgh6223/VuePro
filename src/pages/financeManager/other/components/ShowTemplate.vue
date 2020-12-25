<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
				<el-tab-pane name="1">
				  <span slot="label">税务/银行信息台账</span>
				  <tax-and-bank-table></tax-and-bank-table>
					</el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">审计报告</span>
          <tax-info-table type="1"></tax-info-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">完税凭证</span>
          <tax-info-table type="2"></tax-info-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">社保缴纳凭证</span>
          <tax-info-table type="3"></tax-info-table>
        </el-tab-pane>


      </el-tabs>
    </div>
    <div class="dialog">
		<add-taxation-dialog title="新增税务信息" ref="addTaxaRef"></add-taxation-dialog>
		<add-taxation-dialog title="修改" ref="updateTaxaRef"></add-taxation-dialog>


    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import TaxAndBankTable from './table/TaxAndBankTable.vue'
  import TaxInfoTable from './table/TaxInfoTable.vue'
  import addTaxationDialog from './dialog/addTaxationDialog.vue'

  export default {
    components: {
      HeadButton,
      TaxAndBankTable,
      TaxInfoTable,
	  addTaxationDialog,
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName:'1',
        dataList:[{},{}],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
		headButtonClick(btn) {
			switch (btn) {
				case 1:
					this.$refs.addTaxaRef.openDialog();
					break;
				case 2:
					this.$refs.addBankRef.openDialog();
					break;
				case 3:
					this.$refs.addCompanyRef.openDialog();
					break;
			}
		},
	}
  }
</script>
<style lang='less' scoped>
.head-button{
  height: 50px;
  line-height: 50px;
  padding: 10px 20px;
}
</style>
