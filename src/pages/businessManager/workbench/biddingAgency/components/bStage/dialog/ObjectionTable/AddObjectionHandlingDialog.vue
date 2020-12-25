<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="澄清或修改方式">
          <rea-select v-model="form.objectionDoWayName"
                      prop="name"
                      label="name"
                      :data="[{id:1,name:'招标人提出'},{id:2,name:'投标人或潜在投标人提出'}]"></rea-select>
        </el-form-item>

      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../../../../acomponents/ElSelectTemplate.vue'

  export default {
    components: {
      DialogButton,
      ElSelectTemplate,
    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },
      data: {},
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          objectionDoWayName: '',
        },
        formRules: {},

      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog() {
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
