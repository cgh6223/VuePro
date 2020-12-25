<template>
  <!--合同取消-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <carry-out-table></carry-out-table>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import CarryOutTable from '../table/CarryOutTable.vue'
  export default {
    components: {
      DialogButton,
      CarryOutTable
    },
    props: {
      title:'',
      width:{
        type:String,
        default:'50%'
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible:false,

      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data){
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
        this.resetForm()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
