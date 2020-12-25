<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="制度类型" prop="userName">
          <el-select-template :data="type"></el-select-template>
        </el-form-item>
        <el-form-item label="名称" prop="userName">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="文件附件" prop="userName">
          <upload-button></upload-button>
        </el-form-item>
        <el-form-item label="内容摘要" prop="userName">
          <el-textarea-template></el-textarea-template>
        </el-form-item>
        <el-form-item label="制度发布日期" prop="userName">
          <el-data-picker-template></el-data-picker-template>
        </el-form-item>
        <el-form-item label="制度执行时间" prop="userName">
          <el-data-picker-template></el-data-picker-template>
        </el-form-item>
        <el-form-item label="制度涉及相关组织" prop="userName">
         <el-input clearable=""></el-input>
        </el-form-item>
      </el-form>
      <dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import QueryInput from "../../../acomponents/QueryInput.vue";
  import UploadButton from "../../../acomponents/UploadButton.vue";
  import TextButton from "../../../acomponents/TextButton.vue";
  import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue";
  import ElDataPickerTemplate from "../../../acomponents/ElDataPickerTemplate.vue";
  import MultipleInput from "../../../acomponents/MultipleInput.vue";

  export default {
    components: {
      QueryInput,
      DialogButton,
      ElSelectTemplate,
      UploadButton,
      TextButton,
      ElTextareaTemplate,
      ElDataPickerTemplate,
      MultipleInput
    },
    props: {
      title: '',
      station: {
        type: Object,
        default: () => {
          return {
            organize: [],
          }
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
        //表单对象
        form: {

        },
        //表单验证规则
        formRules: {

        },
        type:[
          {id:1,name:'公司制度'},
          {id:2,name:'部门制度'},
          {id:3,name:'其他制度'},
        ],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      dialogClose() {
        this.dialogVisible = false
        this.$refs.formRef.resetFields()
      },
      submitFormData() {
        this.$refs.formRef.validate(valid => {
          if (!valid) return
          this.$emit('getFormData', this.$myfunction.copyData(this.form))
          this.dialogClose()
        })
      },
      openDialog(data) {
        if (data !== undefined) {
          this.form=data
        }
        this.dialogVisible = true
      }
    }
  }
</script>
<style lang='less' scoped>
  .btn-right {
    float: right;
    margin-right: 0 !important;
  }
</style>
