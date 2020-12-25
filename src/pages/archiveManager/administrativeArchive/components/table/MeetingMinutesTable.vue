<template>
  <div class="body">
    <div class="table">
      <div class="table-head">
        <el-row>
          <el-col :span="2">
            <span>下载档案类型：</span>
          </el-col>
          <el-col :span="20">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="1">盖章文件</el-checkbox>
              <el-checkbox label="2">会议纪要</el-checkbox>
              <el-checkbox label="3">制度电子版</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
      </div>
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="会议类型" align="center"></el-table-column>
        <el-table-column prop="" label="会议主题" align="center"></el-table-column>
        <el-table-column prop="" label="会议编号" align="center"></el-table-column>
        <el-table-column prop="" label="会议主办单位" align="center"></el-table-column>
        <el-table-column prop="" label="内容摘要" align="center"></el-table-column>
        <el-table-column prop="" label="参会人员" align="center"></el-table-column>
        <el-table-column prop="" label="缺勤人员" align="center"></el-table-column>
        <el-table-column prop="" label="会议时间" align="center"></el-table-column>
        <el-table-column prop="" label="会议地点" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog"></div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'

  export default {
    components: {
      TableButton
    },
    props: {
      dataList: {
        type: Array,
        default: () => {
          return [
            {
              type: '新增'
            },
            {
              type: '申请'
            }
          ]
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        checkList:[]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn) {
        switch (btn) {
          case 1:
            break
          case 2:
            break
          case 3:
            break
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    cursor: pointer
  }.table-head{
     height: 30px;
     line-height: 30px;
     margin-bottom: 15px;
     span{
       font-size: 16px;
     }
   }
</style>
