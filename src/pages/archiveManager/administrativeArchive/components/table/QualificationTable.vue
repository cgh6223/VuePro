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
              <el-checkbox label="1">证书正本</el-checkbox>
              <el-checkbox label="2">证书副本</el-checkbox>
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
        <el-table-column prop="" label="资质名称" align="center"></el-table-column>
        <el-table-column prop="" label="资质等级" align="center"></el-table-column>
        <el-table-column prop="" label="技术负责人" align="center"></el-table-column>
        <el-table-column prop="" label="专业" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>专业: 专业一</p>
              <p>专业: 专业二</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="有效期" align="center"></el-table-column>
        <el-table-column prop="" label="副本情况" align="center"></el-table-column>
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
  }
  .table-head{
    height: 30px;
    line-height: 30px;
    margin-bottom: 15px;
    span{
      font-size: 16px;
    }
  }
</style>
