<template>
  <div>
    <el-dialog :title="title" :visible.sync="addDialogVisible" width="30%" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="活动名称" prop="userName">
          <query-input></query-input>
        </el-form-item>
        <el-form-item label="活动类型" prop="userName">
          <el-select-template :data="activityType"></el-select-template>
        </el-form-item>
        <el-form-item label="年份" prop="userName">
          <number-scope></number-scope>
        </el-form-item>
        <el-form-item label="主办方名称" prop="userName">
          <query-input></query-input>
        </el-form-item>
        <el-form-item label="是否签订相关合同" prop="userName">
          <yes-or-no-template></yes-or-no-template>
        </el-form-item>
        <el-form-item label="是否有奖项" prop="userName">
          <yes-or-no-template v-model="form.radio"></yes-or-no-template>
        </el-form-item>
      </el-form>
      <dialog-button resetBtn="true" ok-btn="筛 选"  @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import QueryInput from '../../../acomponents/QueryInput.vue'
  import DatePickerScope from '../../../acomponents/DatePickerScope.vue'
  import YesOrNoTemplate from '../../../acomponents/YesOrNoTemplate.vue'
  import NumberScope from '../../../acomponents/NumberScope.vue'

  export default {
    components: {
      DialogButton,
      ElSelectTemplate,
      QueryInput,
      DatePickerScope,
      YesOrNoTemplate,
      NumberScope
    },
    props: {
      title: '',
      station: {
        type: Object,
        default: () => {
          return {
            organize: [],
          }
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        addDialogVisible: false,
        //表单对象
        form: {
				radio:'',
        },
        //表单验证规则
        formRules: {

        },
        activityType:[
          {id:1,name:'年会'},
          {id:2,name:'旅游'},
          {id:3,name:'拓展'},
          {id:4,name:'节日'},
          {id:5,name:'协会'},
          {id:6,name:'文体'},
          {id:7,name:'公益'},
          {id:8,name:'其他'},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      dialogClose() {
        this.addDialogVisible = false
        this.$refs.formRef.resetFields()
      },
      submitFormData() {
        this.$refs.formRef.validate(valid => {
          if (!valid) return
          this.$emit('getFormData', this.$myfunction.copyData(this.form))
          this.dialogClose()
        })
      },
      openDialog() {
        this.addDialogVisible = true
      }
    }
  }
</script>
<style lang='less' scoped>
  .btn-right {
    float: right;
    margin-right: 0 !important;
  }
</style>
