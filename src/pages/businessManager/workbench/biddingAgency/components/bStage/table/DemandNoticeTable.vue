<template>
  <div>

    <div>
      <head-right-button @click="$refs.addRef.openDialog()" title="新增编制及发布"></head-right-button>
    </div>
    <div>
      <el-table :data="dataList" style="width: 100%" align="center" height="400px" highlight-current-row
                :header-cell-style="{fontSize:'10px'}">
        <el-table-column prop="createddateTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="publicityCount" label="次数" align="center"></el-table-column>
        <el-table-column prop="attachFile" label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.attachFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="needAttachFile" label="需求相关附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.needAttachFile"></download-button>
          </template>
        </el-table-column>

        <el-table-column prop="publicitydateTime" label="发布日期" align="center"></el-table-column>
        <el-table-column prop="publicityWebName" label="发布公示网站" align="center"></el-table-column>
        <el-table-column prop="publicityImageFile" label="公示截图" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.publicityImageFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="publicityChangeImageFile" label="更正截图" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.publicityChangeImageFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="isdissent" label="是否有异议" align="center">
          <template slot-scope="scope">
            <switch-button prop="isdissent" :data="scope.row" @change="networkUpData"></switch-button>
          </template>
        </el-table-column>
        <el-table-column prop="dissentSubmitFile" label="提出异议的文件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.dissentSubmitFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="dissentDoWay" label="异议回复处理" align="center"></el-table-column>
        <el-table-column prop="dissentResultFile" label="异议驳回文件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.dissentResultFile"></download-button>
          </template>
        </el-table-column>

        <el-table-column prop="" label="操作" align="center" width="200" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="$refs.perfectRef.openDialog(scope.row)">完善发布信息</el-button>
            <el-button type="text" @click="$refs.handingRef.openDialog(scope.row)">异议处理登记</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <div class="dialog">
      <add-deman-dialog title="新增编制及发布" width="30%" ref="addRef" @getFormData="networkAddData"></add-deman-dialog>
      <add-deman-dialog title="修改" width="30%" ref="updateRef" @getFormData="networkUpData"></add-deman-dialog>
      <perfect-info-dialog title="完善发布信息" width="30%" ref="perfectRef" @getFormData="networkUpData"></perfect-info-dialog>
      <objection-handling-dialog title="异议处理登记" width="30%" ref="handingRef" @getFormData="networkUpData"></objection-handling-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddDemanDialog from "../dialog/DemandNoticeTable/AddDemanDialog.vue"
  import PerfectInfoDialog from "../dialog/DemandNoticeTable/PerfectInfoDialog.vue"
  import ObjectionHandlingDialog from "../dialog/DemandNoticeTable/ObjectionHandlingDialog.vue"
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
      AddDemanDialog,
      PerfectInfoDialog,
      ObjectionHandlingDialog,
    },
    props: {
      typeCode: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
    watch: {},
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
          publicityTypeKeyid: this.typeCode,
        }
        getPretrial(ref).then(item => {
          this.dataList = item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid = this.currentItem.keyid
        formData.publicityTypeKeyid= this.typeCode
        formData.publicityCount=this.dataList.length+1
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
        formData.pkeyid = this.$myfunction.copyData(formData.keyid)
        formData.keyid = ''
        addPretrial(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
    }
  }
</script>
<style lang='less' scoped>

</style>
