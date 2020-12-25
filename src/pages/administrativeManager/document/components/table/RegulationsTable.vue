<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="名称" align="center"></el-table-column>
        <el-table-column prop="" label="编号" align="center"></el-table-column>
        <el-table-column prop="" label="类型" align="center"></el-table-column>
        <el-table-column prop="" label="附件" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="内容摘要" align="center"></el-table-column>
        <el-table-column prop="" label="制度发布日期" align="center"></el-table-column>
        <el-table-column prop="" label="制度执行时间" align="center"></el-table-column>
        <el-table-column prop="" label="制度涉及的组织" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <regulations-dialog title="修改规章制度" ref="upRef"></regulations-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import RegulationsDialog from '../dialog/RegulationsDialog.vue'
  import TextButton from '../../../acomponents/TextButton.vue'

  export default {
    components: {
      TableButton,
      RegulationsDialog,
      TextButton
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
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn,data) {
        switch (btn) {
          case 1:
            this.$refs.upRef.openDialog(data)
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
</style>
