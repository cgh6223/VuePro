<template>
  <div>
    <div class="button"></div>
    <div class="table">
      <el-table :key="tableKey" :data="fileList" stripe :show-header="false" @expand-change="networkGetDataList">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
                    ref="tableRef"
                    :data="dataList"
                    style="width: 100%"
                    align="center"
                    height="7.5rem"
                    highlight-current-row
                    :header-cell-style="{fontSize:'14px'}">
              <el-table-column prop="tenderDocName" label="文件名称" align="center"></el-table-column>
              <el-table-column prop="bidsectionname" label="分包/分标段名称" align="center" width="140"></el-table-column>
              <el-table-column prop="iswinbidding" label="是否中标" align="center">
                <template slot-scope="scope">
                  {{scope.row.iswinbidding===true?'是':scope.row.iswinbidding===false?'否':''}}
                </template>
              </el-table-column>
              <el-table-column prop="winbiddingsum" label="中标价" align="center"></el-table-column>
              <el-table-column prop="winbiddingfile" label="中标通知书" align="center">
                <template slot-scope="scope">
                  <download-button :value="scope.row.winbiddingfile"></download-button>
                </template>
              </el-table-column>
              <el-table-column prop="winbidlist" label="其他中标情况" align="center">
                <template slot-scope="scope">
                  <el-popover trigger="click" placement="top">
                    <el-table :data="scope.row.winbidlist">
                      <el-table-column label="单位名称" prop="othercompanyname"></el-table-column>
                      <el-table-column label="中标价" prop="winbiddingsum"></el-table-column>
                    </el-table>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">详细</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column prop="bidopeningimagefile" label="中标结果截图" align="center" width="120px">
                <template slot-scope="scope">
                  <download-button :value="scope.row.bidopeningimagefile"></download-button>
                </template>
              </el-table-column>
              <el-table-column prop="" label="操作" align="center" width="100px">
                <template slot-scope="scope">
                  <el-button type="text" @click="$refs.upRef.openDialog(scope.row)">完善中标信息</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column prop="tenderdocumentsname" min-width="100px" align="left"></el-table-column>
        <el-table-column align="center" width="100px">
          <template slot-scope="scope">
            <template v-if="typeCode==='402880fa750101f90175029c9dc30010'">
              <el-button type="text" size="mini" @click="networkAddData(scope.row)">新增分包</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <up-result-dialog ref="upRef" @getFormData="submitFormData"></up-result-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'
  import UpResultDialog from '../dialog/UpResultDialog.vue'
  import {mapState} from 'vuex'
  import {
    getBidItemFile,
    addSubcontract,
    getSubcontract,
    upSubcontract,
    addOtherCom
  } from '../../../../../api/webapi-bidRecord.js'

  export default {
    components: {
      ElPopoverTemplate,
      UpResultDialog
    },
    props: {
      typeCode: [String]
    },
    watch: {},
    computed: {
      ...mapState('bidManager', {
        item: 'item'
      })
    },
    //数据节点
    data() {
      return {
        tableKey: 1,
        dataList: [],
        fileList: []
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetFileDataList()
    },
    mounted() {
    },
    //自定义函数节点
    methods: {
      //查找审核通过的投标文件
      networkGetFileDataList() {
        let ref = {
          tenderkeyid: this.item.keyid,
          typeCode: this.typeCode,
          allstatuscode: '2',
        }
        getBidItemFile(ref).then(item => {
          this.fileList = item.data
        })
      },
      networkGetDataList(row, expandedRows) {
        if (expandedRows[0]) {
          let ref = {
            tenderkeyid: this.item.keyid,
            typeCode: this.typeCode,
            tenderDocKeyid: row.keyid
          }
          getSubcontract(ref).then(item => {
            this.dataList = item.data
          })
        }
      },
      //新增分包
      networkAddData(formData) {
        this.$msgbox.prompt('分包/分标段名称', '新增分包/分标段名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S+/,
          inputErrorMessage: '不能为空'
        }).then(({value}) => {
          let ref = {
            tenderkeyid: formData.tenderkeyid,
            tenderDocKeyid: formData.keyid,
            tenderDocName: formData.tenderdocumentsname,
            typeCode: formData.typeCode,
            bidsectionname: value
          }
          addSubcontract(ref).then(item => {
            if (item.code === 200) {
              this.$message.success(item.message)
              this.tableKey++
            }
          })
        })
      },
      submitFormData(formData) {
        upSubcontract(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            formData.winbidlist.forEach(ref => {
              Object.assign(ref, {bidopenkeyid: item.data.keyid})
              addOtherCom(ref)
            })
            let ref={
              tenderkeyid: this.item.keyid,
              typeCode: this.typeCode,
              tenderDocKeyid:formData.tenderDocKeyid
            }
            getSubcontract(ref).then(item => {
              this.dataList = item.data
            })
          }
        })
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
