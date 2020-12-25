<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">
        <el-form-item label="合同类型" prop="">
          <rea-select v-model="form.contractTypeCode" :data="contractType" prop="id" label="name"></rea-select>
        </el-form-item>
        <el-form-item label="合同编号" prop="">
          <rea-query-input v-model="form.contractCode"
                           url="agr/busicontractbase/findwhere"
                           :filter-obj="{contractTypeKeyId:form.contractTypeCode}"
                           filter-key="contractCode"
                           @getObject="item=>{
                           form.contractName=item.contractName
                           form.contractKeyid=item.keyid
                           }"></rea-query-input>
        </el-form-item>
        <el-form-item label="合同名称" prop="">
          <el-input v-model="form.contractName" readonly></el-input>
        </el-form-item>
        <el-form-item label="专业工程分类" prop="">
          <rea-select v-model="form.projectMajorCode"
                      :data="projectConsultMajorProject.list"
                      @getLabel="item=>{form.projectMajorName=item}"></rea-select>
        </el-form-item>
       <!-- <el-form-item label="项目编号" prop="projectCode">
          <el-input v-model="form.projectCode"></el-input>
        </el-form-item>-->
        <el-form-item label="项目名称" prop="">
          <el-input v-model="form.projectName"></el-input>
        </el-form-item>
        <el-form-item label="决策类型" prop="">
          <rea-select v-model="form.projectPolicyCode"
                      :data="projectConsultDecisionType.list"
                      @getLabel="item=>{form.projectPolicyName=item}"></rea-select>
        </el-form-item>
        <el-form-item label="项目类型" prop="projectTypeCode">
          <rea-cascader v-model="form.projectTypeCode"
                        :data="projectConsultItemType.list"
                        @getLabel="item=>{form.projectTypeName=item}"></rea-cascader>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ContractSelectTemplate from '../../../acomponents/ContractSelectTemplate.vue'
  import ElCascaderTemplate from '../../../acomponents/ElCascaderTemplate.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')
  export default {
    components: {
      DialogButton,
      ContractSelectTemplate,
      ElCascaderTemplate,
      ElSelectTemplate
    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      }
    },
    watch: {
      'form.contractCode':function (newValue) {
        //this.form.projectCode=newValue
      },
      'form.contractTypeCode':function (newValue) {
        let ref=this.contractType.find(item=>{
          return item.id===newValue
        })
        if (!this.$myfunction.isEmpty(ref)) {
          this.form.contractTypeName=ref.value
        }

      }
    },
    computed:{
        ...mapState({
          projectConsultMajorProject:'projectConsultMajorProject',
          projectConsultDecisionType:'projectConsultDecisionType',
          projectConsultItemType:'projectConsultItemType',
        })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form:{
          contractTypeCode:'',
          contractTypeName:'',
          contractKeyid:'',
          contractCode:'',
          contractName:'',
          projectCode:'',
          projectName:'',
          projectPolicyCode:'',
          projectPolicyName:'',
          projectMajorCode:'',
          projectMajorName:'',
          projectStatusKeyId:'0',
          projectStatusName:'备案中',

          contractVocationalTypeKeyId:'402880fa74c3492d0174d45ebe360015',//业务类型编号
          contractVocationalTypeName:'工程咨询',//业务类型名称
        },
        formRules:{},
        contractType:[
          {id:'402880fa74c3492d0174d98785e3003d',name:'单合同',value:'工程咨询合同'},
          {id:'402880fa74c3492d0174d989b38e0043',name:'综合业务',value:'综合业务合同'},
          {id:'402880fa74c3492d0174d9897c370042',name:'全咨业务',value:'全过程咨业合同'},
        ],
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
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
