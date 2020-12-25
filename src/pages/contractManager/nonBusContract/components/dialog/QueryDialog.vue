<template>
  <!--单合同备案对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="合同类型" prop="contractTypename">
              <rea-cascader v-model="form.contractTypename" :data="nonBusConType.list"></rea-cascader>
            </el-form-item>
            <el-form-item label="是否有担保人" prop="isSecurity" label-width="100px">
              <com-truefalse v-model="form.isSecurity"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否有有效期" prop="isExpiryDate" label-width="100px">
              <com-truefalse v-model="form.isExpiryDate"></com-truefalse>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="签署方名称" prop="contractSeller">
              <el-input v-model="form.contractSeller" clearable></el-input>
            </el-form-item>
            <el-form-item label="是否缴纳履约（风险）保证金" prop="isgather" label-width="190px">
              <com-truefalse v-model="form.isgather"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否收取履约（风险）保证金" prop="isdeposit" label-width="190px">
              <com-truefalse v-model="form.isdeposit"></com-truefalse>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <dialog-button ok-btn="筛 选" @resetBtn="resetForm" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')

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
        ...mapState({
          nonBusConType:'nonBusConType',
          isSecurity:'',
          isExpiryDate:'',
          contractSeller:'',
          isgather:'',
          isdeposit:'',
        })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          contractTypename:'',
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
