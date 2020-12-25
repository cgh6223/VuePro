<template>
  <div>
    <div>
      <head-right-button @click="$refs.addProofRef.openDialog()" title="新增论证"></head-right-button>
    </div>
    <div>
      <el-table :data="dataList" style="width: 100%" align="center" highlight-current-row
                :header-cell-style="{fontSize:'10px'}">
        <el-table-column prop="createddateTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="proofcount" label="次数" align="center"></el-table-column>
        <el-table-column prop="proofName" label="论证名称" align="center"></el-table-column>
        <el-table-column prop="proofFile" label="论证相关资料" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.proofFile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.reviceProofeRef.openDialog(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <add-proof-dialog :file-head="fileHead" title="新增论证" width="30%" ref="addProofRef"
                        @getFormData="networkAddData"></add-proof-dialog>
      <add-proof-dialog :file-head="fileHead" title="修改论证" width="30%" ref="reviceProofeRef"
                        @getFormData="networkUpData"></add-proof-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddProofDialog from "../dialog/DocumentProofTable/AddProofDialog.vue"
  import {mapState} from 'vuex'
  import {
    getDocumentProof,
    addDocumentProof,
    upDocumentProof,
    delDocumentProof
  } from '../../../../../../../api/workbench/webapi-biddingAgency.js'

  export default {
    components: {
      HeadRightButton,
      AddProofDialog,
    },
    props: {
      typeCode: {
        type: String,
        default: ''
      }
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
        fileHead: ''
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDatas()
    },
    //自定义函数节点
    methods: {
      networkGetDatas() {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typeCode: this.typeCode
        }
        getDocumentProof(ref).then(item => {
          this.dataList = item.data
        })
      },
      networkAddData(formData) {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          typeCode: this.typeCode
        }
        Object.assign(formData, ref)
        addDocumentProof(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      },
      networkUpData(formData) {
        formData.proofcount = formData.proofcount + 1
        upDocumentProof(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDatas()
          }
        })
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
