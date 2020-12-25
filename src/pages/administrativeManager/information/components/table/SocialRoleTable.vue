<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="社会角色名称" align="center"></el-table-column>
        <el-table-column prop="" label="任职单位" align="center"></el-table-column>
        <el-table-column prop="" label="相关证明材料" align="center">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="150px">
          <template slot-scope="scope">
           <el-button type="text" size="mini" @click="$refs.upRef.openDialog(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <social-role-dialog title="修改社会角色信息" ref="upRef"></social-role-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/PhoneTableButton.vue'
  import SocialRoleDialog from '../dialog/SocialRoleDialog.vue'
  export default {
    components: {
      TableButton,
      SocialRoleDialog
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
