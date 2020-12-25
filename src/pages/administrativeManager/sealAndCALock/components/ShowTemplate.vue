<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <template v-if="true">
        <el-tabs v-model="activeName">
          <el-tab-pane name="1">
            <span slot="label">印章</span>
            <seal-table></seal-table>
          </el-tab-pane>
          <el-tab-pane name="2">
            <span slot="label">电子印章</span>
            <electron-seal-table></electron-seal-table>
          </el-tab-pane>
          <el-tab-pane name="3">
            <span slot="label">CA锁</span>
            <ca-lock-table></ca-lock-table>
          </el-tab-pane>
          <el-tab-pane name="4">
            <span slot="label">印章(电子印章)、CA锁申请</span>
            <seal-ca-lock-apply-table></seal-ca-lock-apply-table>
          </el-tab-pane>
        </el-tabs>
      </template>
      <template v-if="false">
        <seal-ca-lock-apply-table></seal-ca-lock-apply-table>
      </template>
    </div>
    <div class="dialog">
		<add-seal-dialog title="新增印章" ref="addSealRef"></add-seal-dialog>
		<add-elec-seal-dialog title="新增电子印章" ref="addElecSealRef"></add-elec-seal-dialog>
		<AddCALockDialog title="新增CA锁" ref="addCalockRef"></AddCALockDialog>
		<apply-seal-dialog title="印章（电子印章）申请" ref="applySealRef"></apply-seal-dialog>
		<ApplyCALockDialog title="CA锁申请" ref="applyCalockRef"></ApplyCALockDialog>
		<query-dialog title="高级查询" ref="queryRef"></query-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import SealTable from './table/SealTable.vue'
  import ElectronSealTable from './table/ElectronSealTable.vue'
  import CaLockTable from './table/CALockTable.vue'
  import SealCaLockApplyTable from './table/SealCALockApplyTable.vue'
  import AddSealDialog from './dialog/AddSealDialog.vue'
  import AddElecSealDialog from './dialog/AddElecSealDialog.vue'
  import AddCALockDialog from './dialog/AddCALockDialog.vue'
  import ApplySealDialog from './dialog/ApplySealDialog.vue'
  import ApplyCALockDialog from './dialog/ApplySealCALockDialog.vue'
  import QueryDialog from './dialog/QueryDialog.vue'


  export default {
    components: {
      HeadButton,
      SealTable,
      ElectronSealTable,
      CaLockTable,
      SealCaLockApplyTable,
	  AddSealDialog,
	  AddElecSealDialog,
	  AddCALockDialog,
	  ApplySealDialog,
	  ApplyCALockDialog,
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
				this.$refs.addSealRef.openDialog();
				break;
				case 2:
				this.$refs.addElecSealRef.openDialog();
				break;
				case 3:
				this.$refs.addCalockRef.openDialog();
				break;
				case 4:
				this.$refs.applySealRef.openDialog();
				break;
				case 5:
				this.$refs.applyCalockRef.openDialog();
				break;
				case 6:
				this.$refs.queryRef.openDialog();
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
