<template>
  <div>
    <div class="button">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog(item.keyid)">新增文件
      </el-button>
    </div>
    <div :key="tableKey" class="table">
      <el-table ref="tableRef"
                :data="dataList"
                style="width: 100%"
                align="center"
                height="7.5rem"
                highlight-current-row
                :header-cell-style="{fontSize:'14px'}"
                default-expand-all
                :indent="8"
                row-key="keyid"
                :tree-props="{children: 'children',hasChildren: 'isShow'}">
        <el-table-column prop="tenderdocumentsname" label="文件名称" align="left"></el-table-column>
        <el-table-column prop="tenderdocumentsfile" label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.tenderdocumentsfile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="changedesc" label="修改要求" align="center"></el-table-column>
        <el-table-column prop="changedocumentsfile" label="修改后底稿" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.changedocumentsfile"></download-button>
          </template>
        </el-table-column>
        <el-table-column prop="auditingdateTime" label="审核完成时间" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="300px">
          <template slot-scope="scope">
            <template v-if="scope.row.allstatuscode!=='7'">
              <el-button type="text" @click="$refs.upRef.openDialog(scope.row)">重新调整</el-button>
              <submit-button v-if="scope.row.allstatuscode==='0'" title="提交审核"
                             @click="submitExamine(scope.row)"></submit-button>
              <submit-button v-if="scope.row.allstatuscode==='2'" title="提交盖章"
                             @click="submitSeal(scope.row)"></submit-button>
            </template>
            <status-button code="088" :status="scope.row.allstatuscode"></status-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <add-make-bid-file-dialog ref="addRef" title="新增文件" @getFormData="networkAddData"></add-make-bid-file-dialog>
      <up-make-bid-file-dialog ref="upRef" title="调整文件" @getFormData="networkUpData"></up-make-bid-file-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import AddMakeBidFileDialog from '../dialog/AddMakeBidFileDialog.vue'
  import UpMakeBidFileDialog from '../dialog/UpMakeBidFileDialog.vue'
  import {mapState} from 'vuex'
  import {
    getBidItemFile,
    addBidItemFile,
    upBidItemFile,
    delBidItemFile,
    getSubcontract
  } from '../../../../../api/webapi-bidRecord.js'

  export default {
    components: {
      AddMakeBidFileDialog,
      UpMakeBidFileDialog
    },
    props: {
      typeCode: [String]
    },
    watch: {

    },
    computed: {
      ...mapState('bidManager', {
        item: 'item'
      })
    },
    //数据节点
    data() {
      return {
        dataList: [],
        tableKey: 1,
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDataList()

    },
    //自定义函数节点
    methods: {
      async load(tree, treeNode, resolve) {

        resolve(tree.children)
      },

      async handleExpandChange(row, expanded) {

      },
      networkGetDataList() {
        getBidItemFile({tenderkeyid: this.item.keyid, typeCode: this.typeCode, pkeyid: '0000'}).then(item => {
          this.treeTableDataFormat(item.data,'tender/tenderdocuments/findwhere').then(item=>{
            this.dataList=item
          })
        })
      },
      networkAddData(formData) {
        formData.tenderkeyid = this.item.keyid
        formData.typeCode = this.typeCode
        addBidItemFile(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        getSubcontract({tenderDocKeyid: formData.keyid}).then(item => {
          if (item.data.length <= 0) {
            formData.allstatuscode = '7'
            formData.allstatusname = 'true'
            upBidItemFile(formData).then(item => {
              if (item.code === 200) {
                this.$message.success(item.message)
                this.networkGetDataList()
              }
            })
            let ref = {
              tenderdocumentsname: formData.tenderdocumentsname,
              tenderdocumentsfile: formData.changedocumentsfile,
              pkeyid: formData.keyid,
            }
            this.networkAddData(ref)
            this.tableKey++
          } else {
            this.$message.info('该数据已产生开标评标数据，不能调整')
          }
        })

      },
      networkDelData(formData) {
        delBidItemFile(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      async submitExamine(data) {
        this.ddform('v_2020_tbgl_wjtjsh', {
          signList: [
            {name: '项目名称', value: this.item.projectname},
            {name: '文件名称', value: data.tenderdocumentsname},
            {name: "申请日期", value: this.$myfunction.addDayToDate(new Date().getTime(), 0, 'datetime', '-')}
          ],
          fileList: [{title: '文件', file: await this.getfile(data.tenderdocumentsfile)}],
          muitList: [{name: '备注', value: data.tenderdocumenteditdesc}],
        }).then(flowId => {
          data.allstatuscode = '1'
          upBidItemFile(data).then(item => {
            this.ddflow(2, 3, {
              baseId: data.keyid,
              baseColumn: 'allstatuscode',
              baseUrl: 'tender/tenderdocuments',
              fType: '文件审核',
              flowId: flowId
            })
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
              {title: '盖章附件', file: await this.getfile(data.noticeFile)},
            ],
            muitList: [{name: '份数', value: value}],
          }).then(flowId => {
            data.allstatuecode = '4'
            this.networkUpData(data)
            this.ddflow(5, 6, {
              baseId: data.keyid,
              baseUrl: '/pro/tenderdocuments',
              baseColumn: 'allstatuecode',
              flowId: flowId,
              fType: '文件审核'
            })
          })
        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .button {
    height: 25px;
    padding: 15px 10px;
  }
</style>
