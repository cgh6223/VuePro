<template>
  <el-dialog :visible.sync="dialogVisible" width="50%" :title="title1">
    <el-form :model="form" ref="formRef" :rules="formRules" label-width="20%">
      <el-form-item label="类型">
        <el-select-template :data="typeOptions" v-model="form.type"></el-select-template>
      </el-form-item>

      <el-form-item label="采购申请理由">
        <el-textarea-template></el-textarea-template>
      </el-form-item>
      <el-form-item label="用途说明">
        <el-textarea-template></el-textarea-template>
      </el-form-item>
      <el-form-item label="申请采购数量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="申请采购预估总金额">
        <el-input></el-input>
      </el-form-item>

    </el-form>

    <dialog-button :resetBtn="{show:false}" okBtn="提 交" @okBtn="submitFormData"
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
