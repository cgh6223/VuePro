<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="修改要求">
          <rea-textarea v-model="form.changedesc"></rea-textarea>
        </el-form-item>
        <el-form-item label="修改后底稿">
          <upload-button v-model="form.manuscriptcomplete" module-type="ht" file-name="修改后底稿" :base-id="contractInfo.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="委托方修改底稿">
          <upload-button v-model="form.manuscriptfile" module-type="ht" file-name="委托方修改底稿" :base-id="contractInfo.keyid"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="false" ok-btn="保 存" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {mapState} from 'vuex'
  export default {
    components: {
    },
    props: {
      title: '',
      width: {
        type: String,
        default: '50%'
      }
    },
    watch: {},
    computed:{
      ...mapState('nonBusContract',{
        contractInfo:'contractInfo'
      })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          changedesc:'',
          manuscriptcomplete:'',
          manuscriptfile:''
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
        this.$emit('getFormData', this.$myfunction.copyData(this. form))
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
