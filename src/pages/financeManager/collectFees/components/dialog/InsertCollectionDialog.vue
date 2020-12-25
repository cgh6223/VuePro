<template>
  <el-dialog
          :visible.sync="dialogVisible"
          width="30%"
          :title="title">
    <el-form :model="form" ref="formRef" :rules="formRules" label-width="80px">
      <el-form-item label="收款时间">
        <!-- <el-date-picker v-model="form.collectiondateTime" type="date" placeholder="请选择日期"> -->
          <rea-datepicker v-model="form.collTime"></rea-datepicker>
        </el-date-picker>
      </el-form-item>

      <el-form-item label="付款类型">
        <el-select v-model="form.sumType" placeholder="请选择">
          <el-option label="公账" value="company"></el-option>
          <el-option label="现金" value="cash"></el-option>

        </el-select>
      </el-form-item>

      <el-form-item label="付款人">
        <el-input placeholder="请输入" v-model="form.payer"></el-input>
      </el-form-item>

      <el-form-item label="收款金额">
        <el-input aria-placeholder="请输入整数" v-model="form.sumMoney"></el-input>
      </el-form-item>
      <el-form-item label="收款回执单">
        <upload-button @click="uploadFile"></upload-button>
      </el-form-item>

    </el-form>

    <dialog-button resetBtn="false" ok-btn="保 存" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>

  </el-dialog>
</template>

<script>
  import DialogButton from "../../../acomponents/DialogButton.vue"
  import UploadButton from "../../../acomponents/UploadButton.vue"

  export default {
    components: {
      DialogButton,
      UploadButton
    },
    props: {
      title: {
        type: String,
        dealt: ''
      }
    },
    watch: {
      title(newValue) {
        this.title1 = newValue
      }
    },
    mounted() {
      //this.title=this.title1
    },
    data() {

      return {
        //父窗口传递的弹窗标题
        title1: '',
        //弹窗显示控制
        dialogVisible: false,
        //表单对象
        form: {
          flowStatus:"有"          
        },
        //表单验证规则
        formRules: {
          date: [
            {
              required: true,
              message: "请选择日期",
              tigger: 'blur'
            }
          ],
          type: [
            {
              required: true,
              message: '请选择付款类型',
              tigger: 'blur'
            }
          ],
          customer: [
            {
              required: true,
              message: '请输入付款人姓名',
              tigger: 'blur'
            }
          ],
          money: [
            {
              required: true,
              message: '请输入金额',
              tigger: 'blur'
            }
          ]
        }
      }
    },
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
      },
      uploadFile(){
        this.$message.success("ok");
      }
    }
  }
</script>

<style scoped>

</style>
