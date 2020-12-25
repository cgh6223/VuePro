<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="机主" align="center"></el-table-column>
        <el-table-column prop="" label="手机号" align="center"></el-table-column>
        <el-table-column prop="" label="手机管理人" align="center"></el-table-column>
        <el-table-column prop="" label="使用范围" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <information-dialog title="修改手机号信息" ref="upRef"></information-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/PhoneTableButton.vue'
  import InformationDialog from '../dialog/InformationDialog.vue'
  export default {
    components: {
      TableButton,
      InformationDialog
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

</style>
