<template>
  <div>
    <div class="table">
      <div class="table-head">
        <el-row>
          <el-col :span="2">
            <span>下载档案类型：</span>
          </el-col>
          <el-col :span="20">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="1">招标文件</el-checkbox>
              <el-checkbox label="2">投标文件</el-checkbox>
              <el-checkbox label="3">报价函</el-checkbox>
              <el-checkbox label="4">中标结果截图</el-checkbox>
              <el-checkbox label="5">中标通知书</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
      </div>
      <el-table
              ref="tableRef"
              :data="dataList"
              style="width: 100%"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column prop="establishTime" label="创建日期" align="center"></el-table-column>
        <el-table-column prop="establishPerson" label="创建人" align="center"></el-table-column>
        <el-table-column prop="itemName" label="项目名称" align="center"></el-table-column>
        <el-table-column prop="partyA" label="甲方信息" align="center">
          <template slot-scope="scope">
            <el-popover-template title="详细" :p-object="{show:true,labelPropList:partyAObject,data:scope.row.partyA}"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="isHasCustomer" label="是否为既有客户" align="center"></el-table-column>
        <el-table-column prop="biddingAddress" label="开标场地" align="center">
          <template slot-scope="scope">
            <el-popover-template title="详细" :p-object="{show:true,labelPropList:biddingAddress,data:scope.row.biddingAddress}"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="signUpTime" label="报名时间" align="center"></el-table-column>
        <el-table-column prop="biddingTime" label="开标时间" align="center"></el-table-column>
        <el-table-column prop="biddingFileAnalysis" label="招标文件分析" align="center">
          <template slot-scope="scope">
            <el-popover-template title="详细"
                                 :p-object="{show:true,labelPropList:biddingFileAnalysis,data:scope.row.biddingFileAnalysis}"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="bidType" label="投标形式" align="center"></el-table-column>
        <el-table-column prop="bidHead" label="投标负责人" align="center"></el-table-column>
        <el-table-column prop="depositInfo" label="保证金情况" align="center">
          <template slot-scope="scope">
            <el-popover-template title="详细"  :p-object="{show:true,labelPropList:depositInfo,data:scope.row.depositInfo}"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="winBid" label="中标情况" align="center">
          <template slot-scope="scope">
            <el-popover-template title="详细" :p-object="{show:true,labelPropList:winBid,data:scope.row.winBid}"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="300px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
              :pageTotal="total"
              @handleCurrentChange="handleCurrentChange"
              @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">

    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import pagination from '../../../../../components/pagination/index.vue'

  export default {
    components: {
      pagination,
    },
    props: {
      dataList:[]
    },
    watch: {},
    //数据节点
    data() {
      return {
        total:0,
        pageShow: {
          page: 1,
          limit: 20,
          filter: '1=1'
        },
        checkList:[]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableBtnClick(btn,data){
        switch (btn) {
          case 1:
            break
        }
      },
      handleCurrentChange(val) {
        this.pageShow.page = val;

      },
      handleSizeChange(val) {
        this.pageShow.limit = val;

      },
    }
  }
</script>
<style lang='less' scoped>
  .table-head{
    height: 30px;
    line-height: 30px;
    margin-bottom: 15px;
    span{
      font-size: 16px;
    }
  }
</style>
