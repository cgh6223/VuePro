<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-form-item label="文件费收款时间">
					<rea-datepicker v-model="form.filesaledateTime"></rea-datepicker>
				</el-form-item>
				<el-form-item label="保证金收款时间">
					<rea-datepicker v-model="form.cashdepositdateTime"></rea-datepicker>
				</el-form-item>
				<el-form-item label="退款时间">
					<rea-datepicker v-model="form.refunddateTime"></rea-datepicker>
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
        form:{
          filesaledateTime:'',
          cashdepositdateTime:'',
          refunddateTime:'',
        },
        formRules:{},

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
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
