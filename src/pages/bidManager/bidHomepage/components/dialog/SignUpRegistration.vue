<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="是否已报名" prop="isenlist">
          <com-truefalse v-model="form.isenlist"></com-truefalse>
        </el-form-item>
        <template v-if="form.isenlist">
          <el-form-item label="报名人" prop="">
            <el-input v-model="form.applicant"></el-input>
          </el-form-item>
          <el-form-item label="报名时间" prop="applicantdatetime">
            <rea-datescope value-type="array" v-model="dateScope" type="datetimerange"></rea-datescope>
          </el-form-item>
          <el-form-item label="报名费" prop="">
            <el-row :gutter="5">
              <el-col :span="15">
                <rea-number-input v-model="form.applicantsum"></rea-number-input>
              </el-col>
              <el-col :span="3">
                <el-button type="text"  size="mini" >报销申请</el-button>
              </el-col>
              <el-col :span="5">
                <status-button :title="form.applicantstatus"></status-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="招标文件" prop="">
            <upload-button v-model="form.tenderfile"></upload-button>
          </el-form-item>
          <el-form-item label="招标文件澄清及修改" prop="">
            <upload-button v-model="form.tenderfileclarification"></upload-button>
          </el-form-item>
          <rea-divider title="招标文件分析"></rea-divider>
          <el-form-item label="人员分析" prop="">
            <rea-textarea v-model="form.personanalyse"></rea-textarea>
          </el-form-item>
          <el-form-item label="业绩分析" prop="">
            <rea-textarea v-model="form.achievementanalyse"></rea-textarea>
          </el-form-item>
          <el-form-item label="行政分析" prop="">
            <rea-textarea v-model="form.administrationanalyse"></rea-textarea>
          </el-form-item>
          <el-form-item label="重点分析" prop="">
            <rea-textarea v-model="form.keypointanalyse"></rea-textarea>
          </el-form-item>
          <rea-divider></rea-divider>
          <el-form-item label="是否需要答辩" prop="">
            <com-truefalse v-model="form.isrejoin"></com-truefalse>
          </el-form-item>
          <el-form-item v-if="form.isrejoin" label="答辩人员" prop="">
            <rea-query-input v-model="form.rejoinperson"
                             url="/hr/basicinfo/findall"
                             filter-key="personName"></rea-query-input>
          </el-form-item>
        </template>
      </el-form>
      <dialog-button reset-btn="false" ok-btn="确 定"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'
  import YesOrNoTemplate from '../../../acomponents/YesOrNoTemplate.vue'
  import ElDataPickerTemplate from '../../../acomponents/ElDataPickerTemplate.vue'
  import QueryInput from '../../../acomponents/QueryInput.vue'
  import ElTextareaTemplate from '../../../acomponents/ElTextareaTemplate.vue'

  export default {
    components: {
      ElTextareaTemplate,
      QueryInput,
      DialogButton,
      YesOrNoTemplate,
      ElDataPickerTemplate
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
      'form.isenlist':function (newValue) {
        if (newValue === false) {
          this.form.tenderstatuskeyid='0'
          this.form.applicantdatetime=''
          this.form.applicant=''
          this.form.applicantsum=''
          this.form.applicant_instanceid=''
        }else if (newValue === true) {
          this.form.tenderstatuskeyid='1'
        }
      },
      'form.isrejoin':function (newValue) {
        this.form.rejoinperson=''
      },
      dateScope(newValue){
        if (!this.$myfunction.isEmpty(newValue)) {
          this.form.applicantbegindatetime=newValue[0]
          this.form.applicantenddatetime=newValue[1]
        }
      }
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        dateScope:[],
        form: {
          isenlist: '',
          applicant: '',
          applicantsum: '',
          applicantdatetime: '',
          applicant_instanceid: '',
          applicantstatus: '',
          tenderfile: '',
          tenderfileclarification: '',
          achievementanalyse: '',
          administrationanalyse: '',
          personanalyse: '',
          keypointanalyse: '',
          isrejoin: '',
          rejoinperson: '',
        },
        formRules: {},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
          if (data.applicantbegindatetime !== '' && data.applicantenddatetime !== '') {
            this.dateScope.push(this.form.applicantbegindatetime)
            this.dateScope.push(this.form.applicantenddatetime)
          }
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.form = this.$options.data().form
        this.dateScope=[]
      },
      submitForm() {
        this.form.applicant_instanceid='1'
        this.form.applicantstatus='审核中'
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
