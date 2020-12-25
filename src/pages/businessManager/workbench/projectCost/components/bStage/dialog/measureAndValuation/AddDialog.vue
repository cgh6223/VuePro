<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item :label="form.prokectmvTypeName+'名称'" prop="name">
          <el-input v-model="form.mvName" clearable></el-input>
        </el-form-item>
        <el-form-item label="GBQ底稿" prop="name">
          <upload-button v-model="form.pGBQDraftFile"
                         module-type="xm"
                         :file-name="form.mvName+'GBQ底稿'"
                         :base-id="$store.state.workbench.currentItem.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="电子表格底稿" prop="name">
          <upload-button v-model="form.electDraftFile"
                         module-type="xm"
                         :file-name="form.mvName+'电子表格底稿'"
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

  export default {
    components: {
      DialogButton
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
          prokectmvTypeName:'',
          mvName:'',
          pGBQDraftFile:'',
          electDraftFile:'',
        },
        formRules: {},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(type) {
        this.form.prokectmvTypeName = type
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
