<template>
  <div class="body">
    <div class="button">
      <head-right-button title="新增签证" @click="$refs.addRef.openDialog()"></head-right-button>
    </div>
    <div class="table">
      <el-table ref="tableRef"
                :data="dataList"
                style="width: 100%"
                align="center"
                height="7rem"
                highlight-current-row
                :header-cell-style="{fontSize:'10px'}">
        <el-table-column prop="createddateTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="changeWorkFile" label="工程签证材料" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.changeWorkFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="auditdateTime" label="审核完成时间" align="center"></el-table-column>
        <el-table-column prop="changeWorkAttchFile" label="工程签证材料扫描件" align="center">
          <template slot-scope="scope">
            <upload-button v-model="scope.row.changeWorkAttchFile"
                           module-type="xm"
                           file-name="工程签证材料扫描件"
                           :base-id="currentItem.keyid"
                           @getValue="networkUpData"></upload-button>
            <download-button :value="scope.row.changeWorkAttchFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="250px">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <submit-button v-if="scope.row.allstatuscode==='0'" title="提交审核" @click="submitExamine(scope.row)"></submit-button>
            <submit-button title="提交盖章" @click="submitSeal(scope.row)"></submit-button>
            <status-button code="088" :status="scope.row.allstatuscode"></status-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <add-dialog ref="addRef" title="新增变更材料"></add-dialog>
      <add-dialog ref="updateRef" title="修改变更材料"></add-dialog>
      <scan-file-dialog ref="scanRef" title="扫描件上传"></scan-file-dialog>
      <add-dialog ref="addRef" title="新增索赔材料" width="30%" @getFormData="networkAddData"></add-dialog>
      <add-dialog ref="updateRef" title="修改索赔材料" width="30%" @getFormData="networkUpData"></add-dialog>
      <scan-file-dialog ref="scanRef" title="扫描件上传" width="30%" @getFormData="networkUpData"></scan-file-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"

  import AddDialog from '../dialog/projectVisaCheck/AddDialog.vue'
  import ScanFileDialog from '../dialog/projectVisaCheck/ScanFileDialog.vue'

  import {mapState} from 'vuex'
  import {getProject,addProject,upProject} from '../../../../../../../api/workbench/webapi-projectCost.js'

  export default {
    components: {
      HeadRightButton,

      AddDialog,
      ScanFileDialog,

    },
    props: {},
    watch: {},
    computed:{
      ...mapState('workbench',{
        currentItem:'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        dataList: []
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      networkGetDatas() {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typecode:'visacheck'
        }
        getProject(ref).then(item => {
          this.dataList = item.data
        })
      },
      networkAddData(formData) {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typecode:'visacheck'
        }
        Object.assign(formData, ref)
        addProject(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      networkUpData(formData) {
        upProject(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      async submitExamine(data) {
        this.ddform('v_2020_ywgl_gczj_qt', {
          c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
          i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
          fileList: [
            {title: '审核附件', file:await this.getfile(data.changeWorkFile)},
          ],
          muitList:[{name:'备注',value:data.needDesc}]
        }).then(flowId=>{
          data.allstatuecode='1'
          this.networkUpData(data)
          this.ddflow(2,3,{
            baseId:data.keyid,
            baseUrl:'/pro/ccopchangework',
            baseColumn:'allstatuecode',
            flowId:flowId,
            fType:'其他'
          })
        })
      },
      submitSeal(data){
        this.$msgbox.prompt('', '盖章份数', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ({value}) => {
          this.ddform('v_2020_gxgl_tjgz', {
            c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
            i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
            fileList: [
              {title: '盖章附件', file:await this.getfile(data.changeWorkFile)},
            ],
            muitList:[{name:'份数',value:value}]
          }).then(flowId=>{
            data.allstatuecode='4'
            this.networkUpData(data)
            this.ddflow(5,6,{
              baseId:data.keyid,
              baseUrl:'/pro/ccopchangework',
              baseColumn:'allstatuecode',
              flowId:flowId,
              fType:'其他'
            })
          })
        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    .button {
      .column {
        height: 45px;
        width: 50%;
        float: left;
      }
    }
  }
</style>
