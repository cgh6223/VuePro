<template>
  <div class="logContainer">
    <div class="button">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <div class="main-body">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">启用人员</span>
          <div class="table">
            <table-template :data-list="allPerson.dataList" :total="allPerson.total"
                            :table-height="tableHeight" @getPageInfo="getPageInfo"></table-template>
          </div>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">停用人员</span>
          <div class="table">
            <table-template :data-list="allPerson.dataList" :total="allPerson.total"
                            :table-height="tableHeight" @getPageInfo="getPageInfo"></table-template>
          </div>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">离职人员</span>
          <div class="table">
            <table-template :data-list="allPerson.dataList" :total="allPerson.total"
                            :table-height="tableHeight" @getPageInfo="getPageInfo"></table-template>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="dialog">
      <!--新增人员对话框-->
      <add-person-info-dialog title="添加人员信息"
                              ref="addDialogRef"
                              @getFormData="getAddFormData"></add-person-info-dialog>
      <!--高级查询-->

      <query-person-info-dialog title="高级查询"
                                width="70%"
                                ref="queryDialogRef"
                                @getFormData="getQueryFormData"></query-person-info-dialog>

      <!--社保公积金导入-->
      <social-fund-dialog title="社保公积金导入"
                          ref="socialDialogRef"
                          @getFormData="getSocialFormData"></social-fund-dialog>

      <!--社保公积金扫描件导入-->
      <social-fund-dialog title="社保公积金扫描件导入"
                          ref="socialFileDialogRef"
                          @getFormData="getScanFileFormData"></social-fund-dialog>
      <!--工资信息导入-->
      <salary-info-dialog title="工资信息导入"
                          ref="salaryDialogRef"
                          @getFormData="getSalaryFormData"></salary-info-dialog>

    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableTemplate from './TableTemplate.vue'
  import HeadButton from './button/HeadButton.vue'
  import AddPersonInfoDialog from './dialog/AddPersonInfoDialog.vue'
  import QueryPersonInfoDialog from './dialog/QueryPersonInfoDialog.vue'
  import SocialFundDialog from './dialog/SocialFundDialog.vue'
  import SalaryInfoDialog from './dialog/SalaryInfoDialog.vue'
  import StationDialog from './dialog/StationDialog.vue'

  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      HeadButton,
      AddPersonInfoDialog,
      QueryPersonInfoDialog,
      SocialFundDialog,
      SalaryInfoDialog,
      StationDialog,
      TableTemplate
    },
    computed: {
      ...mapState({
        allPerson: 'allPerson',
        pageShow: 'pageShow',
      })
    },
    watch: {
      activeName(newValue) {
        switch (newValue) {
          case '1':
            this.pageShow.advancedQuery.statusid='0'
            break
          case '2':
            this.pageShow.advancedQuery.statusid='1'
            break
          case '3':
            this.pageShow.advancedQuery.statusid='2'
            break
        }
        this.networkGetAllPerson(this.pageShow)
      }
    },
    //数据节点
    data() {
      return {
        activeName: '1',
        //数据表格高度
        tableHeight: '7.5rem',
        //条数
        total: this.pageTotal,
        personId: '',
      }
    },
    mounted() {
    },
    //生命周期函数节点
    created() {
      this.networkGetAllPerson()
    },
    //自定义函数节点
    methods: {
      ...mapMutations({
        updatePageShow:'updatePageShow',
        updateAdvancedQuery: 'updateAdvancedQuery'
      }),
      ...mapActions({
        networkGetAllPerson: 'networkGetAllPerson',
        networkAddPerson: 'networkAddPerson',
      }),
      getPageInfo(pageInfo){
        let pageShow=this.$myfunction.copyData(this.pageShow)
        pageShow.pageInfo=pageInfo
        this.networkGetAllPerson(pageShow)
      },
      headBtnClick(btnId) {
        switch (btnId) {
          case 1:
            this.$refs.addDialogRef.openDialog()
            break
          case 2:
            this.$refs.queryDialogRef.openDialog()
            break
          case 3:
            this.$router.push({path: '/HR/dataInfo_manager'})
            break
          case 4:

            break
          case 5:
            this.$refs.socialDialogRef.openDialog()

            break
          case 6:
            this.$refs.socialFileDialogRef.openDialog()

            break
          case 7:
            this.$refs.salaryDialogRef.openDialog()

            break
        }
      },

      getAddFormData(data) {
        this.networkAddPerson(data)
      },
      getQueryFormData(data) {
        switch (this.activeName) {
          case '1':
            data.statusid='0'
            break
          case '2':
            data.statusid='1'
            break
          case '3':
            data.statusid='2'
            break
        }
        this.updateAdvancedQuery(data)
        this.networkGetAllPerson()
      },
      getSocialFormData(data) {
        this.$emit('submitFormData', 'socialForm', data)
      },
      //
      getScanFileFormData(data) {
        this.$emit('submitFormData', 'scanFileForm', data)
      },
      getSalaryFormData(data) {
        this.$emit('submitFormData', 'salaryForm', data)
      },
      openAddSocialDialog(data) {
        this.$refs.stationDialogRef.openDialog()
        this.personId = data.id
      },
    }
  }
</script>
<style lang='less' scoped>
  .button {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
  }
</style>
