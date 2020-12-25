<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="定案表附件" prop="verdictAttachFile">
          <upload-button v-model="form.verdictAttachFile"
                         module-type="xm"
                         file-name="定案表附件"
                         :base-id="$store.state.workbench.currentItem.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="合成底稿" prop="verdictSynthDraftFile">
          <upload-button v-model="form.verdictSynthDraftFile"
                         module-type="xm"
                         file-name="定案表合成底稿"
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
    },
    watch: {

    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          verdictAttachFile:'',
          verdictSynthDraftFile:'',
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
        this.form=this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
