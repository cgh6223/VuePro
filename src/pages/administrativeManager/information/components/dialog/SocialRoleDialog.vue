<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" @close="dialogClose()">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
        <el-form-item label="社会角色名称" prop="userName" label-width="120px">
          <query-input></query-input>
        </el-form-item>
        <el-form-item label="任职单位" prop="userName" label-width="120px">
          <query-input></query-input>
        </el-form-item>
        <el-form-item label="相关证明材料" prop="userName" label-width="120px">
          <upload-button></upload-button>
        </el-form-item>
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
  import ElTextareaTemplate from "../../../acomponents/ElTextareaTemplate.vue";
  import UploadButton from "../../../acomponents/UploadButton.vue";

  export default {
    components: {
      QueryInput,
      DialogButton,
      ElSelectTemplate,
      ElTextareaTemplate,
      UploadButton
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
        //表单对象
        form: {

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
				if(data!==undefined){
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
</style>
