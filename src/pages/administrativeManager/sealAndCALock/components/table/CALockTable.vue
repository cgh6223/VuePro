<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="CA锁名称" align="center"></el-table-column>
        <el-table-column prop="" label="CA锁类型" align="center"></el-table-column>
        <el-table-column prop="" label="CA锁管理人" align="center"></el-table-column>
        <el-table-column prop="" label="CA锁使用的网站" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>网站名称：CA锁官方网站</p>
              <p>链接：<a href="https://www.calock.com">https://www.calock.com</a></p>
              <p>用户名：hd123456</p>
              <p>密码：123456</p>
              <p>网站简要介绍：</p>
              <p>机主：张三</p>
              <p>手机号：18028237075</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="印章启用时间" align="center"></el-table-column>
        <el-table-column prop="" label="启用相关证明材料" align="center">
          <text-button></text-button>
        </el-table-column>
        <el-table-column prop="" label="印章停用时间" align="center"></el-table-column>
        <el-table-column prop="" label="停用相关证明材料" align="center">
          <text-button></text-button>
        </el-table-column>
        <el-table-column prop="" label="是否产生使用费" align="center">
          <template slot-scope="scope">
            <template v-if="scope.row.isMoney==='是'">
              <el-popover trigger="click" placement="top">

                <p> 使用费: 3200</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">是</el-tag>
                </div>
              </el-popover>
            </template>
            <template v-else>
              否
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="印章使用有效期" align="center"></el-table-column>

        <el-table-column prop="" label="绑定手机情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">

              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="200px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <ca-lock-dialog title="修改CA锁信息" ref="upRef"></ca-lock-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import TextButton from '../../../acomponents/TextButton.vue'
  import CaLockDialog from '../dialog/CALockDialog.vue'

  export default {
    components: {
      TableButton,
      TextButton,
      CaLockDialog
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
            this.$refs.upRef.openDialog()
            break
          case 2:
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
