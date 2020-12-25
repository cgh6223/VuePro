<!-- 编制及审核资格预审文件台账 -->
<template>
  <div>
    <head-right-button title="新增异议处理" @click="$refs.addHandlingRef.openDialog()"></head-right-button>
    <el-table :data="dataList" style="width: 100%" align="center" height="350px" highlight-current-row
              :header-cell-style="{fontSize:'10px'}">
      <el-table-column prop="createddateTime" label="创建时间" align="center" width="100"></el-table-column>
      <el-table-column prop="objectionDoWayName" label="澄清或修改方式" align="center" width="120"></el-table-column>
      <el-table-column prop="objectionFile" label="提出异议的文件" align="center" width="150">
        <template slot-scope="scope">
          <download-button :value="scope.row.objectionFile"></download-button>
        </template>
      </el-table-column>
      <el-table-column prop="objectionDesc" label="异议回复处理" align="center" width="120"></el-table-column>
      <el-table-column prop="noObjectionAttachFile" label="异议驳回文件" align="center" width="100">
        <template slot-scope="scope">
          <download-button :value="scope.row.noObjectionAttachFile"></download-button>
        </template>
      </el-table-column>
      <el-table-column prop="objectionchangeFile" label="澄清或修改的文件" align="center" width="150">
        <template slot-scope="scope">
          <download-button :value="scope.row.objectionchangeFile"></download-button>
        </template>
      </el-table-column>
      <el-table-column prop="objectionPublicityFile" label="公告截图" align="center" width="100">
        <template slot-scope="scope">
          <download-button :value="scope.row.objectionPublicityFile"></download-button>
        </template>
      </el-table-column>
      <el-table-column prop="objectionNoteFile" label="相关通知及回复" align="center" width="120">
        <template slot-scope="scope">
          <download-button :value="scope.row.objectionNoteFile"></download-button>
        </template>
      </el-table-column>

      <el-table-column prop="" label="操作" align="center" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="$refs.perfectHandlingRef.openDialog(scope.row)">完善异议处理信息</el-button>
        </template>
      </el-table-column>
    </el-table>


    <div lang="dialog">
      <add-objection-handling-dialog title="新增异议处理"
                                     width="30%"
                                     ref="addHandlingRef"
                                     @getFormData="networkAddData"></add-objection-handling-dialog>
      <perfect-objection-handling-dialog title="完善异议处理信息"
                                         width="40%"
                                         ref="perfectHandlingRef"
                                         @getFormData="networkUpData"></perfect-objection-handling-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddObjectionHandlingDialog from "../dialog/ObjectionTable/AddObjectionHandlingDialog.vue"
  import PerfectObjectionHandlingDialog from "../dialog/ObjectionTable/PerfectObjectionHandlingDialog.vue"
  import {mapState} from 'vuex'
  import {
    getBidFileHandel,
    addBidFileHandel,
    upBidFileHandel,
    delBidFileHandel
  } from '../../../../../../../api/workbench/webapi-biddingAgency.js'

  export default {
    components: {
      HeadRightButton,
      AddObjectionHandlingDialog,
      PerfectObjectionHandlingDialog,
    },
    props: {
      typecode:[String]
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
        let ref={
          projectKeyid:this.currentItem.keyid,
          typecode:this.typecode
        }
        getBidFileHandel(ref).then(item=>{
          this.dataList=item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid=this.currentItem.keyid
        formData.typecode=this.typecode
        addBidFileHandel(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        upBidFileHandel(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkDelData(formData) {
        delBidFileHandel(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkAdjustmentData(formData) {
        formData.pkeyid=this.$myfunction.copyData(formData.keyid)
        formData.keyid=''
        addBidFileHandel(formData).then(item=>{
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
