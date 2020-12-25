<template>
  <!--单合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item :label="data.documentTypeListName?data.documentTypeListName:'初稿'">
          <upload-button v-model="form.studyoutfile"
                         :file-name="data.documentTypeListName?data.documentTypeListName:'初稿'"
                         module-type="ht"
                         :base-id="contractInfo.keyid"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="false" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
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
    computed:{
      ...mapState('nonBusContract',{
        contractInfo:'contractInfo'
      })
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          studyoutfile:''
        },
        formRules: {},
        data:{}
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (data) {
          this.data=data
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
        this.form=this.$options.data().form
        this.data={}
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
