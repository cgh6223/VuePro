<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="岗位名称" prop="name">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="{show:false}" ok-btn="保 存" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  export default {
    components: {
      DialogButton
    },
    props: {
      title:'',
      width:'',
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible:false,
        form:{
          orgId:'',
          name:''
        },
        formRules:{

        }
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data){
        this.form.orgId=data
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
        this.resetForm()
      },
      submitFormData(){
        if (this.$myfunction.isEmpty(this.form.orgId)) {
          this.$confirm('请选中左边的组织','提示',{
            confirmButtonText: '确定',
            type: 'info'
          }).then(() => {
            this.dialogClose()
          })
        }else {
          this.$emit('getFormData',this.$myfunction.copyData(this.form))
          this.dialogClose()
        }
      },
      resetForm(){
        this.$refs.formRef.resetFields()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
