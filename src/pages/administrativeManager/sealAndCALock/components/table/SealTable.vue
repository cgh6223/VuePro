<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="印章名称" align="center"></el-table-column>
        <el-table-column prop="" label="印章类型" align="center">
          <template slot-scope="scope">
            <template v-if="scope.row.sealType==='执业章'">
              <el-popover trigger="click" placement="top">
                <p>执业章类型: 监理工程师</p>
                <p>工程师名字: 张三</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">执业章</el-tag>
                </div>
              </el-popover>
            </template>
            <template v-else>
              {{scope.row.sealType}}
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="印章取样" align="center">
          <text-button></text-button>
        </el-table-column>
        <el-table-column prop="" label="印章管理人" align="center"></el-table-column>
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
        <el-table-column prop="" label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <seal-dialog ref="upRef" title="修改印章信息"></seal-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import TextButton from '../../../acomponents/TextButton.vue'
  import SealDialog from '../dialog/SealDialog.vue'
  export default {
    components: {
      TableButton,
      TextButton,
      SealDialog
    },
    props: {
      dataList:{
        type:Array,
        default:()=>{
          return [
            {
              sealType:'执业章'
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
