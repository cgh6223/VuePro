<template>
  <!--框架或入库合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item :label="bookType.name+'意见书'" prop="probeBookFile">
         <upload-button v-model="form.probeBookFile"
                        :base-id="$store.state.workbench.currentItem.keyid"
                        module-type="xm"
                        :file-name="bookType.name+'意见书'"></upload-button>
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
      bookType:{
        type:Object,
        default:()=>{
          return {
            id:'',
            name:''
          }
        }
      },
      width: {
        type: String,
        default: '50%'
      },
      updateData: ''
    },
    watch: {
      updateData(newValue) {
        this.form = this.$myfunction.copyData(newValue)
      }
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          probeBookFile:'',
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
        if (data !== undefined) {
          this.form = this.$myfunction.copyData(data)
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
        this.$refs.formRef.resetFields()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
