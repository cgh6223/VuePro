<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="名称" align="center"></el-table-column>
        <el-table-column prop="" label="编号" align="center"></el-table-column>
        <el-table-column prop="" label="类型" align="center"></el-table-column>
        <el-table-column prop="" label="附件" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="内容摘要" align="center"></el-table-column>
        <el-table-column prop="" label="签发人" align="center"></el-table-column>
        <el-table-column prop="" label="签发日期" align="center"></el-table-column>
        <el-table-column prop="" label="盖章扫描件" align="center">
          <template slot-scope="scope">
           <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="审核完成时间" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="300px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <read-head-dialog :title="dialogTitle" :type="type?'readHead':'false'" ref="upRef"></read-head-dialog>
      <submit-seal-dialog title="提交盖章" ref="sealRef"></submit-seal-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/DocumentTableButton.vue'
  import ReadHeadDialog from '../dialog/DocumentDialog.vue'
  import SubmitSealDialog from '../dialog/SubmitSealDialog.vue'
  import TextButton from '../../../acomponents/TextButton.vue'
  export default {
    components: {
      TableButton,
      ReadHeadDialog,
      SubmitSealDialog,
      TextButton
    },
    props: {
      type:'',
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
      return {
        dialogTitle:this.type?'修改红头文件':'修改普通文件'
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn,data){
        switch (btn) {
          case 1:
            this.$refs.upRef.openDialog(data)
            break
          case 2:
            break
          case 3:
            this.$refs.sealRef.openDialog(data)
            break
        }
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
