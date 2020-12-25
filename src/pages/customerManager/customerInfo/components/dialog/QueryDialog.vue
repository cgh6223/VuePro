<template>
  <!--高级查询对话框-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">
        <el-form-item label="客户名称" prop="customerName">
          <el-input v-model="form.customerName" clearable></el-input>
        </el-form-item>
        <el-form-item label="所属省市区" prop="region">
          <rea-cascader v-model="form.region" :data="loadCusType.region" prop="label" value-format="label"></rea-cascader>
        </el-form-item>
        <el-form-item label="单位性质" prop="unitNature">
          <rea-select v-model="form.unitNature" :data="loadCusType.unitNature"></rea-select>
        </el-form-item>
        <el-form-item label="是否为一般纳税人" prop="isTaxpayer">
          <com-truefalse v-model="form.isTaxpayer"></com-truefalse>
        </el-form-item>
        <el-form-item label="是否有统一社会信用码" prop="isCreditCode">
          <com-truefalse v-model="form.isCreditCode"></com-truefalse>
        </el-form-item>
        <el-form-item label="服务业务" prop="serviceBusiness">
          <rea-select v-model="form.serviceBusiness" :data="loadCusType.serviceBusiness"></rea-select>
        </el-form-item>
        <el-form-item label="新增客户年份" prop="addCustomYear">
          <rea-datepicker v-model="form.addCustomYear" type="year"></rea-datepicker>
        </el-form-item>
        <el-form-item label="流失客户年份" prop="loseCustomYear">
          <rea-datepicker v-model="form.loseCustomYear" type="year"></rea-datepicker>
        </el-form-item>
      </el-form>
      <dialog-button ok-btn="筛 选" @resetBtn="resetForm" @cancelBtn="dialogClose"
                     @okBtn="submitFormData"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import NumberScope from '../../../acomponents/NumberScope.vue'
  import DatePickerScope from '../../../acomponents/DatePickerScope.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')
  export default {
    components: {
      DialogButton,
      NumberScope,
      DatePickerScope
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
        ...mapGetters({
          loadCusType:'loadCusType'
        })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          customerName: '',
          region:'',
          unitNature:'',
          isTaxpayer:'',
          isCreditCode: '',
          serviceBusiness: '',
          addCustomYear: '',
          loseCustomYear: '',
        },
        formRules: {},
        //省市区存储对象
        provinces: [
          {
            keyid:1,
            value:1,
            label:'贵州省',
            children:[
              {keyid:1.1,value:1.1,label:'贵阳市',children:[]},
              {keyid:1.2,value:1.2,label:'遵义市',children:[]},
              {keyid:1.3,value:1.3,label:'毕节市',children:[]},
            ]
          }
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
