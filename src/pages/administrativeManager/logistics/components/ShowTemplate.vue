<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">物业</span>
          <property-table></property-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">车辆</span>
          <vehicle-table></vehicle-table>
        </el-tab-pane>
				<el-tab-pane name="3">
          <span slot="label">车位</span>
          <parking-table></parking-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">用车</span>
          <use-vehicle-table></use-vehicle-table>
        </el-tab-pane>
        <el-tab-pane name="5">
          <span slot="label">公里数登记</span>
          <kilometre-table @handleSelectionChange="handleSelectionChange"></kilometre-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog">
      <add-property-dialog ref="addPropertyRef" title="新增物业"></add-property-dialog>
      <add-vehicle-dialog ref="addVehicleRef" title="新增车辆"></add-vehicle-dialog>
      <add-parking-dialog ref="addParkingRef" title="车位管理"></add-parking-dialog>
      <use-vehicle-apply-dialog ref="useVehicleRef" title="用车申请"></use-vehicle-apply-dialog>
      <kilometre-subsidy-dialog ref="kilometreRef" title="公里补贴报销"></kilometre-subsidy-dialog>
      <!-- <stop-vehicle-place-dialog ref="stopRef" ></stop-vehicle-place-dialog> -->
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import VehicleTable from './table/VehicleTable.vue'
  import UseVehicleTable from './table/UseVehicleTable.vue'
  import PropertyTable from './table/PropertyTable.vue'
  import ParkingTable from './table/ParkingTable.vue'
  import KilometreTable from './table/KilometreTable.vue'

  import AddPropertyDialog from './dialog/AddPropertyDialog.vue'
  import AddVehicleDialog from './dialog/AddVehicleDialog.vue'
  import AddParkingDialog from './dialog/AddParkingDialog.vue'
  import UseVehicleApplyDialog from './dialog/UseVehicleApplyDialog.vue'
  import KilometreSubsidyDialog from './dialog/KilometreSubsidyDialog.vue'
  /* import StopVehiclePlaceDialog from './dialog/StopVehiclePlaceDialog.vue' */

  export default {
    components: {
      HeadButton,
      VehicleTable,
      UseVehicleTable,
      PropertyTable,
			ParkingTable,
      KilometreTable,
      AddPropertyDialog,
      AddVehicleDialog,
			AddParkingDialog,
      UseVehicleApplyDialog,
      KilometreSubsidyDialog,
      /* StopVehiclePlaceDialog */
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        dataList: [{}, {}],
        kilometreSubsidy:{},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      headButtonClick(btn){
        switch (btn) {
          case 1:
            this.$refs.addPropertyRef.openDialog()
            break
          case 2:
            this.$refs.addVehicleRef.openDialog()
            break
          case 3:
            this.$refs.useVehicleRef.openDialog()
            break
          case 4:
            this.$refs.kilometreRef.openDialog(this.kilometreSubsidy)
            break
          case 5:
            this.$refs.addParkingRef.openDialog()
            break
        }
      },

      handleSelectionChange(val) {
        this.kilometreSubsidy = val;
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
