<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
        
				<el-form-item label="取消类型">项目重复</el-form-item>
				<el-form-item label="取消理由">取消理由</el-form-item>

      </el-form>
      <dialog-button reset-btn="false" 
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ContractSelectTemplate from '../../../acomponents/ContractSelectTemplate.vue'
  import ElCascaderTemplate from '../../../acomponents/ElCascaderTemplate.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'

  export default {
    components: {
      DialogButton,
      ContractSelectTemplate,
      ElCascaderTemplate,
      ElSelectTemplate
    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
				form:{},
				formRules:{},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog() {
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
      },
      submitForm() {
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
