<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <el-table
            :data="customerInfo.dataList"
            style="width: 100%"
            :row-style="{height:'50px'}"
            align="center"
            height="7.5rem"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">
      <!--15换行-->
      <el-table-column prop="customerName" label="客户名称" align="center" width="200" fixed="left"></el-table-column>
      <el-table-column prop="createddateTime" label="创建时间" align="center" width="100"></el-table-column>
      <el-table-column prop="syscreatepersonname" label="创建人" align="center" width="100"></el-table-column>
      <el-table-column prop="region" label="所属省/市/区" align="center" width="200" show-overflow-tooltip></el-table-column>
      <el-table-column prop="unitNature" label="单位性质" align="center" width="100"></el-table-column>
      <el-table-column prop="startServiceTime" label="最早服务时间" align="center" width="150"></el-table-column>
      <el-table-column prop="endServiceTime" label="最后服务时间" align="center" width="150"></el-table-column>
      <el-table-column prop="businessInfo" label="服务业务" align="center" width="80">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>工程咨询: 已开展</p>
            <p>造价咨询: 未开展</p>
            <p>招标代理: 未开展</p>
            <p>工程监理: 未开展</p>
            <p>项目管理: 未开展</p>
            <p>全过程工程咨询: 未开展</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="earlyStageContacts" label="前期阶段客户联系人" align="center" width="150">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <el-table
                    :data="scope.row.earlyStageContacts"
                    style="width: 100%"
                    align="center"
                    height="230px"
                    highlight-current-row
                    :header-cell-style="{fontSize:'14px'}">
              <el-table-column prop="name" label="客户联系人" align="center"></el-table-column>
              <el-table-column prop="phone" label="联系人电话" align="center"></el-table-column>
              <el-table-column prop="department" label="联系人部门" align="center"></el-table-column>
              <el-table-column prop="duty" label="联系人职务" align="center"></el-table-column>
            </el-table>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="processContacts" label="项目实施中客户联系人" align="center" width="170">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <el-table
                    :data="scope.row.processContacts"
                    style="width: 100%"
                    align="center"
                    height="230px"
                    highlight-current-row
                    :header-cell-style="{fontSize:'14px'}">
              <el-table-column prop="name" label="客户联系人" align="center"></el-table-column>
              <el-table-column prop="phone" label="联系人电话" align="center"></el-table-column>
              <el-table-column prop="department" label="联系人部门" align="center"></el-table-column>
              <el-table-column prop="duty" label="联系人职务" align="center"></el-table-column>
            </el-table>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px" fixed="right">
        <template slot-scope="scope">
          <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination
            :pageTotal="customerInfo.total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange">
    </pagination>
    <!--添加客户-->
    <add-dialog ref="addRef" title="添加客户" width="30%" @getFormData="submitAddForm"></add-dialog>
    <!--高级查询-->
    <query-dialog ref="queryRef" title="高级查询" width="30%" @getFormData="submitQueryForm"></query-dialog>
    <!--客户信息查询-->
    <show-website-dialog ref="webRef" title="添加客户信息"></show-website-dialog>
    <add-website-dialog ref="addWebRef" title="查看客户信息"></add-website-dialog>
    <!--工作提醒-->
    <work-remind-dialog ref="workRef" title="创建提醒" @getFormData="submitWorkForm"></work-remind-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import pagination from '../../../../components/pagination/index.vue'
  import HeadButton from './button/HeadButton.vue'
  import TableButton from './button/TableButton.vue'
  import addDialog from './dialog/AddDialog.vue'
  import QueryDialog from './dialog/QueryDialog.vue'
  import AddWebsiteDialog from './dialog/AddWebsiteDialog.vue'
  import ShowWebsiteDialog from './dialog/ShowWebsiteDialog.vue'
  import WorkRemindDialog from './dialog/WorkRemindDialog.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('customerInfo')
  export default {
    components: {
      pagination,
      HeadButton,
      TableButton,
      addDialog,
      QueryDialog,
      AddWebsiteDialog,
      ShowWebsiteDialog,
      WorkRemindDialog
    },
    props: {},
    watch: {},
    computed: {
      ...mapState({
        customerInfo: 'customerInfo',
        advancedQuery: 'advancedQuery'
      })
    },
    //数据节点
    data() {

      return {
        pageShow: {
          pageInfo: {
            page: 1,
            limit: 30
          },
          advancedQuery: {}
        },
        remindCustomer:''
      }
    },
    //生命周期函数节点
    created() {
      this.networkQueryCustomer(this.pageShow)
    },
    //自定义函数节点
    methods: {
      ...mapMutations({
        updateCustomerId: 'updateCustomerId',
        updateAdvancedQuery: 'updateAdvancedQuery'
      }),
      ...mapActions({
        networkAddCustomer: 'networkAddCustomer',
        networkQueryCustomer: 'networkQueryCustomer',
      }),
      handleCurrentChange(val) {
        this.pageShow.pageInfo.page = val;
        this.pageShow.advancedQuery=this.advancedQuery
        this.networkQueryCustomer(this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.pageInfo.limit = val;
        this.pageShow.advancedQuery=this.advancedQuery
        this.networkQueryCustomer(this.pageShow)
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
            this.$refs.addWebRef.openDialog()
            break
        }
      },
      tableBtnClick(btn, data) {
        switch (btn) {
          case 1:
            this.updateCustomerId(data.keyid)
            this.$router.push({path: 'basicManager'})
            break
          case 2:
            this.$refs.workRef.openDialog()
              this.remindCustomer=data
            break
          case 3:
            break
        }
      },
      submitAddForm(data) {
        this.networkAddCustomer(data)
      },
      submitQueryForm(data) {

        this.updateAdvancedQuery(data)
        this.pageShow.advancedQuery = data
        this.networkQueryCustomer(this.pageShow)
      },
      submitWorkForm(data) {
        this.pushRemind({
          userList:[this.remindCustomer.syscreatepersonid],
          message:data.workRequirement
        })
      },
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
