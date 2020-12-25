<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="申请时间" align="center"></el-table-column>
        <el-table-column prop="" label="申请组织" align="center"></el-table-column>
        <el-table-column prop="" label="申请人" align="center"></el-table-column>
        <el-table-column prop="" label="同行人员" align="center"></el-table-column>
        <el-table-column prop="" label="目的地" align="center"></el-table-column>
        <el-table-column prop="" label="发车时间" align="center"></el-table-column>
        <el-table-column prop="" label="返回公司时间" align="center"></el-table-column>
        <el-table-column prop="" label="用车事由" align="center"></el-table-column>
        <el-table-column prop="" label="陪同师傅" align="center"></el-table-column>
        <el-table-column prop="" label="公里数" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="200px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <kilometre-register-dialog ref="kilometreRef"></kilometre-register-dialog>
      <apply-reimbursement-dialog ref="applyRef"></apply-reimbursement-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/UseVehicleTableButton.vue'
  import KilometreRegisterDialog from '../dialog/KilometreRegisterDialog.vue'
  import ApplyReimbursementDialog from '../dialog/ApplyReimbursementDialog.vue'

  export default {
    components: {
      TableButton,
      KilometreRegisterDialog,
			ApplyReimbursementDialog,
    },
    props: {
      dataList: {
        type: Array,
        default: () => {
          return [
            {
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
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.kilometreRef.openDialog()
            break
          case 2:
					this.$refs.applyRef.openDialog()
            break
          case 3:
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
