<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="网站名称" prop="websiteName">
          <el-input v-model="form.tradingPlatformname"></el-input>
        </el-form-item>
        <el-form-item label="网站地址" prop="websiteAddress">
          <el-input v-model="form.tradingPlatformUrl"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="websiteAddress">
          <el-input v-model="form.tradingPlatformUser"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="websiteAddress">
          <el-input v-model="form.tradingPlatformpd"></el-input>
        </el-form-item>
        <el-form-item label="办事流程图" prop="websiteAddress">
          <upload-button v-model="form.tradingPlatformopfile"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false" ok-btn="保 存"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ElCascaderTemplate from '../../../acomponents/ElCascaderTemplate.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import ElDataPickerTemplate from '../../../acomponents/ElDataPickerTemplate.vue'
  import YesOrNoTemplate from '../../../acomponents/YesOrNoTemplate.vue'
  import QueryInput from '../../../acomponents/QueryInput.vue'
  import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

  export default {
    components: {
      DialogButton,
      ElCascaderTemplate,
      ElSelectTemplate,
      ElDataPickerTemplate,
      YesOrNoTemplate,
      QueryInput,
      DatePickerScope
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
          tradingPlatformname:'',
          tradingPlatformUrl:'',
          tradingPlatformUser:'',
          tradingPlatformpd:'',
          tradingPlatformopfile:'',
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
