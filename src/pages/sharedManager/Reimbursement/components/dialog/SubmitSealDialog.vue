<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef"  label-width="90px">
        <el-form-item label="备注" prop="bz">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 8 }"
            v-model="form.bz"
            clearable
          ></el-input>
        </el-form-item>
         <el-form-item label="报销申请表（PDF）">
          <el-button type="text" @click="attachUp">附件上传</el-button>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false" ok-btn="提 交" @okBtn="submitFormData" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>

import { mapState,mapGetters, mapActions } from "vuex";
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {
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
      const number=(rule, value, cb)=>{
        const regNumber=/^[1-9]\d{0,2}$/
        if (regNumber.test(value)) {
          return cb()
        }
        cb(new Error('至多输入除0开始的3位数'))
      }
      return {
        dialogVisible:false,
        form:{
          bz:''         
        },
        formRules:{
          k1:[
            {
              required: true,
              message: '请输入',
              trigger: 'blur'
            },
            { validator: number, trigger: 'blur' }
          ]
        }
      }
    },
    //生命周期函数节点
    created() {
    },
   
    //自定义函数节点
    methods: {
       ...mapActions({      
        GetAttachment: "flowManager/networkGetAttachment"
      //startFlow: "flowManager/startFlow",     
    }),
      openDialog(){
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
        this.$refs.formRef.resetFields()
      },
      attachUp(){
        this.GetAttachment();
      },
      submitFormData(){
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
