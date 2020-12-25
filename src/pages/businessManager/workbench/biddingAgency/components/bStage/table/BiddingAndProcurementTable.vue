<!-- 编制及审核资格预审文件台账 -->
<template>
  <div>
    <div>
      <head-right-button @click="$refs.addFilefRef.openDialog()" title="新增文件"></head-right-button>
    </div>
    <div>
      <el-table :data="dataList"
                highlight-current-row
                :header-cell-style="{fontSize:'10px'}"
                :indent="8"
                row-key="keyid"
                default-expand-all
                :tree-props="{children: 'children',hasChildren: 'isShow'}">
        <el-table-column prop="createddateTime" label="创建时间" align="left" min-width="120"></el-table-column>
        <el-table-column prop="attachFile" label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.attachFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="needdesc" label="修改要求" align="center"></el-table-column>
        <el-table-column prop="needbasefile" label="委托方修改底稿" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.needbasefile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="needafterfile" label="修改后底稿" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.needafterfile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="auditdateTime" label="审核完成时间" align="center"></el-table-column>
        <el-table-column prop="needAttachFile" label="盖章扫描件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.needAttachFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="200" fixed="right">
          <template slot-scope="scope">
            <template v-if="scope.row.allstatuscode!=='7'">
              <el-button type="text" @click="$refs.updateFilefRef.openDialog(scope.row)">重新调整</el-button>
              <el-button type="text" @click="$refs.uploadFilefRef.openDialog()">上传盖章扫描件</el-button>
              <submit-button v-if="scope.row.allstatuscode==='0'" title="提交审核"
                             @click="submitExamine(scope.row)"></submit-button>
              <submit-button title="提交盖章" @click="submitSeal(scope.row)"></submit-button>
            </template>
            <status-button code="088" :status="scope.row.allstatuscode"></status-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <div class="dialog">
      <add-file-dialog title="新增文件" width="30%" ref="addFilefRef" @getFormData="networkAddData"></add-file-dialog>
      <update-file-dialog title="重新调整" width="30%" ref="updateFilefRef"
                          @getFormData="networkAdjustmentData"></update-file-dialog>
      <upload-scanning-dialog title="上传盖章扫描件" width="30%" ref="uploadFilefRef"
                              @getFormData="networkUpData"></upload-scanning-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddFileDialog from "../dialog/BiddingAndProcurementTable/AddFileDialog.vue"
  import UpdateFileDialog from "../dialog/BiddingAndProcurementTable/UpdateFileDialog.vue"
  import UploadScanningDialog from "../dialog/BiddingAndProcurementTable/UploadScanningDialog.vue"
  import {mapState} from 'vuex'
  import {
    getPretrial,
    addPretrial,
    upPretrial,
    delPretrial
  } from '../../../../../../../api/workbench/webapi-biddingAgency.js'


  export default {
    components: {
      HeadRightButton,
      AddFileDialog,
      UpdateFileDialog,
      UploadScanningDialog,
    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },

    },
    watch: {
      dataList(newValue) {
        let arr = newValue.filter(item => {
          return item.pkeyid !== ''
        })
        this.maxOrder = newValue.length - arr.length
      }
    },
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        dataList: [],
        maxOrder: 0,
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDataList()
    },
    //自定义函数节点
    methods: {
      networkGetDataList() {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          publicityTypeKeyid: 'biddingandprocurement',
          pkeyid:'0000'
        }
        getPretrial(ref).then(item => {
          this.treeTableDataFormat(item.data,'pro/taprequalification/findwhere').then(item=>{
            this.dataList =item
          })
        })
      },
      networkAddData(formData) {
        formData.projectKeyid = this.currentItem.keyid
        formData.ordernum = this.maxOrder + 1
        formData.publicityTypeKeyid = 'biddingandprocurement'
        formData.pkeyid='0000'
        addPretrial(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        upPretrial(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkDelData(formData) {
        delPretrial(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkAdjustmentData(formData) {
        formData.allstatuscode='7'
        formData.allstatusname='true'
        upPretrial(formData).then(()=>{
          let ref={
            projectKeyid: this.currentItem.keyid,
            publicityTypeKeyid: 'biddingandprocurement',
            pkeyid:formData.keyid,
            attachFile:formData.needafterfile
          }
          addPretrial(ref).then(item => {
            if (item.code === 200) {
              this.$message.success(item.message)
              this.networkGetDataList()
            }
          })
        })

      },
      async submitExamine(data) {
        this.ddform('v_2020_ywgl_zbdl_zgys', {
          c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
          i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
          fileList: [
            {title: '文件', file: await this.getfile(data.attachFile)},
          ],
          muitList: [{name: '备注', value: data.needdesc}]
        }).then(flowId => {
          data.allstatuecode = '1'
          this.networkUpData(data)
          this.ddflow(2, 3, {
            baseId: data.keyid,
            baseUrl: '/pro/tademandpublicity',
            baseColumn: 'allstatuecode',
            flowId: flowId,
            fType: '其他'
          })
        })
      },
      submitSeal(data) {
        this.$msgbox.prompt('', '盖章份数', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ({value}) => {
          this.ddform('v_2020_gxgl_tjgz', {
            c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
            i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
            fileList: [
              {title: '盖章附件', file: await this.getfile(data.attachFile)},
            ],
            muitList: [{name: '份数', value: value}]
          }).then(flowId => {
            data.allstatuecode = '4'
            this.networkUpData(data)
            this.ddflow(5, 6, {
              baseId: data.keyid,
              baseUrl: '/pro/tademandpublicity',
              baseColumn: 'allstatuecode',
              flowId: flowId,
              fType: '其他'
            })
          })
        })

      }
    }
  }
</script>
<style lang='less' scoped>

</style>
