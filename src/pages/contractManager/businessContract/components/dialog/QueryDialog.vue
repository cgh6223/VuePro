<template>
  <!--高级查询对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="合同名称" prop="contractName">
              <el-input v-model="form.contractName" clearable></el-input>
            </el-form-item>
            <el-form-item label="客户名称" prop="customerName">
              <el-input v-model="form.customerName" clearable></el-input>
            </el-form-item>
            <el-form-item label="建筑安装工程费" prop="installsum" >
              <com-numberscope v-model="form.installsum"></com-numberscope>
            </el-form-item>
            <el-form-item label="合同签订时间" prop="concludesigndateTime" >
              <rea-datescope value-type="array" v-model="form.concludesigndateTime"></rea-datescope>
            </el-form-item>
            <el-form-item label="是否缴纳履约（风险）保证金" prop="isgather" label-width="200px">
              <com-truefalse v-model="form.isgather"></com-truefalse>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="合同编号" prop="contractCode">
              <el-input v-model="form.contractCode" clearable></el-input>
            </el-form-item>
            <el-form-item label="项目总投资" prop="projectSum">
              <com-numberscope v-model="form.projectSum"></com-numberscope>
            </el-form-item>
            <el-form-item label="合同酬金金额" prop="contractSum">
              <com-numberscope v-model="form.contractSum"></com-numberscope>
            </el-form-item>
            <el-form-item label="监理工期" prop="proTimeLimit">
              <com-numberscope v-model="form.proTimeLimit"></com-numberscope>
            </el-form-item>
            <el-form-item label="合同上公司项目负责人" prop="contractSellerPerson" label-width="130px">
              <el-input v-model="form.contractSellerPerson" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="总监理工程师" prop="enPersonName">
          <el-input v-model="form.enPersonName" clearable></el-input>
        </el-form-item>
      </el-form>
      <dialog-button ok-btn="筛 选" @resetBtn="resetForm" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
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
      return {
        dialogVisible:false,
        form:{
          contractName:'',
          customerName:'',
          installsum:[],
          concludesigndateTime:[],
          isgather:'',
          contractCode:'',
          projectSum:[],
          contractSum:[],
          proTimeLimit:[],
          contractSellerPerson:'',
          enPersonName:'',
        },
        formRules:{},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(){
        this.dialogVisible=true
      },
      dialogClose(){
        this.dialogVisible=false
      },
      submitFormData(){
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      resetForm(){
        this.$refs.formRef.resetFields()
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
