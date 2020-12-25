<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
        <el-form-item label="项目名称" prop="">
          <el-input v-model="form.projectname"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="业务类型" prop="businessType">
              <rea-select v-model="form.vocationaltypekeyid"
                          :data="businessType"
                          @getLabel="item=>{form.vocationaltypename=item}"></rea-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item prop="businessTypeList" label-width="0">
              <rea-select v-if="form.vocationaltypekeyid==='402880fa74c3492d0174d98cf77a0046'"
                          v-model="vocationaltypekeyid"
                          :data="businessType.filter((item,index)=>{return index<5})"
                          multiple
                          @getLabel="item=>{vocationaltypename=item}"></rea-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="项目业主" prop="">
          <rea-query-input v-model="form.proprietor"
                           url="crm/consumer/findall"
                           filter-key="customerName"
                           unmatched
                           @getObject="item=>{proprietorid=item.keyid}"></rea-query-input>
        </el-form-item>
        <el-form-item label="招标人" prop="">
          <rea-query-input v-model="form.tenderee"></rea-query-input>
        </el-form-item>
        <el-form-item label=" 负责人" prop="">
          <el-input v-model="form.tendereeleading"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="">
          <el-input v-model="form.tendereeleadingphone"></el-input>
        </el-form-item>
        <el-form-item label="招标代理机构" prop="">
          <rea-query-input v-model="form.biddingagency"
                           url="pro/taorganization/findall"
                           filter-key="orgName"
                           @getObject="item=>{
                             form.biddingagencyleading=item.orgPerson
                             form.biddingagencyleadingphone=item.orgPhone
                           }"></rea-query-input>
        </el-form-item>
        <el-form-item label="负责人" prop="">
          <el-input v-model="form.biddingagencyleading"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="">
          <el-input v-model="form.biddingagencyleadingphone"></el-input>
        </el-form-item>
        <el-form-item label="相关网站截图上传" prop="">
          <upload-button v-model="form.webimgfile" module-type="tb" file-name="相关网站截图上传" :base-id="form.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="网站链接" prop="">
          <el-input v-model="form.weburladdress"></el-input>
        </el-form-item>
        <el-form-item label="是否进交易中心" prop="accesstradingcentre">
          <com-truefalse v-model="form.accesstradingcentre"></com-truefalse>
        </el-form-item>
        <el-form-item v-if="form.accesstradingcentre" label="交易中心名称" prop="">
          <el-input v-model="form.tradingcentrename"></el-input>
        </el-form-item>
        <el-form-item label="开标地点" prop="">
          <el-input v-model="form.placebidopening"></el-input>
        </el-form-item>
        <el-form-item label="报名时间" prop="">
          <rea-datescope value-type="array" v-model="dateScope" type="datetimerange"></rea-datescope>
        </el-form-item>
        <el-form-item label="报名延期" prop="">
          <rea-datepicker v-model="form.applicantdelaydateTime" type="datetime"></rea-datepicker>
        </el-form-item>
        <el-form-item label="开标时间" prop="">
          <rea-datepicker v-model="form.bidopeningdateTime" type="datetime"></rea-datepicker>
        </el-form-item>
        <el-form-item label="招标文件" prop="">
          <upload-button v-model="form.tenderfile" module-type="tb" file-name="招标文件" :base-id="form.keyid"></upload-button>
        </el-form-item>
        <el-form-item label="招标文件澄清及修改" prop="">
          <upload-button v-model="form.tenderfileclarification" module-type="tb" file-name="招标文件澄清及修改" :base-id="form.keyid"></upload-button>
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
        <el-row>
          <el-col :span="10">
            <el-form-item label="是否需要答辩" prop="">
              <com-truefalse v-model="form.isrejoin"></com-truefalse>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item v-if="form.isrejoin" label="答辩人员" prop="">
              <rea-query-input v-model="form.rejoinperson"
                               url="/hr/basicinfo/findall"
                               filter-key="personName"></rea-query-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <dialog-button reset-btn="false" ok-btn="确 定"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import  {mapActions} from 'vuex'

  export default {
    components: {
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
      'form.vocationaltypekeyid':function(newValue){
        this.vocationaltypekeyid=''
        this.vocationaltypename=''
      },
      'form.accesstradingcentre':function (newValue) {
        if (!newValue) {
          this.form.tradingcentrename=''
        }
      },
      'form.isrejoin':function (newValue) {
        if (newValue === false) {
          this.form.rejoinperson=''
        }
      },
      proprietorid (newValue) {
        if (!this.$myfunction.isEmpty(newValue)) {
          this.form.existingclients=true
        }else {
          this.form.existingclients=false
        }
      },
      dateScope(newValue){
        if (!this.$myfunction.isEmpty(newValue)) {
          this.form.applicantbegindatetime=newValue[0]
          this.form.applicantenddatetime=newValue[1]
        }
      },
      'form.applicantdelaydateTime':function (newValue) {
        //this.form.applicantenddatetime=newValue
      }
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        dateScope:[],//报名时间
        proprietorid:'',//业主id
        vocationaltypekeyid:'',
        vocationaltypename:'',
        form:{
          vocationaltypekeyid:'',
        },
        formRules:{},
        bidModality:[],
        businessType:[],
        bidPart:[]
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetSelectByCode('TYPE-015').then(item=>{
        this.businessType=item
      })
      this.networkGetCascaderByCode('TYPE-042').then(item=>{
        this.bidPart=item
      })
      this.networkGetSelectByCode('TYPE-041').then(item=>{
        this.bidModality=item
      })
    },
    //自定义函数节点
    methods: {
      ...mapActions('loadType',{
        networkGetSelectByCode:'networkGetSelectByCode',
        networkGetCascaderByCode:'networkGetCascaderByCode',
      }),
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
        this.form=this.$options.data().form
        this.dateScope=[]
      },
      submitForm() {
        let form=this.$myfunction.copyData(this.form)
        if (!this.$myfunction.isEmpty(this.vocationaltypekeyid)) {
          form.vocationaltypename=this.vocationaltypename
          form.vocationaltypekeyid=this.vocationaltypekeyid
        }
        this.$emit('getFormData',form)
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
