<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="车辆号牌" align="center"></el-table-column>
        <el-table-column prop="" label="车辆型号" align="center"></el-table-column>
        <el-table-column prop="" label="车主" align="center"></el-table-column>
        <el-table-column prop="" label="驾乘人数" align="center"></el-table-column>
				<el-table-column prop="" label="车辆详情" align="center">
					<template slot-scope="scope">
					  <el-popover trigger="click" placement="top">
					    <p>购买日期：2020/8/3</p>
					    <p>车身颜色：白色</p>
					    <p>轮胎型号：lt583854</p>
					    <p>排量：500毫升</p>
					    <p>燃油型号：97号启用</p>
					    <p>发动机号：GTA5696485</p>
					    <div slot="reference" class="name-wrapper">
					      <el-tag size="medium">详细</el-tag>
					    </div>
					  </el-popover>
					</template>
				</el-table-column>

        <el-table-column prop="" label="年检情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="[{}]">
                <el-table-column prop="" label="年检日期" align="center"></el-table-column>
                <el-table-column prop="" label="年检经办人" align="center"></el-table-column>
                <el-table-column prop="" label="年检有效期" align="center"></el-table-column>
                <el-table-column prop="" label="操作" align="center" width="100px">
                  <template slot-scope="scope">
                    <text-button title="修改" @click="$refs.upInspection.openDialog(scope.Row)"></text-button>
                  </template>
                </el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>


        <el-table-column prop="" label="保险情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="[{}]">
                <el-table-column prop="" label="保险类型" align="center"></el-table-column>
                <el-table-column prop="" label="保险公司名称" align="center"></el-table-column>
                <el-table-column prop="" label="保险公司联系人" align="center"></el-table-column>
                <el-table-column prop="" label="保险公司联系人电话" align="center"></el-table-column>
                <el-table-column prop="" label="保险金额" align="center"></el-table-column>
                <el-table-column prop="" label="保险扫描件" align="center">
									<template slot-scope="scope2">
										<el-button type="text">下载</el-button>
									</template>
								</el-table-column>
                <el-table-column prop="" label="保险有效期" align="center"></el-table-column>
                <el-table-column prop="" label="操作" align="center" width="100px">
                  <template slot-scope="scope">
                    <text-button title="修改" @click="$refs.upInsurance.openDialog(scope.Row)"></text-button>
                  </template>
                </el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="250px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
			<update-vehicle-dialog title="完善信息" ref="updateRef"></update-vehicle-dialog>
      <vehicle-inspection-dialog title="新增年检信息" ref="addInspection"></vehicle-inspection-dialog>
      <vehicle-inspection-dialog title="修改年检信息" ref="upInspection"></vehicle-inspection-dialog>
      <vehicle-insurance-dialog title="新增保险信息" ref="addInsurance"></vehicle-insurance-dialog>
      <vehicle-insurance-dialog title="修改保险信息" ref="upInsurance"></vehicle-insurance-dialog>
		</div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/VehicleTableButton.vue'
  import UpdateVehicleDialog from '../dialog/UpdateVehicleDialog.vue'
  import VehicleInspectionDialog from '../dialog/VehicleInspectionDialog.vue'
  import VehicleInsuranceDialog from '../dialog/VehicleInsuranceDialog.vue'
  import TextButton from '../../../acomponents/TextButton.vue'
  export default {
    components: {
      TableButton,
      UpdateVehicleDialog,
      VehicleInspectionDialog,
      VehicleInsuranceDialog,
      TextButton
    },
    props: {
      dataList:{
        type:Array,
        default:()=>{
          return [
            {
              type:'新增'
            },
            {
              type:'申请'
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
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn){
        switch (btn) {
          case 1:
            this.$refs.updateRef.openDialog()
            break
          case 2:
            this.$refs.addInspection.openDialog()
            break
          case 3:
            this.$refs.addInsurance.openDialog()
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
