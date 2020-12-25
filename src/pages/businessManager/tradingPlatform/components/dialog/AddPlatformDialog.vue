<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
        <el-form-item label="平台名称">
					<el-input v-model="form.tpname"></el-input>
				</el-form-item>
        <el-form-item label="平台网址">
					<el-input v-model="form.tpurl"></el-input>
				</el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.tpaddress"></el-input>
				</el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.tpphone"></el-input>
				</el-form-item>
        <el-form-item label="办事流程图">
          <upload-button v-model="form.tpFlowFile"></upload-button>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input v-model="form.tpBankName"></el-input>
				</el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.tpAccountCode"></el-input>
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
          tpname:'',
          tpurl:'',
          tpaddress:'',
          tpphone:'',
          tpFlowFile:'',
          tpBankName:'',
          tpAccountCode:'',

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
