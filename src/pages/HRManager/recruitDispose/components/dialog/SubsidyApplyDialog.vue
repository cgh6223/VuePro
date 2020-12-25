<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
             @close="dialogClose">
    <el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">
      <el-form-item label="申请金额">
        <rea-number-input v-model="form.applyMoney"></rea-number-input>
      </el-form-item>
      <el-form-item label="申请理由">
        <rea-textarea v-model="form.applyReason"></rea-textarea>
      </el-form-item>
    </el-form>
    <dialog-button reset-btn="false" ok-btn="提 交" @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
  </el-dialog>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import BecomeApplyTable from '../table/BecomeApplyTable.vue'

  export default {
    components: {
      BecomeApplyTable
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
        form: {
          applyMoney: '',
          applyReason: '',
        },
        formRules: {},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (data) {
          Object.assign(this.form,data)
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.form = this.$options.data().form
      },
      submitForm() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
