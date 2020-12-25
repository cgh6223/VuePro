<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="行政检查名称" align="center"></el-table-column>
        <el-table-column prop="" label="检查单位" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>单位: 招标一部</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="公司检查人员" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>张三、王五</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="协助人员" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>李四、赵六</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="检查要求" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>3
        </el-table-column>
        <el-table-column prop="" label="检查提交材料" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="检查结果" align="center"></el-table-column>
        <el-table-column prop="" label="通过后相关证明材料" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="整改措施" align="center"></el-table-column>
        <el-table-column prop="" label="整改相关资料" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="整改结果" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <administrative-inspection-dialog ref="upRef" title="修改行政信息"></administrative-inspection-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import TextButton from '../../../acomponents/TextButton.vue'
  import AdministrativeInspectionDialog from '../dialog/AdministrativeInspectionDialog.vue'
  export default {
    components: {
      TableButton,
      TextButton,
      AdministrativeInspectionDialog
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
      tableButtonClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.upRef.openDialog()
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
