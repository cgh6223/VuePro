<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="110px">
        <el-form-item label="网站名称">
					<el-input v-model="form.webSiteName"></el-input>
				</el-form-item>
        <el-form-item label="网站网址">
          <el-input v-model="form.webSiteUrl"></el-input>
				</el-form-item>
        <el-form-item label="用户">
          <el-input v-model="form.webSiteUserName"></el-input>
				</el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.webSitePassWord"></el-input>
				</el-form-item>
        <el-form-item label="发布程序流程图">
          <upload-button v-model="form.webSiteOparationFlowFile"></upload-button>
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
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          webSiteName:'',
          webSiteUrl:'',
          webSiteUserName:'',
          webSitePassWord:'',
          webSiteOparationFlowFile:'',

        },
        formRules: {},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      itemTypeChange(value) {

      },
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
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
