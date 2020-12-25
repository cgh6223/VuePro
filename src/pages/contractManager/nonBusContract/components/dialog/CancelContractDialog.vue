<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="取消类型" prop="callofftypekeyid">
          <rea-select v-model="form.callofftypekeyid" :data="cancelType.list" @getLabel="item=>{form.callofftypename=item}"></rea-select>
        </el-form-item>
        <el-form-item label="取消原因" prop="calloffdesc">
          <rea-textarea v-model="form.calloffdesc"></rea-textarea>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="{show:false}" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')
  export default {
    components: {

    },
    props: {
      title:'',
      width:{
        type:String,
        default:'50%'
      }
    },
    watch: {},
    computed:{
        ...mapState({
          cancelType:'cancelType'
        })
    },
    //数据节点
    data() {
      return {
        dialogVisible:false,
        form:{
          callofftypekeyid:'',
          callofftypename:'',
          calloffdesc:'',
          contractStatusKeyId:'3',
          contractStatusName:'合同已取消',
        },
        formRules:{},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data){
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
        }
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
        this.resetForm()
      },
      submitFormData(){
        this.form.contractStatusKeyId = '3'
        this.form.contractStatusName = '合同已取消'
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      resetForm(){
        this.form=this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
