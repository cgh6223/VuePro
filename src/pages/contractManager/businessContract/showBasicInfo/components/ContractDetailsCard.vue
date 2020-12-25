<template>
  <div class="body">
    <div class="column">
      <div v-if="$myfunction.isEmpty(dataList)" class="button">
        <el-button  class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog()">上传初稿</el-button>
      </div>
      <div class="card-main">
        <el-table
                :data="dataList"
                style="width: 100%"
                align="center"
                height="500px"
                highlight-current-row
                :header-cell-style="{fontSize:'14px'}">
          <el-table-column type="index" label="版本" align="center"></el-table-column>
          <el-table-column prop="studyoutfile" label="附件" align="center">
            <template slot-scope="scope">
              <download-button :value="scope.row.studyoutfile"></download-button>
            </template>
          </el-table-column>
          <el-table-column prop="changedesc" label="修改要求" align="center"></el-table-column>
          <el-table-column prop="manuscriptfile" label="委托方修改底稿" align="center">
            <template slot-scope="scope">
              <download-button :value="scope.row.manuscriptfile"></download-button>
            </template>
          </el-table-column>
          <el-table-column prop="manuscriptcomplete" label="修改后底稿" align="center">
            <template slot-scope="scope">
              <download-button :value="scope.row.manuscriptcomplete"></download-button>
            </template>
          </el-table-column>
          <el-table-column prop="completedateTime" label="审核完成时间" align="center"></el-table-column>
          <el-table-column prop="" label="合同签订时间" align="center">
            {{contractInfo.concludesigndateTime}}
          </el-table-column>
          <el-table-column prop="completefinalfile" label="盖章扫描件" align="center">
            <template slot-scope="scope">
              <upload-button v-if="scope.row.allstatuscode==='6'"
                             v-model="scope.row.completefinalfile"
                             module-type="ht"
                             file-name="盖章扫描件"
                             :base-id="scope.row.keyid"
                             @getValue="uploadCompletefinalfile(scope.row)"></upload-button>
              <download-button :value="scope.row.completefinalfile"></download-button>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="250px" fixed="right">
            <template slot-scope="scope">
              <template v-if="scope.row.allstatuscode!=='7'">
                <el-button type="text" size="mini" @click="$refs.upRef.openDialog(scope.row)">重新调整</el-button>
                <submit-button v-if="scope.row.allstatuscode==='0'"
                               title="提交审核" @click="submitReport(scope.row)"></submit-button>
                <submit-button v-if="scope.row.allstatuscode==='2'"
                               title="提交盖章" @click="submitSeal(scope.row)"></submit-button>
              </template>
              <status-button code="088" :status="scope.row.allstatuscode"></status-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <add-agreement-dialog ref="addRef" width="250px" @getFormData="networkAddData"></add-agreement-dialog>
    <up-agreement-dialog ref="upRef" @getFormData="networkUpAddData"></up-agreement-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import AddAgreementDialog from './dialog/AddAgreementDialog.vue'
  import UpAgreementDialog from './dialog/UpAgreementDialog.vue'
  import {getContractDetailsCard,delContractDetailsCard,upContractDetailsCard,addContractDetailsCard} from '../../../../../api/webapi-contract.js'
  import {mapState} from 'vuex'
  export default {
    components: {
      AddAgreementDialog,
      UpAgreementDialog
    },
    props: {
    },
    computed:{
      ...mapState('businessContract',{
        contractInfo:'contractInfo'
      }),

    },
    watch: {},
    //数据节点
    data() {
      return {
        dataList:[],
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDataList()
    },
    //自定义函数节点
    methods: {
      flowVersions(){
        let vid=''
        switch (this.contractInfo.contractTypeKeyId) {
          case '402880fa74c3492d0174d98785e3003d'://工程咨询
            vid= 'v_2020_htgl_yw_gczx_htsh'
            break
          case '402880fa74c3492d0174d98812c0003e'://造价咨询
            vid= 'v_2020_htgl_yw_zjzx_htsh'
            break
          case '402880fa74c3492d0174d988b0cb003f':
            vid= 'v_2020_htgl_yw_zbdl_htsh'
            break
          case '402880fa74c3492d0174d988f7670040':
            vid= 'v_2020_htgl_yw_gcjl_htsh'
            break
          case '402880fa74c3492d0174d98936d70041':
            vid= 'v_2020_htgl_yw_xmgl_htsh'
            break
          case '402880fa74c3492d0174d9897c370042':
            vid= 'v_2020_htgl_yw_qgc_htsh'
            break
          case '402880fa74c3492d0174d989b38e0043':
            vid= 'v_2020_htgl_yw_zhkj_htsh'
            break
          case '402880fa74c3492d0174d989e5de0044':
            vid= 'v_2020_htgl_yw_zhkj_htsh'
            break
        }
        return vid
      },
      networkGetDataList(){
        let ref={
          contracttkeyid:this.contractInfo.keyid,
          studyoutTypename:'合同'
        }
        getContractDetailsCard(ref).then(item=>{
          this.dataList=item.data
        })
      },
      networkAddData(formData){
        formData.contracttkeyid=this.contractInfo.keyid
        formData.studyoutTypename='合同'
        addContractDetailsCard(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpAddData(formData){
        formData.allstatuscode=7
        this.networkUpData(this.$myfunction.copyData(formData))
        let ref={
          keyid:'',
          pkeyid:formData.keyid,
          contracttkeyid:this.contractInfo.keyid,
          studyoutTypename:'合同',
          studyoutfile:formData.manuscriptcomplete
        }
        addContractDetailsCard(ref).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData){
        upContractDetailsCard(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      //上传盖章扫描件
      uploadCompletefinalfile(data){
        upContractDetailsCard(data)
      },
      //提交审核
      async submitReport(formData) {
        this.ddform(this.flowVersions(),{
          c:{code:this.contractInfo.contractCode,name:this.contractInfo.contractName},
          fileList:[{title:'合同附件',file:await this.getfile(formData.studyoutfile)}]
        }).then(flowId=>{
          formData.allstatuscode='1'
          upContractDetailsCard(formData).then(item=>{
            this.networkGetDataList()
            this.ddflow(2,3,{
              baseId:formData.keyid,
              baseColumn:'allstatuscode',
              baseUrl:'pro/contractstudyout',
              flowId:flowId,
              fType:'合同'
            })
          })
        })


      },
      //提交盖章()
      submitSeal(data){
        this.$msgbox.prompt('', '盖章份数', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          this.ddform('v_2020_gxgl_tjgz', {
            c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
            i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
            fileList: [
              {title: '盖章附件', file: this.getfile(data.reportsAttachFile)},
            ],
            muitList:[{name:'份数',value:value}]
          }).then(flowId=>{
            data.allstatuecode='4'
            this.networkUpData(data)
            this.ddflow(5,6,{
              baseId:data.keyid,
              baseUrl:'/pro/contractstudyout',
              baseColumn:'allstatuecode',
              flowId:flowId,
              fType:'合同'
            })
          })
        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    .column {
      padding: 0 10px;
      .button {
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        .el-button{
          margin-left: 10px;
        }
      }
      .card-main {
        table {
          position: relative;
          width: 100%;
          tr {
            height: 25px;
            line-height: 25px;
            font-size: 14px;
          }
        }
        .main-head {
          padding: 5px;
          position: relative;
        }
      }

    }
  }
</style>
