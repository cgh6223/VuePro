<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <head-button @click="headBtnClick"></head-button>
    </div>
    <div class="tag-page">
      <el-tabs v-model="activeName">
        <template v-for="item in activeList">
          <el-tab-pane :label="item.listname" :name="item.staticsCode">
            <table-template @getPageInfo="changePage"></table-template>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="dialog">
      <query-item-dialog ref="queryRef" title="高级查询" width="55%" @getFormData="submitQueryForm"></query-item-dialog>
      <add-item-dialog ref="addRef" title="投标备案" width="30%" @getFormData="submitAddForm"></add-item-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import TableTemplate from './table/TableTemplate.vue'
  import QueryItemDialog from './dialog/QueryItemDialog.vue'
  import AddItemDialog from './dialog/AddItemDialog.vue'
  import {mapState,mapActions,mapMutations} from 'vuex'


  export default {
    components: {
      TableTemplate,
      HeadButton,
      QueryItemDialog,
      AddItemDialog,
    },
    props: {},
    watch: {
      activeName(newValue) {
        this.updateState({k:'activeName',v:newValue})
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.tenderstatuskeyid=newValue
        this.networkGetDataList(this.pageShow)
      }
    },
    computed:{
        ...mapState('bidManager/bidRecord',{
          advancedQuery:'advancedQuery',
        })
    },
    //数据节点
    data() {
      return {
        activeList: [],
        activeName: '',
        dataList: [],
        total:0,
        pageShow: {
          pageInfo: {
            page: 1,
            limit: 30
          },
          advancedQuery: {
            tenderstatuskeyid:'0'
          }
        }

      }
    },
    //生命周期函数节点
    created() {
      this.networkGetSelectByCode('TYPE-128').then(item => {
        this.activeList = item
        this.activeName = item[0].staticsCode
      })
      this.networkGetDataList(this.pageShow)
    },
    //自定义函数节点
    methods: {
      ...mapActions('loadType', {
        networkGetSelectByCode: 'networkGetSelectByCode'
      }),
      ...mapActions('bidManager/bidRecord',{
        networkGetDataList:'networkGetDataList',
        networkAddData:'networkAddData',
      }),
      ...mapMutations('bidManager/bidRecord',{
        updateState:'update',
      }),
      headBtnClick(btn, data) {
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
            this.$router.push({path: 'website_manager'})
            break
          case 5:

            this.$router.push({path: 'bid_template'})
            break
          case 6:
            break
          case 8:
            break
        }
      },
      submitQueryForm(formData){
        this.updateState({k:'advancedQuery',v:formData})
        formData.tenderstatuskeyid=this.activeName
        this.pageShow.advancedQuery=formData
        this.networkGetDataList(this.pageShow)
      },
      changePage(pageInfo){
        this.pageShow.pageInfo=pageInfo
        this.pageShow.advancedQuery=this.advancedQuery
        this.pageShow.advancedQuery.tenderstatuskeyid=this.activeName
        this.networkGetDataList(this.pageShow)
      },
      submitAddForm(formData){
        this.networkAddData(formData)
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
