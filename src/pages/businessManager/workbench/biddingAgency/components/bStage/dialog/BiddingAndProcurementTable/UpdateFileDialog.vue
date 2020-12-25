<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="修改要求">
          <rea-textarea v-model="form.needdesc"></rea-textarea>
        </el-form-item>
        <el-form-item label="委托方修改底稿">
          <upload-button v-model="form.needbasefile"></upload-button>
        </el-form-item>
        <el-form-item label="改后底稿">
          <upload-button v-model="form.needafterfile"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
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
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },
      data:{},
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
        num:1,
        form:{
          needdesc:'',
          needbasefile:'',
          needafterfile:'',
        },
        formRules:{},

      }
    },
    //生命周期函数节点
    created() {},
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
        this.form=this.$options.data().form
      },
      submitForm() {
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
