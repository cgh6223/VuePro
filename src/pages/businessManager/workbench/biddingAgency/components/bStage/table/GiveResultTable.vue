<template>
  <div>
    <div>
      <head-right-button @click="$refs.addRef.openDialog()" title="新增通知书"></head-right-button>
    </div>
    <div>
      <el-table :data="dataList"
                highlight-current-row
                :header-cell-style="{fontSize:'10px'}">
        <el-table-column prop="createddateTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="noticeFile" label="附件" align="center"></el-table-column>
        <el-table-column prop="finalresult" label="是否为最终版" align="center">
          <template slot-scope="scope">
            <switch-button prop="finalresult" :data="scope.row" @change="networkUpData"></switch-button>
          </template>
        </el-table-column>
        <el-table-column prop="openingbidddateTime" label="开标时间" align="center"></el-table-column>
        <el-table-column prop="orgName" label="入选单位" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p v-for="item in scope.row.orgName.split(',')">单位：{{item}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="signNoticeFile" label="盖章扫描件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.signNoticeFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="disdateTime" label="通知书发出时间" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="$refs.perfectRef.openDialog(scope.row)">完善通知书信息</el-button>
            <submit-button v-if="scope.row.allstatuscode!=='1'" title="提交审核"
                           @click="submitExamine(scope.row)"></submit-button>
            <submit-button title="提交盖章" @click="submitSeal(scope.row)"></submit-button>
            <status-button code="088" :status="scope.row.allstatuscode"></status-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <add-notice-dialog title="新增通知书" width="30%" ref="addRef" @getFormData="networkAddData"></add-notice-dialog>
      <add-notice-dialog title="修改通知书" width="30%" ref="updateRef" @getFormData="networkUpData"></add-notice-dialog>
      <perfect-notice-dialog title="完善通知书信息" width="30%" ref="perfectRef"
                             @getFormData="networkUpData"></perfect-notice-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddNoticeDialog from "../dialog/GiveResultTable/AddNoticeDialog.vue"
  import PerfectNoticeDialog from "../dialog/GiveResultTable/PerfectNoticeDialog.vue"


  import {mapState} from 'vuex'
  import {
    getNoticeBook,
    addNoticeBook,
    upNoticeBook,
    delNoticeBook
  } from '../../../../../../../api/workbench/webapi-biddingAgency.js'

  export default {
    components: {
      HeadRightButton,
      AddNoticeDialog,
      PerfectNoticeDialog,

    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },
      data: {},
    },
    watch: {},
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        dataList: [],
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
          typeCode: 'giveresultbook'
        }
        getNoticeBook(ref).then(item => {
          this.dataList = item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid = this.currentItem.keyid
        formData.typeCode = 'giveresultbook'
        addNoticeBook(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        upNoticeBook(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkDelData(formData) {
        delNoticeBook(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      async submitExamine(data) {
        this.ddform('v_2020_ywgl_zbdl_tzssh', {
          c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
          i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
          fileList: [
            {title: '通知书', file: await this.getfile(data.noticeFile)},
          ],
          muitList: [{name: '备注', value: ''}]
        }).then(flowId => {
          data.allstatuecode = '1'
          this.networkUpData(data)
          this.ddflow(2, 3, {
            baseId: data.keyid,
            baseUrl: '/pro/tabidding',
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
        }).then(({value}) => {
          this.ddform('v_2020_gxgl_tjgz', {
            c: {code: this.currentItem.contractCode, name: this.currentItem.contractName},
            i: {code: this.currentItem.projectCode, name: this.currentItem.projectName},
            fileList: [
              {title: '盖章附件', file: this.getfile(data.noticeFile)},
            ],
            muitList: [{name: '份数', value: value}]
          }).then(flowId => {
            data.allstatuecode = '4'
            this.networkUpData(data)
            this.ddflow(5, 6, {
              baseId: data.keyid,
              baseUrl: '/pro/tabidding',
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
