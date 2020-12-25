<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">
        <el-form-item label="报告名称" prop="reportsName">
         <el-input v-model="form.reportsName"></el-input>
        </el-form-item>
        <el-form-item label="报告附件" prop="reportsAttachFile">
          <upload-button v-model="form.reportsAttachFile"
                         module-type="xm"
                         file-name="报告附件"
                         :base-id="$store.state.workbench.currentItem.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="合成底稿" prop="reportsSynthDraftFile">
          <upload-button v-model="form.reportsSynthDraftFile"
                         module-type="xm"
                         file-name="报告合成底稿"
                         :base-id="$store.state.workbench.currentItem.keyid"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="{show:false}" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../../../../acomponents/DialogButton.vue'
  import ElDataPickerTemplate from '../../../../../../acomponents/ElDataPickerTemplate.vue'
  import MultipleInput from '../../../../../../acomponents/MultipleInput.vue'
  import ElSelectTemplate from '../../../../../../acomponents/ElSelectTemplate.vue'

  export default {
    components: {
      DialogButton,
      ElDataPickerTemplate,
      MultipleInput,
      ElSelectTemplate
    },
    props: {
      title: '',
      width: {
        type: String,
        default: '50%'
      },
      updateData: ''
    },
    watch: {
      updateData(newValue) {
        this.form = this.$myfunction.copyData(newValue)
      }
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          reportsName:'',
          reportsAttachFile:'',
          reportsSynthDraftFile:'',
        },
        formRules: {},
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
        this.resetForm()
      },
      submitFormData() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      resetForm() {
        this.$refs.formRef.resetFields()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
