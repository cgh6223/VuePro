<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <el-table
            :data="registerList.dataList"
            style="width: 100%"
            align="center"
            height="7.5rem"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">
      <el-table-column prop="syscreatepersonname" label="创建人" align="center" width="100"></el-table-column>
      <el-table-column prop="createddateTime" label="创建时间" align="center" width="100"></el-table-column>
      <el-table-column prop="customerName" label="回访客户名称" align="center" width="200" fixed="left"
                       show-overflow-tooltip></el-table-column>
      <!--20字换行-->
      <el-table-column prop="relationDepartment" label="回访事件相关部门" align="center" width="250"></el-table-column>
      <el-table-column prop="returnTime" label="回访时间" align="center" width="100"></el-table-column>
      <el-table-column prop="way" label="回访方式" align="center" width="100"></el-table-column>
      <el-table-column prop="types" label="回访类型" align="center" width="100"></el-table-column>
      <el-table-column prop="" label="被访人信息" align="center" width="100">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>姓名: {{scope.row.userName}}</p>
            <p>部门: {{scope.row.userDepartment}}</p>
            <p>职位: {{scope.row.userDuty}}</p>
            <p>电话: {{scope.row.userPhone}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="business" label="回访涉及业务类型" align="center" width="150"></el-table-column>
      <el-table-column prop="technologyQuality" label="技术评价" align="center" width="100"></el-table-column>
      <el-table-column prop="serverQuality" label="服务评价" align="center" width="100"></el-table-column>
      <el-table-column prop="complaints" label="是否有投诉" align="center" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.complaints.bool() ">
            <el-popover trigger="click" placement="top">
              <p>被投诉人：{{scope.row.complaintsMan}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">是</el-tag>
              </div>
            </el-popover>
          </template>
          <template v-else>
            <span>否</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="praise" label="是否有表扬" align="center" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.praise.bool()">
            <el-popover trigger="click" placement="top">
              <p>被投诉人：{{scope.row.complaintsMan}}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">是</el-tag>
              </div>
            </el-popover>
          </template>
          <template v-else>
            <span>否</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="dealt" label="处理人" align="center" width="100"></el-table-column>
      <el-table-column prop="reviewer" label="审核人" align="center" width="100"></el-table-column>
      <el-table-column label="操作" align="center" width="200px" fixed="right">
        <template slot-scope="scope">
          <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination
            :pageTotal="registerList.total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange">
    </pagination>
    <!--添加客户回访-->
    <add-dialog ref="addRef" title="客户回访登记" width="35%" @getFormData="submitAddForm"></add-dialog>
    <!--高级查询-->
    <query-dialog ref="queryRef" title="高级查询" width="42%" @getFormData="submitQueryForm"></query-dialog>
    <!--提交处理-->
    <handle-dialog ref="handleRef" title="处理情况" width="45%" @getFormData="submitHandleForm"></handle-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import pagination from '../../../../components/pagination/index.vue'
  import HeadButton from './button/HeadButton.vue'
  import TableButton from './button/TableButton.vue'
  import QueryDialog from './dialog/QueryDialog.vue'
  import AddDialog from './dialog/AddDialog.vue'
  import HandleDialog from './dialog/HandleDialog.vue'
  import {mapMutations} from 'vuex'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapActions} = createNamespacedHelpers('maintenance')
  export default {
    components: {
      pagination,
      HeadButton,
      TableButton,
      QueryDialog,
      AddDialog,
      HandleDialog
    },
    props: {},
    watch: {},
    computed: {
      ...mapState({
        advancedQuery: 'advancedQuery',
        registerList: 'registerList'
      })
    },
    //数据节点
    data() {
      return {
        //数据源
        dataList: this.myData,
        //条数
        total: this.pageTotal,
        pageShow: {
          pageInfo: {
            page: 1,
            limit: 30,
          },
          advancedQuery: {},
        },
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetRegisterList(this.pageShow)
    },
    //自定义函数节点
    methods: {
      ...mapMutations({
        updateAdvancedQuery: "maintenance/updateAdvancedQuery",
        updateModel: 'template/updateModel'
      }),
      ...mapActions({
        networkGetRegisterList: 'networkGetRegisterList',
        networkAddRegisterInfo: "networkAddRegisterInfo",
        networkGetRegisterByKeyId: 'networkGetRegisterByKeyId',
        networkAddExamineResult: 'networkAddExamineResult',
        networkUpRegisterInfo: 'networkUpRegisterInfo',
      }),
      handleCurrentChange(val) {
        this.pageShow.pageInfo.page = val;
        this.pageShow.advancedQuery = this.advancedQuery
        this.networkGetRegisterList(this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.pageInfo.limit = val;
        this.pageShow.advancedQuery = this.advancedQuery
        this.networkGetRegisterList(this.pageShow)
      },
      headBtnClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.addRef.openDialog()
            break
          case 2:
            this.$refs.queryRef.openDialog()
            break
          case 3:
            break
          case 4:
            const ref = {
              code: '402880fa74e735230174ec6d1a42000b',
              name: '客户模块/客户回访',
            }
            this.updateModel(ref)
            this.$router.push({path: 'original_template'})
            break
          case 5:
            break
        }
      },
      tableBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.networkGetRegisterByKeyId(data.keyid)
            this.$router.push({path: 'custMainManager'})
            break
          case 2:
            this.$refs.handleRef.openDialog(data)
            break
        }
      },
      //提交数据
      submitAddForm(data) {
        this.networkAddRegisterInfo(data)
      },
      submitQueryForm(data) {
        this.updateAdvancedQuery(data)
        this.pageShow.advancedQuery = data
        this.networkGetRegisterList(this.pageShow)
      },
      async submitHandleForm(data) {

        this.ddform('v_2020_khwh_hfcl', {
          fileList: [
            {title: '相关处理资料', file: await this.getfile(data.handleMaterialFile)}
          ],
          muitList: [
            {name: '整体提升措施', value: data.rectification},
            {name: '处理结果', value: data.handleResults},
          ]
        }).then(flowId => {
          this.networkGetRegisterByKeyId(data.sumerserveid).then(({data:refs}) => {
            let cus=refs[0]
            cus.allstatuscode = '4'
            this.networkUpRegisterInfo(cus).then(upCus => {
              if (upCus.code === 200) {
                //新增处理记录
                data.allstatuscode='1'
                this.networkAddExamineResult(data).then(item=>{
                  this.$msgbox.confirm(item.data)
                  this.ddflow(2, 3, {
                    baseId: item.data[0].keyid,
                    baseUrl: 'crm/auditresult',
                    baseColumn: 'allstatuscode',
                    flowId: flowId,
                    fType: '回访处理'
                  })
                })
                //备案客户回访处理流程
                this.ddflow(5, 6, {
                  baseId: cus.keyid,
                  baseUrl: 'crm/consumerserves',
                  baseColumn: 'allstatuscode',
                  flowId: flowId,
                  fType: '回访处理'
                })

              }
            })
          })

        })

      }
    }
  }
</script>
<style lang='less' scoped>
  .search_container {
    margin-bottom: 20px;
  }

  .searchArea {
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 18px 18px 0;
  }

  .el-tag {
    cursor: pointer
  }
</style>
