<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="协会名称" prop="userName" label-width="120px">
              <query-input></query-input>
            </el-form-item>
            <el-form-item label="链接" prop="userName" label-width="120px">
              <el-input v-model="form.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="网站使用简要介绍" prop="userName" label-width="120px">
              <el-textarea-template></el-textarea-template>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="用户名" prop="userName" label-width="120px">
              <query-input></query-input>
            </el-form-item>
            <el-form-item label="密码" prop="userName" label-width="120px">
              <el-input v-model="form.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="网站管理员" prop="userName" label-width="120px">
              <query-input></query-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="title">
          <divider></divider>
          <span>手机绑定情况</span>
        </div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="机主" prop="userName">
              <query-input></query-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="userName">
              <query-input></query-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="title">
          <divider></divider>
          <span>相关会费情况<push-button v-model="num"></push-button></span>
        </div>
        <template v-for="i in num">
          <el-row>
            <el-col :span="8">
              <el-form-item :label="i+'、缴纳时间'" prop="userName" >
                <query-input></query-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="会费" prop="userName">
               <el-number></el-number>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="缴纳证明材料" prop="userName">
                <upload-button></upload-button>
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
  import QueryInput from "../../../acomponents/QueryInput.vue";
  import YesOrNoTemplate from "../../../acomponents/YesOrNoTemplate.vue";
  import UploadButton from "../../../acomponents/UploadButton.vue";
  import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue";
  import Divider from "../../../acomponents/Divider.vue";
  import ElNumber from "../../../acomponents/ElNumber.vue";
  import PushButton from "../../../acomponents/PushButton.vue";

  export default {
    components: {
      QueryInput,
      DialogButton,
      ElSelectTemplate,
      YesOrNoTemplate,
      UploadButton,
      ElTextareaTemplate,
      Divider,
      ElNumber,
      PushButton
    },
    props: {
      title: '',
      width:{
        type:String,
        default:'50%'
      },
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
        num:1,
        dialogVisible: false,
        //表单对象
        form: {
          isBindPhone:'',
          isSignContract:'',
          contractName:'',
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
      openDialog(data) {
        if (data !== undefined) {
          this.form=data
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
  .title{
    margin-bottom: 10px;
  }
</style>
