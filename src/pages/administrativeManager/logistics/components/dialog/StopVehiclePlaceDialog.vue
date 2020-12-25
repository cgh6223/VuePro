<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">
        <el-form-item label="车位停放点" prop="userName">
          <el-input v-model="form.userName" clearable></el-input>
        </el-form-item>
        <el-form-item label="车位费用" prop="userName">
          <el-input-number></el-input-number>
        </el-form-item>
        <el-form-item label="费用缴纳类型">
          <el-select-template :data="[
						{id:1,name:'月'},
						{id:2,name:'季度'},
						{id:3,name:'半年'},
						{id:4,name:'1年'},
						{id:5,name:'2年'},
						{id:6,name:'3年'},
						{id:7,name:'其他'},
						]"></el-select-template>
        </el-form-item>
        <el-form-item label="车位使用时间" prop="userName">
          <date-picker-scope></date-picker-scope>
        </el-form-item>
        <el-form-item label="车位缴费人" prop="">
          <el-select-template v-model="form.payCostPerson" :data="payCostType"></el-select-template>
        </el-form-item>
        <template v-if="form.payCostPerson===2">
          <el-form-item label="缴费人" prop="userName">
            <query-input></query-input>
          </el-form-item>
        </template>
        <el-form-item>
          <span slot="label"><i class="el-icon-circle-plus-outline" @click="num++"></i>车位使用:</span>
        </el-form-item>
        <template v-for="i in num">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="'使用人'+i">
                <QueryInput></QueryInput>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="'车牌号'+i">
                <QueryInput></QueryInput>
              </el-form-item>
            </el-col>
          </el-row>

        </template>

      </el-form>
      <dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue";
  import ElDataPickerTemplate from "../../../acomponents/ElDataPickerTemplate.vue";
  import DatePickerScope from "../../../acomponents/DatePickerScope.vue";
  import QueryInput from "../../../acomponents/QueryInput.vue";

  export default {
    components: {
      QueryInput,
      ElTextareaTemplate,
      DialogButton,
      ElSelectTemplate,
      ElDataPickerTemplate,
      DatePickerScope
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
        dialogVisible: false,
        num: 1,
        //表单对象
        form: {
          payCostPerson: '',
        },
        //表单验证规则
        formRules: {},
        payCostType: [
          {id: 1, name: '公司缴费'},
          {id: 2, name: '个人缴费'},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      dialogClose() {
        this.dialogVisible = false
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
        this.dialogVisible = true
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
