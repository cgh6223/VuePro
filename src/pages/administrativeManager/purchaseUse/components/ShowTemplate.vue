<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">固定资产</span>
          <fixed-assets-table></fixed-assets-table>
        </el-tab-pane>
        <!--<el-tab-pane name="2">
          <span slot="label">一般采购</span>
          <purchase-table></purchase-table>
        </el-tab-pane>-->
        <el-tab-pane name="2">
          <span slot="label">物品入库报销</span>
          <storage-table></storage-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">物品领用</span>
          <use-table></use-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog">
		<fixed-assets-request-dialog title="固定资产采购申请" ref="fixedRequestRef"></fixed-assets-request-dialog>
		<!--<general-request-dialog title="一般采购报销申请" ref="generalRequestRef"></general-request-dialog>-->
		<goods-request-dialog title="物品领用申请" ref="goodsRequestRef"></goods-request-dialog>
		<goods-warehousing-dialog title="入库物品报销申请" ref="goodsWarehousingRef"></goods-warehousing-dialog>
		<query-dialog title="高级查询" ref="queryRef"></query-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import PurchaseTable from './table/PurchaseTable.vue'
  import StorageTable from './table/StorageTable.vue'
  import UseTable from './table/UseTable.vue'
  import FixedAssetsTable from './table/FixedAssetsTable.vue'
  import FixedAssetsRequestDialog from './dialog/FixedAssetsRequestDialog.vue'
  import GeneralRequestDialog from './dialog/GeneralRequestDialog.vue'
  import GoodsRequestDialog from './dialog/GoodsRequestDialog.vue'
  import GoodsWarehousingDialog from './dialog/GoodsWarehousingDialog.vue'
  import QueryDialog from './dialog/QueryDialog.vue'


  export default {
    components: {
      HeadButton,
      FixedAssetsTable,
      PurchaseTable,
      StorageTable,
      UseTable,
	  FixedAssetsRequestDialog,
	  GeneralRequestDialog,
	  GoodsRequestDialog,
	  GoodsWarehousingDialog,
	  QueryDialog,

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
    created() {
    },
    //自定义函数节点
    methods: {
		headButtonClick(btn){
			switch(btn){
				case 1:
				this.$refs.queryRef.openDialog();
				break;
				case 2:
				break;
				case 3:
				this.$refs.fixedRequestRef.openDialog();
				break;
				case 4:
				this.$refs.goodsWarehousingRef.openDialog();
				break;
				case 5:
				this.$refs.goodsRequestRef.openDialog();
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
