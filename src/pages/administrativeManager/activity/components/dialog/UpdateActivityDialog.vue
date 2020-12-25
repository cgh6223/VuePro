<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="100px">

        <el-row>
          <el-col :span="12">
            <el-form-item label="活动名称" prop="userName">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="主办方名称">
              <query-input></query-input>
            </el-form-item>
            <el-form-item label="活动相关图片资料">
              <upload-button v-model="form.file"
                             module-type="xz"
                             file-name="活动相关图片资料"
                             :base-id="form.keyid"></upload-button>
            </el-form-item>

            <el-form-item label="活动规模">

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动类型" prop="userName">
              <el-select-template :data="activityType"></el-select-template>
            </el-form-item>
            <el-form-item label="活动举办地点">
              <query-input></query-input>
            </el-form-item>
            <el-form-item label="公司活动负责人">
              <query-input></query-input>
            </el-form-item>
            <el-form-item label="活动持续时间">
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="活动举办时间">
              <date-picker-scope></date-picker-scope>
            </el-form-item>

            <el-form-item>
              <span slot="label"><i class="el-icon-circle-plus-outline" @click="num++"></i>协助人员:</span>
            </el-form-item>
            <template v-for="i in num">
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="'协助人员'+i">
                    <QueryInput></QueryInput>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="负责工作">
                    <QueryInput></QueryInput>
                  </el-form-item>
                </el-col>
              </el-row>

            </template>

            <el-form-item>
              <span slot="label"><i class="el-icon-circle-plus-outline" @click="num1++"></i>签订相关合同:</span>
            </el-form-item>
            <template v-for="i in num1">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="合同编号">
                    <QueryInput></QueryInput>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="合同名称">
                    <QueryInput></QueryInput>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="附件上传">
                  </el-form-item>
                </el-col>
              </el-row>

            </template>

            <el-form-item>
              <span slot="label"><i class="el-icon-circle-plus-outline" @click="num2++"></i>获得相关奖项:</span>
            </el-form-item>
            <template v-for="i in num2">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="奖项名称">
                    <QueryInput></QueryInput>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="奖项图片">
                  </el-form-item>
                </el-col>
              </el-row>
            </template>

          </el-col>
        </el-row>

      </el-form>
      <dialog-button resetBtn="false" @okBtn="submitFormData" @cancelBtn="dialogClose()"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../acomponents/ElSelectTemplate.vue'
  import QueryInput from '../../../acomponents/QueryInput.vue'
  import DatePickerScope from '../../../acomponents/DatePickerScope.vue'

  export default {
    components: {
      DialogButton,
      ElSelectTemplate,
      QueryInput,
      DatePickerScope,
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
        num1: 1,
        num2: 1,
        //表单对象
        form: {
          name: ''
        },
        //表单验证规则
        formRules: {},
        activityType: [
          {id: 1, name: '年会'},
          {id: 2, name: '旅游'},
          {id: 3, name: '拓展'},
          {id: 4, name: '节日'},
          {id: 5, name: '协会'},
          {id: 6, name: '文体'},
          {id: 7, name: '公益'},
          {id: 8, name: '其他'},
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
        this.form=this.$options.data().form
      },
      submitFormData() {
        this.$refs.formRef.validate(valid => {
          if (!valid) return
          this.$emit('getFormData', this.$myfunction.copyData(this.form))
          this.dialogClose()
        })
      },
      openDialog(data) {
        if (data) {
          this.form = this.$myfunction.copyData(data)
        }
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
