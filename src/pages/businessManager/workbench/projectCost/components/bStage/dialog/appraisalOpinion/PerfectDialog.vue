<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="鉴定书编号" prop="probeBookCode">
          <el-input v-model="form.probeBookCode"></el-input>
        </el-form-item>
        <el-form-item label="鉴定书出具时间" prop="outPutdateTime">
          <rea-datepicker v-model="form.outPutdateTime"></rea-datepicker>
        </el-form-item>
        <el-form-item label="盖章扫描件" prop="probeBookOutAttchFile">
          <upload-button v-model="form.probeBookOutAttchFile"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="{show:false}" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件

  export default {
    components: {
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
          probeBookCode: '',
          outPutdateTime: '',
          probeBookOutAttchFile: '',
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
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
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
        this.form=this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
