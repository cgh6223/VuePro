<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="补充鉴定意见书" prop="name">
          <el-button type="text">附件上传</el-button>
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
  import ElSelectTemplate from '../../../../../../acomponents/ElSelectTemplate.vue'
  import MultipleInput from '../../../../../../acomponents/MultipleInput.vue'

  export default {
    components: {
      DialogButton,
      ElDataPickerTemplate,
      ElSelectTemplate,
      MultipleInput
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
        },
        formRules: {},
        type:[
          {id:1,name:'书面形式答复质询'},
          {id:2,name:'出庭或出场接收质询'},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (data !== undefined) {
          this.form = data
        }
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
