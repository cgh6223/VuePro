<template>
  <!--合同取消-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="合同酬金" prop="contractSum">
          <rea-number-input v-model="form.contractSum" readonly></rea-number-input>
        </el-form-item>
        <el-form-item label="实际收入" prop="officialReceipts">
          <rea-number-input v-model="form.officialReceipts"></rea-number-input>
        </el-form-item>
        <el-form-item v-if="form.contractSum!=form.officialReceipts" label="差异描述" prop="differenceDesc">
          <rea-textarea v-model="form.differenceDesc"></rea-textarea>
        </el-form-item>
      </el-form>
      <dialog-button :reset-btn="{show:false}" ok-btn="提 交" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  export default {
    components: {
      DialogButton
    },
    props: {
      title:'',
      width:{
        type:String,
        default:'50%'
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible:false,
        form:{
          contractSum:'',
          officialReceipts:'',
          differenceDesc:'',
        },
        formRules:{
          contractSum:[
            {
              required: true,
              message: '请输入合同金额',
              trigger: 'blur'
            }
          ],
          officialReceipts:[
            {
              required: true,
              message: '请输入实际金额',
              trigger: 'blur'
            }
          ],
          differenceDesc:[
            {
              required: true,
              message: '请填写差异原因',
              trigger: 'blur'
            }
          ]
        },
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data){
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
        }
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
        this.resetForm()
      },
      submitFormData(){
        this.$refs.formRef.validate(valid => {
          if (!valid) return
          this.$emit('getFormData', this.$myfunction.copyData(this.form))
          this.dialogClose()
        })
      },
      resetForm(){
        this.$refs.formRef.resetFields()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
