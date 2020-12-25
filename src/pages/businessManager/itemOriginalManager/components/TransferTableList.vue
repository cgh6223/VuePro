<template>
  <div class="logContainer">
    <!--移交-->
    <el-table
            :data="originalScriptList.dataList"
            style="width: 100%"
            align="center"
            height="330px"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">
      <el-table-column label="序号" type="index" align="center"></el-table-column>
      <el-table-column prop="" label="资料名称" align="center"></el-table-column>
      <el-table-column prop="" label="合同编号" align="center"></el-table-column>
      <el-table-column prop="" label="项目编号" align="center"></el-table-column>
      <el-table-column prop="" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="" label="份数" align="center"></el-table-column>
      <el-table-column prop="" label="移交人" align="center"></el-table-column>
      <el-table-column prop="" label="接收人" align="center"></el-table-column>
      <el-table-column prop="" label="移交申请时间" align="center"></el-table-column>
      <el-table-column prop="" label="备注" align="center"></el-table-column>
      <el-table-column label="操作" align="center" min-width="120px">
        <template slot-scope="scope">
          <status-button :title="scope.row.trunoverstatus"></status-button>
          <el-button type="text" @click="delTransfer(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination
            :pageTotal="originalScriptList.total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange">
    </pagination>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('originalScript')
  export default {
    components: {

    },
    props: {
    },
    watch: {

    },
    computed:{
      ...mapState({
        originalScriptList:'originalScriptList',
      })
    },
    //数据节点
    data() {
      return {
        pageShow: {
          pageInfo:{
            page: 1,
            limit: 30,
          },
          advancedQuery:{
            turnOverFileTypeKeyId:'1',
            turnOverFileTypeName:'项目'
          }
        },
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      ...mapActions({
        networkGetTransfer:'networkGetTransfer',
        networkDelTransfer:'networkDelTransfer',
      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.networkGetTransfer(this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.networkGetTransfer(this.pageShow)
      },
      delTransfer(data){
        this.networkDelTransfer(data).then(item=>{
          if (item) this.networkGetTransfer(this.pageShow)
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
</style>
