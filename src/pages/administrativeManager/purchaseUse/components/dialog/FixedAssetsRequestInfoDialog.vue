<template>
  <el-dialog :visible.sync="dialogVisible" width="50%" :title="title1">
    <el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">
      <el-form-item label="采购数量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="采购单价">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="采购总价">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="供应商名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="供应商联系人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="固定资产备注">
        <el-textarea-template></el-textarea-template>
      </el-form-item>

    </el-form>

    <dialog-button :resetBtn="{show:false}" okBtn="确 定" @okBtn="submitFormData"
                   @cancelBtn="dialogClose"></dialog-button>
  </el-dialog>
</template>

<script>
  import DialogButton from "../../../acomponents/DialogButton.vue"
  import Station from "../../../acomponents/Station.vue"
  import ElSelectTemplate from "../../../acomponents/ElSelectTemplate.vue"
  import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue"

  export default {
    components: {
      DialogButton,
      Station,
      ElSelectTemplate,
      ElTextareaTemplate
    },
    props: {
      title: {
        type: String,
        dealt: ''
      }
    },
    watch: {
      title(newValue) {
        this.title = newValue
      }
    },
    mounted() {
    },
    data: function () {

      return {

        //父窗口传递的弹窗标题
        title1: this.title,
        //弹窗显示控制
        dialogVisible: false,
        //类型
        typeOptions: [
          //办公家具、电子设备、交通运输设备、项目物品
          {id: 1, name: '办公家具'},
          {id: 2, name: '电子设备'},
          {id: 3, name: 'CA交通运输设备'},
          {id: 3, name: '项目物品锁'},
        ],

        //表单对象
        form: {
          type: '',
        },
        //表单验证规则
        formRules: {}
      }
    },

    methods: {

      //设置弹窗显示
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

<style scoped>

</style>
